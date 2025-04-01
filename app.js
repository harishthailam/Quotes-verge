// Get the blockQuote
const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".newQuote");
const tweet = document.querySelector(".tweet");

const apiKey = "https://quotes-api-self.vercel.app/quote";

let temp = "";
const getData = async () => {
  const data = await fetch(apiKey);
  const response = await data.json();
  temp = response;
  //console.log(response);
  quote.innerText = response.quote;
  author.innerText = response.author;
};

//console.log("Hiieeee");

// Call it automaticaly
getData();

newQuote.addEventListener("click", () => {
  getData();
});


// window.open(url, name, specs): This method opens a new browser window or tab with the specified URL, window name, and specifications.

tweet.addEventListener("click", () => {
  window.open("https://twitter.com/intent/tweet?text=" + temp.quote, "Tweet Window", "width=400, height=400");
});
