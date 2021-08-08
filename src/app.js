import express from "express";
import morgan from "morgan";

//routes import
import projectsRoutes from "./routes/projects.routes";
import tasksRoutes from "./routes/tasks.routes";
import tasksByProjectRoutes from "./routes/tasksByProject.routes";

const app = express();


app.use(morgan('dev'));
app.use(express.json());


//routes start
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);
app.use('/api', tasksByProjectRoutes);

export default app;


