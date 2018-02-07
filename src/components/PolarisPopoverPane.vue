<script>
import PolarisPopoverSection from './PolarisPopoverSection.vue';
import PolarisScrollable from './PolarisScrollable.vue';

import ComponentHelpers from '../ComponentHelpers.js';

export default {
    components: {
        PolarisPopoverSection,
        PolarisScrollable
    },
    render(createElement) {
        var children = this.$slots.default;
        if (this.sectioned) {
            children = createElement(PolarisPopoverSection, {}, children);
        }
        if (this.fixed) {
            return createElement('div', {
                'class': this.classes
            }, children);
        }
        return createElement(PolarisScrollable, {
            'class': this.classes,
            props: {
                hint: true,
                shadow: true,
            }
        }, children);
    },
    props: {
        fixed: Boolean,
        sectioned: Boolean
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Popover__Pane', [
                'fixed',
            ], this);
        }
    }
};
</script>
