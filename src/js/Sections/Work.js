import config from '../config';
import Shutter from '../Components/Shutter';
import projectData from '../../data/project.js';

var projectTemplate = require('../../templates/project.mustache');

export default class Work {
    constructor() {
        this.disabled = false;
        this.el = document.querySelector('#work');

        this.init();
    } 

    init() {
        this.Projects = [];
        let parser = new DOMParser();

        for (let project of projectData.list) {
            let projectContent = {
                client: project.client,
                project: project.project,
                roles: project.roles,
                description: project.description
            }

            let projectWrapper = parser.parseFromString(projectTemplate.render({videoUrl: project.videoUrl}), 'text/html').all[3];
            this.el.append(projectWrapper);
            
            let newProject = new Shutter(projectContent, config.colorsGray, {fillSlats: true, label:true})
            this.Projects.push(newProject);

            let projectWrapperEl = this.el.querySelectorAll('.project-wrapper:last-of-type')[0];
            projectWrapperEl.id = project.id;
            projectWrapperEl.querySelector('.shutter-wrapper').append(newProject.el);
            
            newProject.setSlatHeight();
            newProject.open();
        }

    }


}