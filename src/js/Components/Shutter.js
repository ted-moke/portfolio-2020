import Slat from './Slat';

export default class Shutter {
    constructor(content, colors, orientation = 'up', fill = false) {
        this.orientation = orientation;
        this.fill = fill;
        this.Slats = [];
        this.content = content;
        this.colors = colors || ["#ffffff"];

        this.init();
    }

    init() {
        this.el = document.createElement('div');
        this.el.classList.add('shutter');

        for (let i = 0; i < this.content.length; i++) {
            let currentColorIdx = i % this.colors.length;
            let currentSlat = new Slat(this.content[i], this.colors[currentColorIdx]);
            this.Slats.push(currentSlat);
            this.el.append(currentSlat.el);
        }
    }

    open() {
        this.Slats.forEach(Slat => {
            Slat.open();
        })
    }

    close() {
        this.Slats.forEach(Slat => {
            Slat.close();
        })
    }

    setSlatHeight() {
        this.shutterHeight = this.el.getBoundingClientRect().height;
        this.slatHeight = this.shutterHeight / this.Slats.length;


        this.Slats.forEach((Slat, i)=> {
            Slat.el.style.height = this.shutterHeight - (this.slatHeight * i) + 'px';
            Slat.contentEl.style.marginTop = (this.slatHeight - Slat.contentEl.getBoundingClientRect().height + 2) / 2 + 'px';
        })
    }
}