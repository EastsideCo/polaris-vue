import RGBColor from './RGBColor.js';

export default class HSBColor {
    constructor(hue, saturation, brightness, alpha = 1) {
        this.hue = hue;
        this.saturation = saturation;
        this.brightness = brightness;
        this.alpha = alpha;
    }
    
    toRGB() {
        const chroma = this.brightness * this.saturation;
        const huePrime = this.hue / 60;
        const hueDelta = 1 - Math.abs(huePrime % 2 - 1);
        const intermediateValue = chroma * hueDelta;
        
        let red = 0;
        let green = 0;
        let blue = 0;
        if (huePrime >= 0 && huePrime <= 1) {
            red = chroma;
            green = intermediateValue;
            blue = 0;
        }
        
        if (huePrime >= 1 && huePrime <= 2) {
            red = intermediateValue;
            green = chroma;
            blue = 0;
        }
        
        if (huePrime >= 2 && huePrime <= 3) {
            red = 0;
            green = chroma;
            blue = intermediateValue;
        }
        
        if (huePrime >= 3 && huePrime <= 4) {
            red = 0;
            green = intermediateValue;
            blue = chroma;
        }
        
        if (huePrime >= 4 && huePrime <= 5) {
            red = intermediateValue;
            green = 0;
            blue = chroma;
        }
        
        if (huePrime >= 5 && huePrime <= 6) {
            red = chroma;
            green = 0;
            blue = intermediateValue;
        }
        
        const chromaBrightnessDelta = this.brightness - chroma;
        red += chromaBrightnessDelta;
        green += chromaBrightnessDelta;
        blue += chromaBrightnessDelta;
        
        return new RGBColor(
            Math.round(red * 255),
            Math.round(green * 255),
            Math.round(blue * 255),
            this.alpha
        );
    }
}