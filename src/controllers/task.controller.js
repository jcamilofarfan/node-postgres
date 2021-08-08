import Tasks from '../models/Tasks';

export async function getTasks(req, res){
    const tasks = await Tasks.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
    res.json({
        message: 'All Task',
        data: tasks
    })
}

export async function getOneTask(req, res){
    const { id } = req.params;
    try {
        const task = await Tasks.findOne({
            where: {
                id
            }
        });
        res.json({
            message: 'Task By ID',
            data: task
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export async function createTask(req, res) {
    const { name, done, projectid } = req.body;
    console.log(req.body);
    const newTask = await Tasks.create({
        name,
        done,
        projectid
    }, {
        fields: [ 'name', 'done', 'projectid' ]
    });
    res.json({
        message: 'New Task Created'
    })
}

export async function deleteTask (req, res){
    const { id } = req.params;
    try {
        const deleteTasksCount = await Tasks.destroy({
            where:{
                id
            }
        });
        res.json({
            message: 'Tasks deleted succesfully',
            data: deleteTasksCount
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }

}

export async function updateTask(req, res){
    const { id } = req.params;
    const { name, done, projectid } = req.body;
    try {
        const tasks = await Tasks.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: {
                id
            }
        });
        if(tasks.length > 0) {
            tasks.forEach(async task => {
                await task.update({
                    name,
                    done,
                    projectid
                })
            });
            res.json({
                message: 'Task updated successfully',
                data: tasks
            });
        }else{
            res.json({
                message: 'Task NOT FOUND',
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