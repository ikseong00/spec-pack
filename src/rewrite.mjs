function rewriteFrontmatterName(content, installedName) {
  if (!content.startsWith('---\n')) {
    return content;
  }

  const closingIndex = content.indexOf('\n---\n', 4);
  if (closingIndex === -1) {
    return content;
  }

  const frontmatter = content.slice(0, closingIndex + 5);
  const body = content.slice(closingIndex + 5);
  const rewrittenFrontmatter = frontmatter.replace(
    /^name:\s*["']?([^"'\n]+)["']?\s*$/m,
    `name: "${installedName}"`
  );

  return `${rewrittenFrontmatter}${body}`;
}

function applyReplacements(content, replacements) {
  let rewritten = content;
  for (const [from, to] of replacements) {
    rewritten = rewritten.split(from).join(to);
  }
  return rewritten;
}

export function rewriteSkillContent(content, { installedName, sharedDirName }) {
  const replacements = [
    ['../../references/', `../../${sharedDirName}/references/`],
    ['../../templates/', `../../${sharedDirName}/templates/`]
  ];

  return applyReplacements(rewriteFrontmatterName(content, installedName), replacements);
}

export function rewriteAgentContent(content, { sharedDirName }) {
  const replacements = [
    ['../references/', `../${sharedDirName}/references/`],
    ['../templates/', `../${sharedDirName}/templates/`]
  ];

  return applyReplacements(content, replacements);
}
