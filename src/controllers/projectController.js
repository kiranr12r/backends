import { projects, languages } from '../data/projectData.js';

export const getAllProjects = (req, res) => {
    try {
        let filteredProjects = [...projects];
        const { search, language } = req.query;

        if (search) {
            const searchLower = search.toLowerCase();
            filteredProjects = filteredProjects.filter(project =>
                project.title.toLowerCase().includes(searchLower) ||
                project.description.toLowerCase().includes(searchLower) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
        }

        if (language) {
            filteredProjects = filteredProjects.filter(project =>
                project.language.toLowerCase() === language.toLowerCase()
            );
        }

        res.json(filteredProjects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
};

export const getProjectById = (req, res) => {
    try {
        const project = projects.find(p => p.id === parseInt(req.params.id));
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project' });
    }
};

export const getLanguages = (req, res) => {
    try {
        res.json(languages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching languages' });
    }
};