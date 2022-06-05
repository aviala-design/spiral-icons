import { defineComponent, h } from "vue";

export function convertToNode(src: string) {
  return defineComponent({
    name: `Spiral:Icon`,
    setup: (props) => () => h('img', Object.assign({}, props, { src }))
  })
}