<template>
<div>
    <div>
        <ul class="Polaris-Tabs" role="tablist">
            <li v-for="name in tabNames" class="Polaris-Tabs__TabContainer" role="presentation">
                <button
                    @click="activeTab = name"
                    :class="{'Polaris-Tabs__Tab':1, 'Polaris-Tabs__Tab--selected': activeTab == name}"
                    role="tab"
                    tabindex="-1">
                    <span class="Polaris-Tabs__Title">{{ name }}</span>
                </button>
            </li>
        </ul>
    </div>
    <div v-for="name in tabNames" style="padding: 1.6rem;" v-if="name == activeTab">
        <slot :name="name"></slot>
    </div>
</div>
</template>



<script>
export default {
    model: {
        prop: 'value',
        event: 'change'
    },
    props: [
        'value'
    ],
    data() {
        return {
            activeTab: null
        }
    },
    mounted() {
        this.loadActiveTab();
    },
    computed: {
        tabNames() {
            return Object.keys(this.$slots);
        }
    },
    watch: {
        tabNames() {
            this.loadActiveTab();
        },
        activeTab() {
            this.$emit('change', this.activeTab);
        },
        value() {
            this.activeTab = this.value;
        }
    },
    methods: {
        loadActiveTab() {
            if (!this.activeTab && this.tabNames.length > 0) {
                this.activeTab = this.tabNames[0];
            }
        }
    }
}
</script>
