# rehype-target-plugin

Zero-config rehype plugin to add `target="_blank"` to your external links. Only one dependency.

## Install

```sh
npm install rehype-target-plugin
```

## How to use

```js
import { rehype } from "rehype";
import rehypeTargetBlank from 'rehype-target-plugin'

rehype()
  .use(rehypeTargetBlank)
  .process('<a href="https://external.com">external link</a>')
```

Output

```txt
<a href="https://external.com" target="_blank">external link</a>
```

See the `example.js`

```sh
node example.js
```

## License

[MIT](./LICENSE)