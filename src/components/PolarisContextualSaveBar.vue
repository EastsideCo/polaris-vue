<template lang="html">
  <div class="component-wrapper">
    <p>Placeholder for ContextualSaveBar. Can only be completed once Frame is ready to be created.</p>
  </div>
</template>

<script>
  export default {
    props: {
        alignContentFlush: Boolean,
        discardAction: Object,
        message: String,
        saveAction: Object
    },
    mounted() {
      console.log('Mounted')
    }
  }
</script>
