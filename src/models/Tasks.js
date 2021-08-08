import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Tasks = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    projectid: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

export default Tasks