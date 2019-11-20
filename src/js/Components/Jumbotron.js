import config from '../config';
import Shutter from './Shutter';

export default class Jumbotron {
    constructor() {
        this.JOB_DESC = ['javascript', 'front-end', 'interactive'];
        this.JUMBO_RIGHT_TEXT = ['', this.JOB_DESC[0], 'developer', ''];
        this.el = document.querySelector('.jumbotron');
        this.currentDesc = 0;
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
        this.jobDescSlat = this.Shutter.Slats[1];

        this.rotateDescriptions(config.DESCRIPTION_CYCLE_INTERVAL_SHORT);

        window.setTimeout(()=>{
            console.log('firing inf loop');

            this.rotateDescriptions(config.DESCRIPTION_CYCLE_INTERVAL_LONG, true)
        }, config.DESCRIPTION_CYCLE_INTERVAL_SHORT * this.JOB_DESC.length)
    }

    rotateDescriptions(interval, infinite = false) {
        this.rotateInterval = window.setInterval(()=>{
            if (this.currentDesc >= this.JOB_DESC.length - 1) {
                this.currentDesc = 0;

                if (!infinite) {
                    console.log('finished first loop')
                    window.clearInterval(this.rotateInterval);
                }
            } else {
                this.currentDesc++;
            }

            console.log('switching', this.currentDesc)

            this.jobDescSlat.close(()=> {
                this.jobDescSlat.setContent(this.JOB_DESC[this.currentDesc], ()=>{
                    this.jobDescSlat.open();
                })
            })
        }, interval)
    }
}