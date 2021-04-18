const express = require("express")
const projects = require("./projects-model")
const { validateProjectId, validateProject } = require("../middleware/middleware")

const router = express.Router()

router.get("/api/projects", (req, res, next) => {
    projects.get()
        .then(projects => res.status(200).json(projects))
        .catch(next)
})

router.get("/api/projects/:id", validateProjectId(), (req, res, next) => {
    res.status(200).json(req.project)
})

router.post("/api/projects", validateProject(), (req, res, next) => {
    projects.insert(req.body)
        .then(projects => res.status(201).json(projects))
        .catch(next)
})

router.put("/api/projects/:id", validateProjectId(), validateProject(), (req, res, next) => {
    projects.update(req.project.id, req.body)
        .then(projects => res.status(200).json(projects))
        .catch(next)
})

router.delete("/api/projects/:id", validateProjectId(), (req, res, next) => {
    projects.remove(req.project.id)
        .then(projects => res.status(200).json({
            message: `${req.project.name} has been deleted`
        }))
        .catch(next)
})

router.get("/api/projects/:id/actions", validateProjectId(), (req, res, next) => {
    projects.get(req.project.id)
        .then(projects => res.status(200).json(projects))
        .catch(next)
})

module.exports = router