const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./imagen.jpg", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    naem: "fazt",
    lastname: "ray",
    age: 40,
    points: [1, 2, 3],
    address: {
      city: "new york",
      street: "sone street 123",
    },
  });
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204);
  });

app.listen(3000);
console.log(`Server on port ${3000}`);
