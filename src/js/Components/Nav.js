import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import config from '../config.js';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, gsap);


export default class Nav {
    constructor() {
        this.active = false;
        this.el = document.querySelector('nav');

        this.init();
    }

    init() {
        this.getDomEls();
        this.getSizes();
        
        this.scrollControl = new ScrollMagic.Controller();
        this.scrollScene = new ScrollMagic.Scene({duration: this.sizes.windowHeight / 2, offset: 50}).addTo(this.scrollControl);

        this.tl = gsap.timeline({defaults: {ease: "power2.inOut", duration: 0.35}});
        this.tl.to(".social-link .icon", {x: 200}, 0);

        let socRightOffset = this.sizes.docWidth * 0.95 - this.sizes.socialRight;
        this.tl.to(".social-right", {left: socRightOffset}, 0);
        this.tl.to("nav .button.contact", {backgroundColor: "#F48907"}, 0);

        this.tl.to(".nav-left", {maxWidth: "300px", paddingLeft: this.sizes.docWidth * 0.05}, 0);
        this.tl.to("nav", {backgroundColor: "#0E1428"}, 0);

        this.tl.to(".scroll-prompt", {height: 0}, 0);

        this.scrollScene.setTween(this.tl);

    }

    getDomEls() {
        this.socialRight = this.el.querySelector('.social-right');
    }

    getSizes() {
        this.sizes = {};
        this.sizes.docWidth = document.body.clientWidth;
        this.sizes.windowHeight = window.innerHeight;
        this.sizes.socialRight = this.socialRight.getBoundingClientRect().width;
    }

}