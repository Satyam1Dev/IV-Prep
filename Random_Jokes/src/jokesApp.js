function setJokes(data) {
  console.log(data);
  const jokes = document.getElementById("joke-container");
  const joke_text = document.createElement("div");
  joke_text.setAttribute("class", "joke-text");
  const text = document.createElement("p");
  text.innerHTML = data.value;
  joke_text.append(text);
  jokes.append(joke_text);
}

let getRandomJoke = async () => {
  try {
    let res = fetch("https://api.chucknorris.io/jokes/random").then((res) =>
      res.json()
    );
    let data = await res;
    setJokes(data);
    return data.value;
    console.log(data.value);
  } catch (err) {
    // setJokes({ value: "something went wrong" });
    return "something went wrong";
  }
};
let getJokeByCategory = async (event) => {
  let joke = event.target.value;
  console.log(joke);
  try {
    let res = fetch(
      `https://api.chucknorris.io/jokes/random?category=${joke}`
    ).then((res) => res.json());
    let data = await res;
    setJokes(data);
    return data;
  } catch (err) {
    // setJokes({ value: "something went wrong" });
    return "something went wrong";
  }
};

let button = document.getElementById("get-jokes-data");
button.addEventListener("click", getRandomJoke);
let select = document.getElementById("get-category");
select.addEventListener("click", getJokeByCategory);

// // donor change the export statement

// if (typeof exports !== "undefined") {
//   module.exports = {
//     getRandomJoke,
//     setJokes,
//     getJokeByCategory,
//   };
// }
