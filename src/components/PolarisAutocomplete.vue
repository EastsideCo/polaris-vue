<template>
  <div>
    Placeholder Component: Requires OptionList / OptionDescriptor
    <div v-for="option in options">
      <polaris-option-descriptor>
      </polaris-option-descriptor>
    </div>
  </div>
</template>


<script>
import PolarisOptionDescriptor from './PolarisOptionDescriptor.vue'

export default {
    props: {
      options: {
          type: Array,
          default() { return []; }
      },
      allowMultiple: {
          type: Boolean,
          default() { return false; }
      },
    },
    data() {
        return {
            true: true
        };
    },
    computed: {
      emptyState() {
        return false;
      }
    }
}
</script>
