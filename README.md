# fluentui-react-tree-typing-test

## Get started

```powershell
# Ensure you have installed yarn package manager (e.g., with `npm i -g yarn`)
# then
PS > yarn
PS > yarn build
```
## What you will see

```log
src/index.tsx:19:23 - error TS2769: No overload matches this call.
  Overload 1 of 2, '(props: Omit<Partial<TreeItemSlots>, "root"> & Omit<{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; } & { ...; }, "ref"> & { ...; } & RefAttributes<...>): ReactElement<...> | null', gave the following error.
    Type '{ className: string; }' is not assignable to type '(NonNullable<WithSlotShorthandValue<{ as?: "div" | undefined; } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ...; } & { ...; }> | null> & string) | undefined'.
      Type '{ className: string; }' is not assignable to type 'undefined'.
  Overload 2 of 2, '(props: TreeItemProps<string>): Element', gave the following error.
    Type '{ className: string; }' is not assignable to type '(NonNullable<WithSlotShorthandValue<{ as?: "div" | undefined; } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ...; } & { ...; }> | null> & string) | undefined'.
      Type '{ className: string; }' is not assignable to type 'undefined'.

19             <TreeItem content={{ className: "test-class" }}>
                         ~~~~~~~

  node_modules/@fluentui/react-tree/dist/index.d.ts:386:5
    386     content: NonNullable<Slot<'div'>>;
            ~~~~~~~
    The expected type comes from property 'content' which is declared here on type 'IntrinsicAttributes & Omit<Partial<TreeItemSlots>, "root"> & Omit<{ as?: "div" | undefined; } & Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; } & { ...; } & { ...; }, "ref"> & { ...; } & RefAttributes<...>'
  node_modules/@fluentui/react-tree/dist/index.d.ts:386:5
    386     content: NonNullable<Slot<'div'>>;
            ~~~~~~~
    The expected type comes from property 'content' which is declared here on type 'IntrinsicAttributes & Omit<Partial<TreeItemSlots>, "root"> & Omit<{ as?: "div" | undefined; } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ...; } & { ...; } & { ...; }, "ref"> & { ...; }'
```
