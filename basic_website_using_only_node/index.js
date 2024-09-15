import http from "http";
import url from "url"; 

const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/" && req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Welcome to the Homepage!</h1><p>This website is created using only NodeJS.</p>");
    } else if (parsedUrl.pathname === "/about" && req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>About Us</h1><p>We are learning backend.</p>");
    } else {
        res.writeHead(404, {"Content-Type": "text/hrml"});
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);    
});
