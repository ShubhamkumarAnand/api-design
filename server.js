import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "hello" }));
    res.end();
  }

  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "Not Allowed" }));
});

server.listen(3000, () => {
  console.log(`Application running on the http://localhost:${3000}`);
});
