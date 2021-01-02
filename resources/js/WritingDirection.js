const { core: commands } = Statamic.$bard.tiptap;
const { markInputRule } = commands;
export default class WritingDirection {
  name() {
    return "writingDirection";
  }

  schema() {
    return {
      attrs: {
        direction: {
          default: "ltr",
        },
      },
      parseDOM: [
        {
          style: "direction",
          getAttrs: (value) => ({ direction: value }),
        },
      ],
      toDOM: (mark) => [
        "span",
        { style: `direction: ${mark.attrs.direction}; display: block` },
        0,
      ],
    };
  }

  commands({ type, updateMark }) {
    return (attrs) => updateMark(type, attrs);
  }

  pasteRules({ type }) {
    return [];
  }

  inputRules({ type }) {
    return [markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type)];
  }

  plugins() {
    return [];
  }
}