import config from './config';
import Jumbotron from './Components/Jumbotron';
import Shutter from './Components/Shutter';
import Work from './Sections/Work';
import Nav from './Components/Nav';
import Modal from './Components/Modal';
import utils from './Utils';

class App {
    constructor() {
        console.log('Application Build: ', new Date().toLocaleString());
    }

    init() {
        this.Jumbotron = new Jumbotron();
        this.Jumbotron.init();

        this.Work = new Work();
        this.Nav = new Nav();

        let modalEls = document.querySelectorAll('[data-modal-target]');

        this.Modals = {};
        for (let el of modalEls) {
            console.log(el)
            let modalName = el.dataset.modalTarget;
            this.Modals[modalName] = new Modal(el);
        }

        window.addEventListener('resize', utils.throttle(()=>{
            console.log('on resize')
            this.Work.Projects.forEach((p,i)=>{p.setSlatHeight();});
            this.Jumbotron.Shutter.setSlatHeight();
            this.Nav.getSizes();
        }, 100));
    }
}

window.ROOT = new App();

document.addEventListener('DOMContentLoaded', function() {
    window.ROOT.init();
})
