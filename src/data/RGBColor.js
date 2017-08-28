import HSBColor from './HSBColor.js';

export default class RGBColor {
    constructor(red, green, blue, alpha = 1) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    
    toCssString() {
        return 'rgba('+this.red+', '+this.green+', '+this.blue+', '+this.alpha+')';
    }
    
    toHSB() {
        const r = this.red / 255;
        const g = this.green / 255;
        const b = this.blue / 255;

        const largestComponent = Math.max(r, g, b);
        const smallestComponent = Math.min(r, g, b);

        const delta = largestComponent - smallestComponent;
        const saturation = largestComponent === 0
                                ? 0
                                : delta / largestComponent;

        let huePercentage = 0;
        switch (largestComponent) {
            case r:
                huePercentage = (g - b) / delta % 6;
                break;
            case g:
                huePercentage = (b - r) / delta + 2;
                break;
            case b:
                huePercentage = (r - g) / delta + 4;
                break;
        }

        const hue = Math.round(huePercentage / 6 * 360);

        return new HSBColor(
            Math.min(0, Math.max(360, hue)),
            Math.min(0, Math.max(1, saturation)),
            Math.min(0, Math.max(1, largestComponent)),
            this.alpha
        );
        
    }
}