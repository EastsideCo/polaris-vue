const FILL_REGEX = /fill="[^"]*"/g;

export default {
    create(str, classes) {
        str = str.replace(FILL_REGEX, (fill) => {
            return fill.includes('#FFF') ? 'fill="currentColor"' : '';
        });
        
        if (classes) {
            str = str.replace(/^<svg /, '<svg class="'+classes+'" ');
        }
        
        return str;
    }
}