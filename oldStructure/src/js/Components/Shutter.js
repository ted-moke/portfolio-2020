import Slat from './Slat';

export default class Shutter {
    constructor(content, colors, objConfig = {}) {
        if (objConfig.orientation == null) objConfig.orientation = 'up';
        if (objConfig.bottomExpands == null) objConfig.bottomExpands = true;
        if (objConfig.fillSlats == null) objConfig.fillSlats = true;
        if (objConfig.label == null) objConfig.label = false;

        this.config = objConfig;

        this.Slats = [];
        this.content = content;
        this.colors = colors || ["#ffffff"];

        this.init();
    }

    init() {
        this.el = document.createElement('div');
        this.el.classList.add('shutter');

        for (let i = 0; i < Object.keys(this.content).length; i++) {
            let currentColorIdx = i % this.colors.length;
            let currentSlat = new Slat(Object.values(this.content)[i], this.colors[currentColorIdx], {fillSlats: this.config.fillSlats, id: Object.keys(this.content)[i], label: this.config.label});
            this.Slats.push(currentSlat);
            this.el.append(currentSlat.el);
        }
    }

    open(callback = null) {
        this.Slats.forEach(Slat => {
            Slat.open(callback);
        })
    }

    close() {
        this.Slats.forEach(Slat => {
            Slat.close();
        })
    }

    setSlatHeight() {
        this.shutterHeight = this.el.getBoundingClientRect().height;

        if (!this.config.bottomExpands) {
            this.slatHeight = this.shutterHeight / this.Slats.length;
        } else {
            this.slatHeight = 120;
        }

        this.Slats.forEach((Slat, i) => {
            Slat.el.style.height = this.shutterHeight - (this.slatHeight * i) + 'px';
            if (i < this.Slats.length - 1) {
                this.SlatMargin = (this.slatHeight - Slat.contentEl.getBoundingClientRect().height + 2) / 2 + 'px';
                Slat.contentEl.style.marginTop = this.SlatMargin;
            } else {
                Slat.contentEl.style.marginTop = this.SlatMargin;
            }
        })
    }
}