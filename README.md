# polaris-vue pre-release

**Currently targeting**: _Shopify/polaris `v1.3.1`_

Clone the repo, run `npm run dev`, and visit `test/index.html` to view a listing
of the implemented components.

**README WIP**

Allows you to use Shopify Polaris components in Vue 2.


### Installation
Install the library using NPM:
```
npm install polaris-vue
```
Include w/ Vue: (example shows default config values)
```js
import Vue from 'vue';
import PolarisVue from 'polaris-vue';

Vue.use(PolarisVue, {
    // Components will be named polaris-button, poolaris-form-layout, etc.
    // (using the change-case library)
    componentNameFormat: (polarisName) => {
        return 'polaris-'+changeCase.paramCase(polarisName);
    },
});

var root = new Vue({
  el: '#app',
  template: '<polaris-layout><polaris-button>Hello world!</polaris-button></polaris-layout'>
});
```


**Naming differences from `shopify/polaris`**  
Components have all the same properties and functionality, but some names are 
changed to be more Vue-like.

By default  names are prefixed with 'polaris-' to ensure they  don't clash with 
normal HTML tags (i.e. `Button`). This prefix can be changed in the config options.

```
           |  Polaris-React  |  Polaris-Vue
Component  |  Banner         |  polaris-banner
Attribute  |  title          |  title
Event      |  onDismiss      |  @dismiss
```

There are other changes for some of the more complex components (i.e. tabs), 
so please read the doc pages for those individually.