<script>
import PolarisFormLayoutItem from './PolarisFormLayoutItem.vue';

import ComponentHelpers from '../ComponentHelpers.js';

export default {
    render(createElement) {
        return createElement('div', {
                'class': 'Polaris-FormLayout__Items'
            },
            ComponentHelpers.wrapNodesWithComponent(createElement,
                                                    this.$slots.default, 
                                                    PolarisFormLayoutItem));
    },
    props: {
        
    }
}
</script>