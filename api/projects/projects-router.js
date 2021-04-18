const express = require("express")
const projects = require("./projects-model")
const { validateProjectId } = require("../middleware/middleware")

const router = express.Router()

router.get("/api/projects", (req, res, next) => {
    projects.get()
        .then(projects => res.status(200).json(projects))
        .catch(next)
})

router.get("/api/projects/:id", (req, res, next) => {
    projects.get(req.params.id)
        .then(projects => res.status(200).json(projects))
        .catch(next)
})

router.post("/api/projects", (req, res, next) => {
    projects.insert(req.body)
        .then(projects => res.status(200).json(projects))
        .catch(next)
})

router.put("/api/projects/:id", (req, res, next) => {
    projects.update(req.params.id, req.body)
        .then(projects => res.status(200).json(projects))
        .catch(next)
})

router.delete("/api/projects/:id", (req, res, next) => {
    projects.remove(req.params.id)
        .then(projects => res.status(200).json(projects))
        .catch(next)
})

module.exports = router