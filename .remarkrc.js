exports.settings = {
  bullet: "*",
  emphasis: "_",
  strong: "*",
  fence: "`",
  rule: "-",
  ruleSpaces: false,
  ruleRepetition: 3,
  gfm: true,
  yaml: true,
  footnotes: true,
  listItemIndent: "1",
  commonmark: false,
  pedantic: false,
  entities: false,
  fences: true,
  spacedTable: true
};

exports.plugins = [
  [require("remark-message-control"), { name: "lint" }],
  require("remark-preset-lint-recommended"),
  require("remark-preset-lint-consistent"),
  require("remark-preset-lint-markdown-style-guide"),
  require("remark-lint-code"),
  require("remark-lint-no-empty-sections"),
  require("remark-squeeze-paragraphs"),
  require("remark-inline-links"),
  [require("remark-lint-blockquote-indentation"), { number: 2 }],
  [require("remark-lint-no-literal-urls"), false],
  [require("remark-lint-no-file-name-irregular-characters"), false],
  [require("remark-lint-no-file-name-articles"), false],
  [require("remark-lint-no-undefined-references"), false],
  [require("remark-lint-link-title-style"), false],
  [require("remark-lint-maximum-line-length"), true],
  [require("remark-lint-list-item-indent"), "space"],
  [require("remark-lint-no-shortcut-reference-link"), false],
  [require("remark-lint-no-shortcut-reference-image"), false],
  [require("remark-frontmatter"), "yaml"],
  [require("remark-lint-list-item-spacing"), false],
  [require("remark-lint-maximum-heading-length"), false],
  [require("remark-lint-ordered-list-marker-value"), false],
  [require("remark-validate-links"), false],
  [require("remark-lint-unordered-list-marker-style"), "*"],
  [require("remark-lint-first-heading-level"), false]
];
