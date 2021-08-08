import { Router } from "express";
const router = Router();

import { getTasksByProject, updateTaskByProject } from "../controllers/tasksByProject.controller";

/*
* /api/:projectid/
*/
router.get('/:projectid', getTasksByProject);
router.put('/:projectid', updateTaskByProject);

export default router;