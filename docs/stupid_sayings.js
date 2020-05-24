let quoteHolder = document.getElementById('quote');
let authorHolder = document.getElementById('author');
let divider = document.getElementById('divider');
let quote1 = {
  quote: "When butterflies fall in love do they feel humans in their stomachs?",
  author: "Jacob"
};
let quote2 = {
  quote: "My imaginary friend thinks you have some serious problems.",
  author: "Jacob"
};
let quote3 = {
  quote: "I’m not a complete idiot. Some pieces are missing.",
  author: "Jacob"
};
let quotes = [quote1, quote2, quote3];
while (1==1) {
  if (performance.navigation.type == 1) {
    reset();
  }
}
function time() {
  setInterval(reset, 15000);
}
function reset() {
  rand = Math.floor(Math.random() * (quotes.length + 1));
  quoteHolder.innerHTML = quotes[rand].quote;
  authorHolder.innerHTML = quotes[rand].author;
  var r = Math.floor(Math.random() * (256));
  var g = Math.floor(Math.random() * (256));
  var b = Math.floor(Math.random() * (256));
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  if(r+g+b < 383) {
    document.body.style.color = "#fff";
  }
  else {
    divider.style.color = "#000"
  }
}
