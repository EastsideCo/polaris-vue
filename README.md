# polaris-vue pre-release

Allows you to use Shopify Polaris components in Vue 2.

**Current target**: _Shopify/polaris `v1.3.1`_

Clone the repo, run `npm run dev`, and visit `test/index.html` to view a listing
of the implemented components.


This project is still an ongoing WIP and **should not** be used in production.


### Installation
Install the library using NPM:
```
npm install @eastsideco/polaris-vue
```
Include w/ Vue:
```js
import Vue from 'vue';
import PolarisVue from '@eastsideco/polaris-vue';

Vue.use(PolarisVue);

var root = new Vue({
  el: '#app',
  template: '<polaris-layout><polaris-button>Hello world!</polaris-button></polaris-layout>'
});
```


Example with default config values:
```js
Vue.use(PolarisVue, {
    // Allows you to change the default component names
    componentNameFormat: (polarisName, changeCase) => {
        // polarisName is the name of the component as it appears in Shopfiy/polaris
        // changeCase is an instance of the `change-case` library.
        
        // By default the library takes 'FormLayout' and turns it into
        // the tag name polaris-form-layout, etc.
        return 'polaris-' + changeCase.paramCase(polarisName);
    },
});
```


**Naming differences from Shopify/polaris**  
Component properties and functionality are the same, but the format of various names
are changed to be more Vue-like.

By default  names are prefixed with 'polaris-' to ensure they  don't clash with 
normal HTML tags (i.e. `Button`  vs `<button>`). This prefix can be changed in the config options above.

```
                     |  Polaris        |  Polaris-Vue     |
                     +-----------------+------------------+
Component            |  Banner         |  polaris-banner  |
Prop (HTML attr)     |  helpText       |  help-text       |
Prop (JS)            |  helpText       |  helpText        |
Event                |  onDismiss      |  @dismiss        |

```

There are other a few other tweaks for some of the more complex components (i.e. resource list).
Please refer to the test page.