const FILL_REGEX = /fill="[^"]*"/g;
const SVG_REGEX = /(<svg[^>]*>|<\/svg>)/g;
const VIEWBOX_REGEX = /viewBox="([^"]*)"/;

export default {
    create(str, classes) {
        str = str.replace(FILL_REGEX, (fill) => {
            return fill.includes('#FFF') ? 'fill="currentColor"' : '';
        });
        
        if (classes) {
            str = str.replace(/^<svg /, '<svg class="'+classes+'" ');
        }
        
        return str;
    },

    parseSVG(str) {
        return {
            viewBox: VIEWBOX_REGEX.exec(str)[1],
            body: str.replace(SVG_REGEX, '')
        };
    },
        
}
