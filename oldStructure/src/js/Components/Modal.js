import gsap from 'gsap';
import config from '../config.js';

export default class Modal {
    constructor(trigger) {
        this.active = false;
        this.elTrigger = trigger;
        let modalName = this.elTrigger.dataset.modalTarget;
        this.el = document.querySelector('[data-modal=' + modalName + ']');
        this.content = this.el.querySelector('.modal-content');

        this.init();
    }

    init() {
        this.elHeight = this.el.offsetHeight;

        let compStyles = window.getComputedStyle(this.el);
        this.elPadding = [];
        this.elPadding[0] = compStyles.getPropertyValue('padding-top');
        this.elPadding[1] = compStyles.getPropertyValue('padding-right');
        this.elPadding[2] = compStyles.getPropertyValue('padding-bottom');
        this.elPadding[3] = compStyles.getPropertyValue('padding-left');

        this.elTrigger.addEventListener('click', ()=>{
            this.toggle();
        })

        console.log(this.elHeight)
        gsap.set(this.content, {maxHeight: 0});
        gsap.set(this.el, {paddingTop: 0, paddingBottom: 0});

        this.tl = gsap.timeline({defaults:{ease: "power2.inOut", duration: config.TRANSITION_DURATION}});
        this.tl.to(this.el, {paddingTop: this.elPadding[0], paddingBottom: this.elPadding[2], opacity: 1, duration: config.TRANSITION_DURATION})
        this.tl.to(this.content, {maxHeight: this.elHeight, duration: config.TRANSITION_DURATION}, 0);
        this.tl.pause();
    }

    toggle() {
        if (this.active) {
            this.close();
        } else {
            this.open();
        }

        this.active = !this.active;
    }
    
    open() {
        this.tl.play();
    }
    
    close() {
        this.tl.reverse();
    }
}