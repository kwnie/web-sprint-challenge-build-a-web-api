const projects = require("../projects/projects-model")
const actions = require("../actions/actions-model")

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
        actions.get(req.params.id)
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

const validateProject = () => {
    return(req, res, next) => {
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({
                message: "Missing project details",
            })
        }
  
        next()
    }
  }

  const validateAction = () => {
    return(req, res, next) => {
        if (!req.body.project_id || !req.body.description || !req.body.notes) {
            return res.status(400).json({
                message: "Missing action details",
            })
        }
  
        next()
    }
  }

module.exports = {
    logger,
    validateProjectId,
    validateActionId,
    validateProject,
    validateAction
}