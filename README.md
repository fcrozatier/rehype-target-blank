# rehype-target-plugin

Zero-config rehype plugin to add `target="_blank"` to your external links. Only one dependency.

## Install

```sh
npm install rehype-target-plugin
```

## How to use

### Vanilla Rehype

```js
import { rehype } from "rehype";
import rehypeTargetBlank from 'rehype-target-plugin'

rehype()
  .use(rehypeTargetBlank)
  .process('<a href="https://external.com">external link</a>')
```

Output

```html
<a href="https://external.com" target="_blank">external link</a>
```

See the `example.js`

```sh
node example.js
```

### With MDSvex

svelte.config.js
```js
import { mdsvex } from 'mdsvex';
import rehypeTargetBlank from 'rehype-target-plugin';

/**
 * @type {import('mdsvex').MdsvexOptions}
 */
const mdsvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [rehypeTargetBlank]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};

export default config;

```

## License

[MIT](./LICENSE)