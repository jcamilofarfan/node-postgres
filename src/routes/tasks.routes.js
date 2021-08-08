import { Router } from "express";
const router = Router();

import { createTask, getTasks, getOneTask, deleteTask, updateTask} from "../controllers/task.controller";

/*
* /api/Task/
*/
router.post('/', createTask);
router.get('/', getTasks);

/*
* /api/Task/:id
*/
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;