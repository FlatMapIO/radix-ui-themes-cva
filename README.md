
# Radix UI Themes CVA


See [radix-ui](https://www.radix-ui.com/themes/docs/overview/getting-started) for documentation.

> Note: The complex component needs to have the same anatomy and property set as radix-ui for it to work.


## Usage


`index.html`

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Chat</title>
    <link href="//cdn.jsdelivr.net/npm/@radix-ui/themes@latest/styles.css" rel="stylesheet">
    <script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

`main.tsx`

```tsx


import { iconButton } from 'radix-ui-themes-cva'


const App = () => {
  return <button class={iconButton({ size: '1', variant:'solid' })} > 🐰🥕 </button>
}


```