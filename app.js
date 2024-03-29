const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    {  id: "child" },
    [React.createElement("h1", {}, "I am h1 tag"), 
    React.createElement("h2", {}, "I am h2 tag"),
    ])
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
