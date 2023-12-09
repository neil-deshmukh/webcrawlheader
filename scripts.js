let inputbox = document.querySelector("input");

async function startCrawl() {
  const baseUrl = inputbox.value;
  inputbox.value = "";
}

function getUrlFromHTML(htmlstr) {
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(htmlstr);
  console.log(dom.window.document.body);
}

getUrlFromHTML(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Web Pandaa</title>
  </head>
  <body>
    <h1>Enter your Url</h1>
    <input type="text" />
    <button onclick="startCrawl()">Submit</button>
    <script src="scripts.js"></script>
  </body>
</html>`);
