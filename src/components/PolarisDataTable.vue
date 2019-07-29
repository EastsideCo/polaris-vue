<template lang="html">
  <div class="component-wrapper">
      <table class="Polaris-DataTable__Table">
          <tr>
              Headers
          </tr>
          <tr>
              Totals
          </tr>
          <tr v-for="row in rows">
              <td class="Polaris-DataTable__Cell" v-for="cell in row">{{ cell }}</td>
          </tr>
      </table>
  </div>
</template>

<script>
  export default {
      props: {
          columnContentTypes: Array,
          defaultSortDirection: String,
          footerContent: String,
          headings: String,
          initialSortColumnIndex: Number,
          rows: Array,
          sortable: Boolean,
          totals: [String, Boolean],
          truncate: Boolean,
          verticalAlign: String,
          onSort: Object,
      },
      computed: {
          classes() {
              return {

              };
          }
      }
  }
</script>
