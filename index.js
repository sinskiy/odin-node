const { readFile } = require("node:fs/promises");
const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const fileName = getFileNameByUrl(req.url);
  getHtmlPromise(fileName).then((html) => res.end(html));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

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

async function getHtmlPromise(fileName) {
  return await readFile(fileName, "utf8");
}
