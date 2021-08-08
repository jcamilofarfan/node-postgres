import Project from '../models/Projects';

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll({
            order: [
                ['id', 'ASC']
            ]});
        res.json({
            message: 'All Projects',
            data: projects
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export async function getOneProject(req, res){
    const { id } = req.params;
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        });
        res.json({
            message: 'Project By ID',
            data: project
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {
        const newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            res.json({
                message: 'Project created successfully',
                data: newProject
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export async function deleteProject (req, res){
    const { id } = req.params;
    try {
        const deleteProjectCount = await Project.destroy({
            where:{
                id
            }
        });
        res.json({
            message: 'Project deleted succesfully',
            data: deleteProjectCount
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }

}

export async function updateProject(req, res){
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;
    try {
        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id
            }
        });
        if(projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                })
            });
            res.json({
                message: 'Project updated successfully',
                data: projects
            });
        }else{
            res.json({
                message: 'Project NOT FOUND',
                data: {}
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}