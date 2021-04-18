const express = require("express")
const actions = require("./actions-model")
const { validateActionId, validateAction } = require("../middleware/middleware")

const router = express.Router()

router.get("/api/actions", (req, res, next) => {
    actions.get()
        .then(action => res.status(200).json(action))
        .catch(next)
})

router.get("/api/actions/:id", validateActionId(), (req, res, next) => {
    actions.get(req.action.id)
        .then(action => res.status(200).json(action))
        .catch(next)
})

router.post("/api/actions", validateAction(), (req, res, next) => {
    actions.insert(req.body)
        .then(action => res.status(201).json(action))
        .catch(next)
})

router.put("/api/actions/:id", validateActionId(), validateAction(), (req, res, next) => {
    actions.update(req.action.id, req.body)
        .then(action => res.status(200).json(action))
        .catch(next)
})

router.delete("/api/actions/:id", validateActionId(), (req, res, next) => {
    actions.remove(req.action.id)
        .then(action => res.status(200).json({
            message: `Action ${req.action.id} has been deleted`
        }))
        .catch(next)
})

module.exports = router