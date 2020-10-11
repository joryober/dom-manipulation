// your javascript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.style.cssText = "color: red";
p.textContent = "Hey I'm red!";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.cssText = "color: blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.style.cssText = "border: 3px solid black; background-color: pink";

const newh1 = document.createElement("h1");
newh1.textContent = "I'm in a div!";

const newp = document.createElement("p");
newp.textContent = "ME TOO!";

newDiv.appendChild(newh1);
newDiv.appendChild(newp);

container.appendChild(newDiv);
