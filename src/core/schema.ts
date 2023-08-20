export interface Schema {
  controllerAttribute: string
  actionAttribute: string
  targetAttribute: string
  targetAttributeForScope(identifier: string): string
  outletAttributeForScope(identifier: string, outlet: string): string
  keyMappings: { [key: string]: string }
  getModKey(): string
}

export const defaultSchema: Schema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: (identifier) => `data-${identifier}-target`,
  outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
  keyMappings: {
    enter: "Enter",
    tab: "Tab",
    esc: "Escape",
    space: " ",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    home: "Home",
    end: "End",
    page_up: "PageUp",
    page_down: "PageDown",
    // [a-z]
    ...objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c])),
    // [0-9]
    ...objectFromEntries("0123456789".split("").map((n) => [n, n])),
  },
  getModKey: ((_: { key?: string }) => () => {
    if (!_.key) _.key = /Mac|iPod|iPhone|iPad/.test(window?.navigator?.platform || "") ? "Meta" : "Control"
    return _.key // memoize the modifier key on first call to avoid platform sniffing on every call
  })({ key: "" }),
}

function objectFromEntries(array: [string, any][]): object {
  // polyfill
  return array.reduce((memo, [k, v]) => ({ ...memo, [k]: v }), {})
}
