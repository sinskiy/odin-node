const { readFile } = require("node:fs/promises");
const { createServer } = require("node:http");

createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const fileName = getFileNameByUrl(req.url);
  getFilePromise(fileName).then((html) => res.end(html));
}).listen(3000);

function getFileNameByUrl(url) {
  switch (url) {
    case "/": {
      return "index.html";
    }
    case "/about": {
      return "about.html";
    }
    case "/contact-me": {
      return "contact-me.html";
    }
    default: {
      return "404.html";
    }
  }
}

async function getFilePromise(fileName) {
  return await readFile(fileName, "utf8");
}
