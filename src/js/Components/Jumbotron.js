import config from '../config';
import Shutter from './Shutter';

export default class Jumbotron {
    constructor() {
        this.JOB_DESC = ['javascript', 'front-end', 'interactive'];
        this.JUMBO_RIGHT_TEXT = ['', this.JOB_DESC[0], 'developer', ''];
        
        this.el = document.querySelector('.jumbotron');
    }

    init() {
        this.Shutter = new Shutter(this.JUMBO_RIGHT_TEXT, config.colors);
        this.el.append(this.Shutter.el);

        // this.jumboHeight = this.el.getBoundingClientRect().height;
        // console.log(this.jumboHeight)
        // this.Shutter.el.style.height = this.jumboHeight - window.getComputedStyle(this.el).getPropertyValue('padding-top') + 'px';
        // console.log(this.Shutter.el.style.height);
        // debugger

        this.Shutter.setSlatHeight();
        this.Shutter.open();
    }
}