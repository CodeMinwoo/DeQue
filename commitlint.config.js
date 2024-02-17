const {
  utils: { getProjects },
} = require("@commitlint/config-nx-scopes");

const Configuration = {
  extends: ["@commitlint/config-conventional", "@commitlint/config-nx-scopes"],
  formatter: "@commitlint/format",
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["Feat", "Fix", "Docs", "Style", "Refactor", "Perf", "Test", "Chore", "Trans", "Bump"]],
    "type-case": [2, "always", "pascal-case"],
    "scope-empty": [0],
    "scope-enum": async (ctx) => [2, "always", [...(await getProjects(ctx))]],
    "subject-empty": [2, "never"],
    "subject-case": [2, "always", ["sentence-case", "start-case", "pascal-case"]],
    "subject-full-stop": [2, "never", "."],
    "subject-max-length": [2, "always", 72],
    "subject-min-length": [2, "always", 5],
  },
  ignores: [(commit) => commit === ""],
  defaultIgnores: true,
  helpUrl: "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
};

module.exports = Configuration;
