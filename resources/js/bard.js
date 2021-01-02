import WritingDirection from "./WritingDirection";
import WritingDirectionButton from "./WritingDirectionButton";

Statamic.$bard.extend(({ mark }) => mark(new WritingDirection()));
Statamic.$bard.buttons((buttons) => {
    const indexOfBold = _.findIndex(buttons, { command: "italic" });
    buttons.splice(indexOfBold + 1, 0, {
        name: "LTR",
        text: "Left To Right",
        command: "writingDirection",
        args: { direction: "ltr" },
        icon: "caret-right",
        component: WritingDirectionButton,
    });
    buttons.splice(indexOfBold + 2, 0, {
        name: "RTL",
        text: "Right To Left",
        command: "writingDirection",
        args: { direction: "rtl" },
        icon: "caret-left",
        component: WritingDirectionButton,
    });
});
