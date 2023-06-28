import { visit } from "unist-util-visit";

export default function rehypeTargetBlank() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (
        node.tagName === "a" &&
        node.properties &&
        typeof node.properties.href === "string"
      ) {
        const url = node.properties.href;
        const isExternal = /^http/.test(url);

        if (isExternal) {
          node.properties.target = "_blank";
        }
      }
    });
  };
}
