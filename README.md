# rehype-target-blank

Zero-config rehype plugin to add `target="_blank"` to your external links. Only one dependency.

## How to use

```js
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
