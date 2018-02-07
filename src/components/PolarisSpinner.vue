<template>
<svg
    v-html="spinnerSVG.body"
    :view-box="spinnerSVG.viewBox"
    :class="classes"
    :aria-label="accessibilityLabel"
    role="status"/>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';
import SvgSource from '../SvgSource.js';

import spinnerSVGLarge from '../resources/spinner-large.svg';
import spinnerSVGSmall from '../resources/spinner-small.svg';

const SIZES = ['small', 'large'];
const COLORS = ['white', 'teal', 'inkLightest'];

export default {
    props: {
        size: {
            type: String,
            default: 'large',
            validator(v) {
                return SIZES.indexOf(v) > -1;
            }
        },
        color: {
            type: String,
            default: 'teal',
            validator(v) {
                return COLORS.indexOf(v) > -1;
            }
        },
        accessibilityLabel: String,
    },
    computed: {
        spinnerSVG() {
            var svg = this.size == 'large' ? spinnerSVGLarge : spinnerSVGSmall;
            return SvgSource.parseSVG(svg);
        },
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Spinner', [
                'color',
                'size'
            ], this);
        }
    }
}
</script>
