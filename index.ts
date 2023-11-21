import {
  For,
  Match,
  Switch,
  createEffect as e,
  createMemo as m,
  createSignal as s,
  on,
  onMount,
  Show,
} from "./solid/solid.js";
import { render } from "./solid/web/web.js";
import h from "./solid/h/h.js";

const [text, set_text] = s(
  "experimental\\typeface\\design\\100m\\thursday\\november\\twenty\\three",
);

const TextBox = () => {
  return h(
    "div",
    {
      style: {
        // position: "fixed",
        // top: "150px", left: "10px",
        width: "90vw",
        height: "50px",
      },
    },
    h("input", {
      style: {
        all: "unset",
        border: ".1px dotted yellow",
        color: "yellow",
      },
      type: "text",
      oninput: (e) => {
        console.log(e.target.value);
        set_text(e.target.value);
      },
    }),
  );
};

const App = () => {
  const split = m(() => text().split(""));

  return h(
    "div",
    {
      style: {
        display: "flex",
        "flex-wrap": "wrap",
      },
    },
    () => For({ each: split(), children: (letter) => Grid(letter) }),
    TextBox,
  );
};

const Grid = (letter: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz10".split("");

  const style = m(() => {
    return {
      width: letter === "\\" ? "100vw" : "100px",
      height: letter === "\\" ? "30px" : "100px",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      position: "relative",
    };
  });

  return h(
    "div",
    { style },
    Show({
      when: alphabet.includes(letter),
      children: () =>
        h("img", {
          src: `./assets/${letter}.gif`,
          style: {
            width: "100%",
            height: "100%",
            filter: "grayscale(1)",
            position: "absolute",
            "z-index": -1,
          },
        }),
    }),

    Show({
      when: letter !== "\\",
      children: () => h("p", letter),
    }),
  );
};

render(App, document.querySelector(".root"));
