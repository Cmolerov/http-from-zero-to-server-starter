const http = require("http");

http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/OK":
        console.log("Inbound 'OK request being processed...");
        res.writeHead(200);
        res.end();
        break;

      case "/Bad-Request":
        res.writeHead(400);
        res.end();
        break;
      case "/Created":
        res.writeHead(201);
        res.end();
        break;
      case "/Forbidden":
        res.writeHead(403);
        res.end();
        break;
      case "/Found":
        res.writeHead(302);
        res.end();
        break;
      case "/Gateway-Timeout":
        res.writeHead(504);
        res.end();
        break;
      case "/Internal-Server-Error":
        res.writeHead(500);
        res.end();
        break;
      case "/Moved-Permanently":
        res.writeHead(301);
        res.end();
        break;
      case "/Unauthorized":
        res.writeHead(401);
        res.end();
        break;

      //bonus
      case "/Bonus/Webpage":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html>");
        res.write("<h1>Hello World!</h1>");
        res.write("</html>");
        res.end();
        break;
      //bonus 2
      case "/Bonus/Redirect":
        res.writeHead(302, {
          Location: "http://localhost:3000/Forbidden",
        });
        res.end();
        break;

      default:
        console.log("this is an error...");
        res.writeHead(404);
        res.end();
        break;
    }
  })
  .listen(3000, function () {
    console.log("Listen for request on Port 3000");
  });
