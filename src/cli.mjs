import {
  PACKAGE_NAME,
  PACKAGE_VERSION,
  SUPPORTED_HOSTS,
  SUPPORTED_SCOPES,
  formatSupportedValues
} from './config.mjs';
import { doctorPack } from './doctor.mjs';
import { installPack } from './install.mjs';
import { DEFAULT_PACK_ID, listInstallablePackIds } from './packs.mjs';
import { uninstallPack } from './uninstall.mjs';

function printHelp() {
  console.log(
    [
      `${PACKAGE_NAME} v${PACKAGE_VERSION}`,
      '',
      'Usage:',
      '  make-product-spec install --host <codex|claude> --scope <local|global> [--pack <prebuild|planning>] [--project-root <path>] [--prefix <name>] [--force] [--dry-run]',
      '  make-product-spec uninstall --host <codex|claude> --scope <local|global> [--pack <prebuild|planning>] [--project-root <path>] [--dry-run]',
      '  make-product-spec doctor --host <codex|claude> --scope <local|global> [--pack <prebuild|planning>] [--project-root <path>]',
      '',
      'Notes:',
      '  --scope defaults to local',
      '  --project-root defaults to the current working directory',
      `  --pack defaults to "${DEFAULT_PACK_ID}"`,
      '  --prefix defaults to the selected pack default prefix',
      '  compatibility aliases: dev-spec, spec-pack, planning-pack'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const options = {};

  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith('--')) {
      throw new Error(`Unexpected argument: ${token}`);
    }

    const key = token.slice(2);
    if (key === 'force' || key === 'dry-run' || key === 'help') {
      options[key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = true;
      continue;
    }

    const value = rest[index + 1];
    if (!value || value.startsWith('--')) {
      throw new Error(`Missing value for --${key}`);
    }

    options[key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = value;
    index += 1;
  }

  return { command, options };
}

function assertAllowedValue(flag, value, allowedValues) {
  if (!allowedValues.includes(value)) {
    throw new Error(`${flag} must be one of: ${formatSupportedValues(allowedValues)}`);
  }
}

function validateCommandOptions(command, options) {
  if (!options.host) {
    throw new Error(`--host is required and must be one of: ${formatSupportedValues(SUPPORTED_HOSTS)}`);
  }

  assertAllowedValue('--host', options.host, SUPPORTED_HOSTS);

  const scope = options.scope || 'local';
  assertAllowedValue('--scope', scope, SUPPORTED_SCOPES);

  if (options.pack) {
    assertAllowedValue('--pack', options.pack, listInstallablePackIds());
  }

  if (command === 'doctor' && options.force) {
    throw new Error('--force is not supported for doctor');
  }
}

function printResult(result) {
  console.log(JSON.stringify(result, null, 2));
}

export function runCli(argv) {
  try {
    if (argv.length === 0 || argv.includes('--help')) {
      printHelp();
      return;
    }

    const { command, options } = parseArgs(argv);

    if (command === 'install') {
      validateCommandOptions(command, options);
      printResult(installPack(options));
      return;
    }

    if (command === 'uninstall') {
      validateCommandOptions(command, options);
      printResult(uninstallPack(options));
      return;
    }

    if (command === 'doctor') {
      validateCommandOptions(command, options);
      printResult(doctorPack(options));
      return;
    }

    if (command === 'help') {
      printHelp();
      return;
    }

    throw new Error(`Unknown command: ${command}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
