const express = require("express");
const next = require("next");
const { sequelize } = require("./src/data/db/models");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const port = process.env.NEXT_PUBLIC_PORT || 3000;
  const server = express();

  server.use(express.json());

  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const handleCheckDB = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  handleCheckDB();

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(
      `> Ready on http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}`
    );
  });
});
