import Project from "../models/Projects";
import Tasks from "../models/Tasks";

export async function getTasksByProject(req, res) {
    const { projectid } = req.params;
    const project = await Project.findOne({
        where: {
            id: projectid
        }
    });
    const tasks = await Tasks.findAll({
        attributes: ['id', 'name', 'done', 'projectid'],
        where: {
            projectid
        },
        order: [
            ['id', 'ASC']
        ]
    });
    res.json({
        message: 'Task By project',
        data: {
            project,
            tasks
        }
    });
}

export async function updateTaskByProject(req, res){
    const { projectid } = req.params;
    const { done } = req. body;
    const tasks = await Tasks.findAll({
        attributes: ['id', 'name', 'done', 'projectid'],
        where: {
            projectid
        }
    });
    if(tasks.length > 0) {
        tasks.forEach(async task => {
            await task.update({
                done
            })
        });
        res.json({
            message: 'Task updated successfully',
            data: tasks
        });
    }else{
        res.json({
            message: 'Project HAVE NOT Task',
            data: {}
        });
    }
}