const projects = require("../projects/projects-model")

const logger = () => {
    return(req, res, next) => {
        const time = new Date().toISOString()
        console.log(`${req.ip} mad a ${req.method} request to ${req.url} at ${time}`)
        next()
    }
}

const validateProjectId = () => {
    return(req, res, next) => {
        projects.get(req.params.id)
            .then((project) => {
                if(project){
                    console.log(project)
                } else {
                    res.status(404).json({
                        message: "Project not found"
                    })
                }
            }
    }
}