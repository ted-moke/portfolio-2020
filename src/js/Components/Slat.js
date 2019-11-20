import gsap from 'gsap';
import config from '../config.js';

export default class Slat {
    constructor(content = '', color = "#ffffff", cardOffset) {
        this.content = content;
        this.color = color;
        this.cardOffset = cardOffset;
        this.active = false;

        this.init();
    }

    init() {
        this.el = document.createElement('div');
        this.contentEl = document.createElement('p');
        this.el.append(this.contentEl);
        this.setContent(this.content);
        this.el.style.backgroundColor = this.color;
        this.el.classList.add('slat');
        this.el.id = 'text-' + this.content;
    }

    setContent(newContent, callback) {
        this.contentEl.innerHTML = newContent;

        if (callback) {
            callback();
        }
    }
    
    open(callback) {
        gsap.to(this.el, {y: 0, duration: config.TRANSITION_DURATION, onComplete: ()=>{if (callback){callback()}}})
    }
    
    close(callback) {
        gsap.to(this.el, {y: '100%', duration: config.TRANSITION_DURATION, onComplete: ()=>{if (callback){callback()}}})
    }
}