const projects = require("../projects/projects-model")

const logger = () => {
    return(req, res, next) => {
        const time = new Date().toISOString()
        console.log(`${req.ip} made a ${req.method} request to ${req.url} at ${time}`)
        next()
    }
}

const validateProjectId = () => {
    return(req, res, next) => {
        projects.get(req.params.id)
            .then((project) => {
                if(project){
                    req.project = project
                    next()
                } else {
                    res.status(404).json({
                        message: "Project not found"
                    })
                }
            })
            .catch(next)
    }
}

const validateActionId = () => {
    return(req, res, next) => {
        projects.get(req.params.id)
            .then((action) => {
                if(action){
                    req.action = action
                    next()
                } else {
                    res.status(404).json({
                        message: "Action not found"
                    })
                }
            })
            .catch(next)
    }
}

module.exports = {
    logger,
    validateProjectId,
    validateActionId,
}