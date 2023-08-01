# fluentui-react-tree-typing-test

See [microsoft/fluentui#27789](https://github.com/microsoft/fluentui/issues/27789).

## Getting started

```powershell
# Ensure you have installed yarn package manager (e.g., with `npm i -g yarn`)
# then
PS > yarn
PS > yarn build
```
## What you will see

```log
src/index.tsx(20,29): error TS2322: Type '{ className: string; }' is not assignable to type '(NonNullable<WithSlotShorthandValue<{ as?: "div" | undefined; } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ...; } & { ...; }> | null> & string) | undefined'.
  Type '{ className: string; }' is not assignable to type 'undefined'.
```
