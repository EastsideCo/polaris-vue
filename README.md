Allows you to use [Shopify Polaris](http://polaris.shopify.com/) components in [Vue 2](http://vuejs.org/).

This library currently contains components up-to-date with: _@shopify/polaris `v1.9.1`_

`polaris-vue` has been used in production and been exposed to thousands of merchants, but please note that there may still be some rough edges. If you notice any bugs, please submit a PR or issue. You can also contact apps@eastsideco.com.



## Getting started
```
npm install @eastsideco/polaris-vue
```

When initializing Vue, i.e. in `main.js`:
```
import Vue from 'vue';
import PolarisVue from '@eastsideco/polaris-vue';

// Recommended: import the correct CSS for the version of Polaris the library uses.
import '@eastsideco/polaris-vue/lib/polaris-vue.css';

// Register the plugin with Vue
Vue.use(PolarisVue);

// Use polaris components in your Vue templates
new Vue({
    el: '#app',
    template: '<polaris-layout><polaris-button>Hello world!</polaris-button></polaris-layout>'
});

```

Check the demo page for usage examples.


## Viewing the demo page
The demo page contains code examples of almost all the functionality in the library, so it can be pretty helpful.

To view the demo, open up `node_modules/@eastsideco/polaris-vue/test/index.html` after installing the library.

Online version: http://demo.polaris-vue.eastsideco.io/

Or to create a standalone copy: clone the repo, run `npm run dev`, then open the file at `test/index.html`.



## Differences to @shopify/polaris

There are a few differences from the official react version you should be aware of:

#### 1. Naming for some attributes has been adjusted to be more Vue-like. 
i.e. `Button` is `<polaris-button>`, `helpText` is `:help-text`, and `onDismiss` is `@dismiss`.

```
                     |  Polaris        |  Polaris-Vue     |
                     +-----------------+------------------+
Component            |  Banner         |  polaris-banner  |
Prop (HTML attr)     |  helpText       |  help-text       |
Prop (JS)            |  helpText       |  helpText        |
Event                |  onDismiss      |  @dismiss        |

```

#### 2. Attributes in the original library which accept ReactNodes have been implemented as both props and slots in this library, so you can include slot templates in them if needed.
```
<polaris-layout-section :description="Hello world!">
    <p>Body</p>
</polaris-layout-section>
```
```
<polaris-layout-section>
    <template slot="description">
        Hello <strong>world</strong>!
    </template>
    <p>Body</p>
</polaris-layout-section>
```

#### 3. Where render functions are passed to components (at the moment only ResourceList), this library instead uses scoped slots.
Check out the `<polaris-resource-list>` examples on the demo page for examples.

#### 4. No support for the Polaris EASDK integrations.
This library doesn't currently support complete integration with the EASDK. 

You can still use this library in EASDK apps, but the page header will not be automatically hidden and synced with the EASDK header. 

Support for the official behavior is planned.



## Configuration

The plugin supports passing configuration via `Vue.use`. Here's the defaults:

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

## License

This library is provided 'as-is' under the terms of MIT license.
