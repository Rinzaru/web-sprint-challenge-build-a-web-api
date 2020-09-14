const express = require("express");
const server = express();
const port = 8000;

const projectRouter = require("./Routers/projects/projectRouter");
const actionRouter = require("./Routers/actions/actionRouter");

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);
server.use(projectRouter);
server.use(actionRouter);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
