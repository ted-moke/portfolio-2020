import config from './config';
import Jumbotron from './Components/Jumbotron';
import Shutter from './Components/Shutter';

class App {
    constructor() {
        console.log('Application Build: ', new Date().toLocaleString());
    }

    init() {
        this.Jumbotron = new Jumbotron();
        this.Jumbotron.init();
    }
}

window.ROOT = new App();
window.ROOT.init();
