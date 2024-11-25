import express from 'express';
import { getAllProjects, getProjectById, getLanguages } from '../controllers/projectController.js';

const router = express.Router();

router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);
router.get('/languages', getLanguages);

export default router;