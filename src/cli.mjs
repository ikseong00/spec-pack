import { PACKAGE_NAME, PACKAGE_VERSION } from './config.mjs';
import { doctorPack } from './doctor.mjs';
import { installPack } from './install.mjs';
import { uninstallPack } from './uninstall.mjs';

function printHelp() {
  console.log(
    [
      `${PACKAGE_NAME} v${PACKAGE_VERSION}`,
      '',
      'Usage:',
      '  planning-pack install --host <codex|claude> --scope <local|global> [--project-root <path>] [--prefix <name>] [--force] [--dry-run]',
      '  planning-pack uninstall --host <codex|claude> --scope <local|global> [--project-root <path>] [--dry-run]',
      '  planning-pack doctor --host <codex|claude> --scope <local|global> [--project-root <path>]',
      '',
      'Notes:',
      '  --scope defaults to local',
      '  --project-root defaults to the current working directory',
      '  --prefix defaults to "planning"'
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

function requireHost(options) {
  if (!options.host) {
    throw new Error('--host is required and must be one of: codex, claude');
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
      requireHost(options);
      printResult(installPack(options));
      return;
    }

    if (command === 'uninstall') {
      requireHost(options);
      printResult(uninstallPack(options));
      return;
    }

    if (command === 'doctor') {
      requireHost(options);
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
