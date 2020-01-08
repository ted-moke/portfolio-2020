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
            buildingHeightMin: .2,
            buildingHeightMax: .9,
            windowHeightMin: 10,
            windowHeightMax: 40,
            windowWidthMin: .05,
            windowWidthMax: .2,
            windowGutterMin: .025,
            windowGutterMax: .125
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
    }

    preSpawn(type) {
        if (type === 'city') {
            this.Buildings = [];
            let totalWidth = 0;
            let lastX = 0;
            while (totalWidth < this.c.width) {
                let currBuildingWidth = this.c.width * Utils.random(this.config.buildingWidthMin, this.config.buildingWidthMax, 3);
                let currBuildingHeight = this.c.height * Utils.random(this.config.buildingHeightMin, this.config.buildingHeightMax, 3);

                let windowWidth = (currBuildingWidth * Utils.random(this.config.windowWidthMin, this.config.windowWidthMax, 3)) + 1;
                let windowHeight = Utils.random(this.config.windowHeightMin, this.config.windowHeightMax);
                let windowGutter = currBuildingWidth * Utils.random(this.config.windowGutterMin, this.config.windowGutterMax, 3);
                let numWindows = Math.floor((currBuildingWidth - windowGutter) / (windowWidth + windowGutter));
                windowGutter = (currBuildingWidth - (numWindows * windowWidth)) / (numWindows + 1);
                
                this.Buildings.push({
                    xOrigin: lastX,
                    width: currBuildingWidth,
                    height: currBuildingHeight,
                    hasSpire: Utils.random(0, .7),
                    stagger: Utils.random(this.config.buildStaggerMin, this.config.buildStaggerMax),
                    buildTime: Utils.random(this.config.buildTimeMin, this.config.buildTimeMax),
                    windowWidth: windowWidth,
                    windowHeight: windowHeight,
                    windowGutter: windowGutter,
                    numWindows: numWindows,
                    windowsDrawn: 0,
                    w: 1,
                    h: 1,
                })


                totalWidth += currBuildingWidth;
                lastX += currBuildingWidth;
            }
        }
        
        this.render(type);

        // window.setTimeout(()=>{
        //     window.cancelAnimationFrame(this.reqAnim);
        // }, 3000)
    }

    render(type) {
        this.frame++;

        this.ctxDrawing = false;

        if (type === 'city') {
                this.reqAnim = requestAnimationFrame(() => this.render(type));
                this.ctx.clearRect(0, 0, this.c.width, this.c.height);
    
                this.Buildings.forEach((b, i) => {
                    if (!b.windowW) b.windowW = 0;
                    if (!b.windowH) b.windowH = 0;

                    this.ctx.strokeStyle = 'rgb(190, 190, 190)';
                    this.ctx.fillStyle = 'rgb(230, 230, 230)';
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

                            let windowRowHeight = b.windowGutter;
                            let windowStartHeight = this.c.height - b.height + windowRowHeight;
                            // if (b.windowsDrawn <= b.numWindows) {
                              while (windowRowHeight < this.c.height) {
                                windowRowHeight = windowStartHeight;
                                
                                for (let n = 0; n < b.numWindows; n++) {
                                  b.windowW = b.windowWidth;
                                  b.windowH = b.windowHeight;
                                  
                                  this.ctx.fillStyle = 'rgb(215, 215, 215)';
                                  this.ctx.fillRect(b.xOrigin + b.windowGutter + (n * (b.windowWidth + b.windowGutter)), windowStartHeight, b.windowW, b.windowH);
                                }
                                windowStartHeight += b.windowHeight + b.windowGutter;
                              }
                            // }
                            // if (!this.ctxDrawing) this.ctxDrawing = true;
                        }
                    }
                })

                if (!this.ctxDrawing) {
                    window.cancelAnimationFrame(this.reqAnim);
                }
        }
    }

}