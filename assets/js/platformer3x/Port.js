import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class Port extends GameObject {
    constructor(canvas, image, data) {
        super(canvas, image, data);
    }

    // Required, but no update action
    update() {
    }

    // Draw position is always 0,0
    draw() {
        this.ctx.drawImage(this.image, 0, 0);
    }

    // Set Port position
    size() {
        // Formula for Height should be on constant ratio, using a proportion of 832
        const scaledHeight = GameEnv.innerHeight * (100 / 832);
        // Formula for Width is scaled: scaledWidth/scaledHeight == this.width/this.height
        const scaledWidth = scaledHeight * this.aspect_ratio;
        const portX = .20 * GameEnv.innerWidth;
        const protY = (GameEnv.bottom - scaledHeight);

        // set variables used in Display and Collision algorithms
        this.bottom = portY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;
    
        //this.canvas.width = this.width; 
        //this.canvas.height = this.height;
        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${portX}px`;
        this.canvas.style.top = `${portY}px`; 

    }
}

export default port;