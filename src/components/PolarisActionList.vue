<template>
<dynamic-tag :tag="items.length > 0 ? 'div' : 'ul'" class="Polaris-ActionList">
    <template v-if="items.length > 0">
        <div>
            <ul class="Polaris-ActionList__Actions">
                <li v-for="action in items">
                    <button class="Polaris-ActionList__Item" @click="handleAction(action)">
                        <div class="Polaris-ActionList__Content">
                            <div v-if="action.icon" class="Polaris-ActionList__Image">
                                <polaris-icon :source="action.icon"></polaris-icon>
                            </div>
                            <div class="Polaris-ActionList__Text">
                                {{ action.content }}
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <li v-for="section in sections">
            <p class="Polaris-ActionList__Title">
                {{ section.title }}
            </p>
            <ul class="Polaris-ActionList__Actions">
                <li v-for="action in section.items">
                    <button class="Polaris-ActionList__Item" 
                            @click="handleAction(action)"
                            :aria-label="action.accessibilityLabel"
                            :disabled="action.disabled">
                        <div class="Polaris-ActionList__Content">
                            <div v-if="action.icon" class="Polaris-ActionList__Image">
                                <polaris-icon :source="action.icon"></polaris-icon>
                            </div>
                            <div class="Polaris-ActionList__Text">
                                {{ action.content }}
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </li>
    </template>
</dynamic-tag>
</template>


<script>
import DynamicTag from './DynamicTag.vue';
import PolarisIcon from './PolarisIcon.vue';

export default {
    components: {
        DynamicTag,
        PolarisIcon,
    },
    props: {
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        sections: {
            type: Array,
            default() {
                return [];
            }
        },
    },
    methods: {
        handleAction(action) {
            var res = true;
            if (action.onAction) {
                res = action.onAction();
            }
            if (res && action.url) {
                window.location.href = action.url;
            }
        }
    }
};
</script>