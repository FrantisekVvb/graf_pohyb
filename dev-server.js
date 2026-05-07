const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT) || 5500;
const root = process.cwd();

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

http
  .createServer((req, res) => {
    const urlPath = req.url.split("?")[0];
    const rel = urlPath === "/" ? "index.html" : decodeURIComponent(urlPath.slice(1));
    const filePath = path.normalize(path.join(root, rel));
    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end();
      return;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.setHeader("Content-Type", mime[ext] || "application/octet-stream");
      res.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Serving HTTP on http://127.0.0.1:${port}/`);
  });
