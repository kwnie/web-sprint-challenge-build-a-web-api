const express = require('express');
const { logger } = require("./middleware/middleware")
const actionsRouter = require("./actions/actions-router")
const projectsRouter = require("./projects/projects-router")

const server = express();

server.use(logger())
server.use(express.json())
server.use(projectsRouter)
server.use(actionsRouter)

//error middleware
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server;
