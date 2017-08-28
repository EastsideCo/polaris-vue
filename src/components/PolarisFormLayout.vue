<script>
import PolarisFormLayoutGroup from './PolarisFormLayoutGroup.vue';
import PolarisFormLayoutItem from './PolarisFormLayoutItem.vue';

import ComponentHelpers from '../ComponentHelpers.js';

export default {
    render(createElement) {
        return createElement('div', {},
            ComponentHelpers.wrapNodesWithComponent(createElement,
                                                    this.$slots.default, 
                                                    PolarisFormLayoutItem,
                                                    [PolarisFormLayoutGroup]));
    },
    props: {
        
    }
}
</script>