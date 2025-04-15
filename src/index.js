import "./styles.css";

const button = document.getElementById("home");
const button2 = document.getElementById("about");
const button3 = document.getElementById("menu");

button.addEventListener("click", () => {
  clearDisplay();
  const content = document.getElementById("content");
  const newDiv = document.createElement("div");
  console.log(content, newDiv);
  newDiv.id = "text";
  newDiv.innerHTML = `
  <h1>Home</h1>
  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <br>
  <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
`;
  content.appendChild(newDiv);
});

button2.addEventListener("click", () => {
  clearDisplay();
  const content = document.getElementById("content");
  const newDiv = document.createElement("div");
  newDiv.id = "text";
  console.log(content, newDiv);
  newDiv.innerHTML = `
    <h1>About</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <br>
    <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
`;
  content.appendChild(newDiv);
});

button3.addEventListener("click", () => {
  clearDisplay();
  const content = document.getElementById("content");
  const newDiv = document.createElement("div");
  console.log(content, newDiv);
  newDiv.id = "text";
  newDiv.innerHTML = `
  <h1>Menu</h1>
  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <br>
  <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
`;
  content.appendChild(newDiv);
});

function clearDisplay() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}
