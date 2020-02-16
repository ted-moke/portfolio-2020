import config from './config';
import Jumbotron from './Components/Jumbotron';
import Shutter from './Components/Shutter';
import Work from './Sections/Work';
import Nav from './Components/Nav';

class App {
    constructor() {
        console.log('Application Build: ', new Date().toLocaleString());
    }

    init() {
        this.Jumbotron = new Jumbotron();
        this.Jumbotron.init();

        this.Work = new Work();
        this.Nav = new Nav();
    }
}

window.ROOT = new App();
window.ROOT.init();
