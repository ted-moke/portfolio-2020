import gsap from 'gsap';
import config from '../config.js';

export default class Slat {
    constructor(content = '', color = "#ffffff", objConfig = {}) {
        this.config = objConfig;

        this.content = content;
        this.color = color;
        this.active = false;

        this.init();
    }

    init() {
        this.el = document.createElement('div');
        this.contentEl = document.createElement('p');
        this.el.append(this.contentEl);
        this.setContent(this.content);
        
        if (this.config.fillSlats) {
            this.el.style.backgroundColor = this.color;
        } else {
            this.el.style.backgroundColor = '#EDEDED';
            this.el.style.border = '5px solid ' + this.color;
            this.contentEl.style.color = 'black';
        }

        this.el.classList.add('slat');
        if (this.config.id) {
            this.el.classList.add(this.config.id);
        }

        if (this.config.label) {
            let labelEl = document.createElement('div');
            labelEl.classList.add('slat-label');
            let labelContent = document.createElement('label');
            labelContent.innerHTML = this.config.id;
            labelEl.append(labelContent)

            this.el.append(labelEl);
        }
    }

    setContent(newContent, callback) {
        if (typeof newContent === 'string') {
            this.contentEl.innerHTML = newContent;
        } else {
            for (let i of newContent) {
                console.log(i)
                this.contentEl.innerHTML += i.name + ' ';
            }
        }

        if (callback) {
            callback();
        }
    }
    
    open(callback) {
        gsap.to(this.el, {y: 0, duration: config.TRANSITION_DURATION, onComplete: ()=>{if (callback){console.log(this.el); callback()}}})
    }
    
    close(callback) {
        gsap.to(this.el, {y: '100%', duration: config.TRANSITION_DURATION, onComplete: ()=>{if (callback){callback()}}})
    }
}