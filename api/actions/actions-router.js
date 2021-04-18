const express = require("express")
const actions = require("./actions-model")
const { validateActionId } = require("../middleware/middleware")

const router = express.Router()

router.get("/api/projects/:id/actions", (req, res, next) => {
    console.log(req.params)
//     actions.get(req.params.id)
//         .then(action => res.status(200).json(action))
//         .catch(next)
})

module.exports = router