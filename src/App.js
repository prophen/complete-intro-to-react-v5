const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  // React.createElement takes three parameters: which element, what you are passing in, the children of the element
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    [
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
