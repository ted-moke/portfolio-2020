import gsap from 'gsap';
import config from '../config.js';
import Utils from '../Utils';

export default class Spawner {
    constructor(parent) {
        this.parent = parent;
        
        this.config = {
            buildTimeMin: 45,
            buildTimeMax: 75,
            buildStaggerMin: 5,
            buildStaggerMax: 15,
            buildingWidthMin: .035,
            buildingWidthMax: .30,
            buildingHeightMin: .1,
            buildingHeightMax: .9,
            windowHeightMin: 10,
            windowHeightMax: 40,
            windowGutterMin: 3,
            windowGutterMax: 10
        }
    }
    
    init(vWidth, vHeight) {
        this.c = document.querySelector('canvas');
        this.ctx = this.c.getContext('2d');
        this.c.width = vWidth;
        this.c.height = vHeight;
        this.reset();

        this.preSpawn('city');

    }

    reset() {
        this.frame = 0;
        this.ctxDrawing = false;
        this.ctx.fillStyle = 'rgb(230, 230, 230)';
        this.ctx.strokeStyle = 'rgb(190, 190, 190)';
    }

    preSpawn(type) {
        if (type === 'city') {
            this.Buildings = [];
            let totalWidth = 0;
            let lastX = 0;
            while (totalWidth < this.c.width) {
                let currBuildingWidth = this.c.width * Utils.random(this.config.buildingWidthMin, this.config.buildingWidthMax, 3);
                this.Buildings.push({
                    xOrigin: lastX,
                    width: currBuildingWidth,
                    height: this.c.height * Utils.random(this.config.buildingHeightMin, this.config.buildingHeightMax, 3),
                    hasSpire: Utils.random(0, .7),
                    w: 1,
                    h: 1,
                    stagger: Utils.random(this.config.buildStaggerMin, this.config.buildStaggerMax),
                    buildTime: Utils.random(this.config.buildTimeMin, this.config.buildTimeMax)
                })


                totalWidth += currBuildingWidth;
                lastX += currBuildingWidth;
                console.log(totalWidth, this.c.width, lastX);
            }
        }
        
        this.render(type);

        // window.setTimeout(()=>{
        //     window.cancelAnimationFrame(this.reqAnim);
        // }, 3000)
    }

    render(type) {
        this.frame++;
        console.log(this.frame);

        if (type === 'city') {

                this.reqAnim = requestAnimationFrame(() => this.render(type));
                this.ctx.clearRect(0, 0, this.c.width, this.c.height);
    
                this.Buildings.forEach((b, i) => {
                    let staggerPos = this.frame - (i * b.stagger);
                    if (staggerPos > 0) {
                        if (b.w < b.width) {
                            if (!this.ctxDrawing) this.ctxDrawing = true;

                            b.w = b.width / b.buildTime * staggerPos;
                            b.h = b.height / b.buildTime * staggerPos;
        
                            this.ctx.fillRect(b.xOrigin, this.c.height - b.h, b.w, b.h);
                            this.ctx.strokeRect(b.xOrigin, this.c.height - b.h, b.w, b.h);
                        } else {
                            this.ctx.fillRect(b.xOrigin, this.c.height - b.h, b.w, b.h);
                            this.ctx.strokeRect(b.xOrigin, this.c.height - b.h, b.w, b.h);
                        }
                    }
                })

                if (!this.ctxDrawing) {
                    window.cancelAnimationFrame(this.reqAnim);
                }
        }
    }

}