// []create a link for users to be collected
// [] Create a function that will pull data from the JSON api
// [] Create a function that will dynamically generate the data
// [] Create a function that will dynamically generate posts upon clicking the users name

const app = document.querySelector(".app"); // target of the DOM
const API = `https://jsonplaceholder.typicode.com/`;
const users = "users"; // for users pull
const posts = "posts"; // for post pulls

// function for getting data with parameters
async function getData(link, parameters) {
  // Getting the main data for users
  const data = await fetch(link + parameters)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });

  return data;
}

// Creating the tables for the users to be created

async function getUsers() {
  const container = document.createElement("div");
  container.classList.add("userContainer");

  const table = document.createElement("div");
  table.classList.add("userTable");

  const tableHeadingContainer = document.createElement("div");
  tableHeadingContainer.classList.add("tableHContainer");

  console.log(table);
  let tableH = document.createElement("span");
  tableH.textContent = "Users";

  tableHeadingContainer.appendChild(tableH);
  console.log(tableHeadingContainer);

  const list = document.createElement("div");
  list.classList.add("list");

  // Getting user information
  const info = await getData(API, users);
  info.map((user) => {
    const span = document.createElement("span");
    span.classList.add("userName");
    span.innerHTML = user.name;
    let id = user.id;
    span.addEventListener("click", function (e) {
      userPost(id);
    });
    list.appendChild(span);
  });

  table.appendChild(tableHeadingContainer);
  table.appendChild(list);
  container.appendChild(table);
  app.appendChild(container);
}

getUsers();

// Now to get the user Posts with the id provided
async function userPost(number) {
  let parameter = posts + "/" + number;
  let info = await getData(API, parameter);
  console.log(info);
  // Now to setup the container
  //Post Main Container
  const MainContainer = document.createElement("div");
  MainContainer.classList.add("mainContainer");

  info.map((post) => {
    // Post Container
    const postContainer = document.createElement("div");
    postContainer.classList.add("postContainer");

    // Posts Title
    const postTitle = document.createElement("span");
    postTitle.className = "postTitle";

    // Post Body
    const postBody = document.createElement("p");
    postBody.className = "postBody";
  });
}
