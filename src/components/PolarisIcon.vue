<template>
<span :class="classes" :aria-label="accessibilityLabel">
    <div v-if="source == 'placeholder' || !finalSource" class="Polaris-Icon__Placeholder"></div>
    <svg 
        v-if="source != 'placeholder' && finalSource"
        class="Polaris-Icon__Svg"
        :viewBox="finalSource.viewBox"
        v-html="finalSource.body"/>
</span>
</template>


<script>
import SvgSource from '../SvgSource.js';

import {
    add,
    alert,
    arrowDown,
    arrowLeft,
    arrowRight,
    arrowUp,
    arrowUpDown,
    calendar,
    cancel,
    cancelSmall,
    caretDown,
    caretUp,
    checkmark,
    chevronDown,
    chevronLeft,
    chevronRight,
    chevronUp,
    circleCancel,
    circleChevronDown,
    circleChevronLeft,
    circleChevronRight,
    circleChevronUp,
    circlePlus,
    conversation,
    delete as deleteIcon,
    disable,
    dispute,
    duplicate,
    embed,
    export as exportIcon,
    external,
    help,
    horizontalDots,
    import as importIcon,
    notes,
    print,
    refresh,
    risk,
    save,
    search,
    subtract,
    view,
} from '../resources/icons/';

export const BUNDLED_ICONS = {
    add,
    alert,
    arrowDown,
    arrowLeft,
    arrowRight,
    arrowUp,
    arrowUpDown,
    calendar,
    cancel,
    cancelSmall,
    caretDown,
    caretUp,
    checkmark,
    chevronDown,
    chevronLeft,
    chevronRight,
    chevronUp,
    circleCancel,
    circleChevronDown,
    circleChevronLeft,
    circleChevronRight,
    circleChevronUp,
    circlePlus,
    conversation,
    delete: deleteIcon,
    disable,
    dispute,
    duplicate,
    embed,
    export: exportIcon,
    external,
    help,
    horizontalDots,
    import: importIcon,
    notes,
    print,
    refresh,
    risk,
    save,
    search,
    subtract,
    view,
};

export default {
    props: {
        source: {
            type: String,
            required: true
        },
        color: {
            type: String
        },
        backdrop: {
            type: Boolean
        },
        accessibilityLabel: String
    },
    computed: {
        finalSource() {
            var svgSource = this.source;
            if (typeof this.source == 'string') {
                const bundled = BUNDLED_ICONS[this.source];
                if (bundled) {
                    svgSource = bundled;
                }
            }
            try {
                var svgObject = SvgSource.parseSVG(svgSource);
                return svgObject;
            } catch (e) {
                return null;
            }
        },
        classes() {
            var r = {
                'Polaris-Icon': true,
                'Polaris-Icon--hasBackdrop': this.backdrop
            };
            if (this.color) {
                var valueTag = this.color.charAt(0).toUpperCase()+this.color.slice(1);
                r['Polaris-Icon--color'+valueTag] = true;
            }
            return r;
        }
    }
};
</script>
