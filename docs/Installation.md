## Use as a vue plugin

```javascript
import Cedar from 'rei-cedar';
import Vue from 'vue';

Vue.use(Cedar);

```

## Use standalone in the browser

```html
<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="cedar-fonts.min.css">
    <link rel="stylesheet" href="cedar-core.css">
    <link rel="stylesheet" href="cedar-components.css">
  </head>
  <body>
    <div id="app">
      <cdr-button>Hello</cdr-button>
    </div>    
    
    <script src="https://unpkg.com/vue"></script>
    <script src="cedar.js"></script>
    <script>
      new Vue({
        el: '#app'
      });
    </script>
  </body>

</html>
```
