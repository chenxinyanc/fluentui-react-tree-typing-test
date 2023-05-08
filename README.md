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

## Other build errors
Actually, you can also see other build errors stemming from the package itself.

```log
node_modules/@fluentui/react-avatar/dist/index.d.ts:100:67 - error TS2344: Type 'Partial<AvatarGroupPopoverSlots>' does not satisfy the constraint 'SlotPropsRecord'.
  Property 'tooltip' is incompatible with index signature.
    Type 'NonNullable<WithSlotShorthandValue<TooltipProps> | null>' is not assignable to type 'UnknownSlotProps | SlotShorthandValue | null | undefined'.
      Type 'Omit<TooltipSlots, "root"> & TriggerProps<TooltipTriggerProps> & Pick<PortalProps, "mountNode"> & { ...; }' is not assignable to type 'UnknownSlotProps | SlotShorthandValue | null | undefined'.
        Type 'Omit<TooltipSlots, "root"> & TriggerProps<TooltipTriggerProps> & Pick<PortalProps, "mountNode"> & { ...; }' is not assignable to type 'UnknownSlotProps'.
          Type 'Omit<TooltipSlots, "root"> & TriggerProps<TooltipTriggerProps> & Pick<PortalProps, "mountNode"> & { ...; }' is not assignable to type 'Pick<HTMLAttributes<HTMLElement>, "style" | "className" | "children">'.
            Types of property 'children' are incompatible.
              Type 'ReactElement<any, string | JSXElementConstructor<any>> | ((props: TooltipTriggerProps) => ReactElement<any, string | JSXElementConstructor<...>> | null) | null | undefined' is not assignable to type 'ReactNode'.
                Type '(props: TooltipTriggerProps) => ReactElement<any, string | JSXElementConstructor<any>> | null' is not assignable to type 'ReactNode'.

100 export declare type AvatarGroupPopoverProps = Omit<ComponentProps<Partial<AvatarGroupPopoverSlots>>, 'children'> & {
                                                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@fluentui/react-avatar/dist/index.d.ts:134:31 - error TS2344: Type 'TooltipProps' does not satisfy the constraint 'keyof IntrinsicElements | UnknownSlotProps | ComponentType<{}> | VoidFunctionComponent<{}>'.
  Type 'TooltipProps' is not assignable to type 'UnknownSlotProps'.
    Type 'TooltipProps' is not assignable to type 'Pick<HTMLAttributes<HTMLElement>, "style" | "className" | "children">'.
      Types of property 'children' are incompatible.
        Type 'ReactElement<any, string | JSXElementConstructor<any>> | ((props: TooltipTriggerProps) => ReactElement<any, string | JSXElementConstructor<...>> | null) | null | undefined' is not assignable to type 'ReactNode'.

134     tooltip: NonNullable<Slot<TooltipProps>>;
                                  ~~~~~~~~~~~~

node_modules/@fluentui/react-avatar/dist/index.d.ts:140:62 - error TS2344: Type 'AvatarGroupPopoverSlots' does not satisfy the constraint 'SlotPropsRecord'.
  Property 'tooltip' is incompatible with index signature.
    Type 'NonNullable<WithSlotShorthandValue<TooltipProps> | null>' is not assignable to type 'UnknownSlotProps | SlotShorthandValue | null | undefined'.

140 export declare type AvatarGroupPopoverState = ComponentState<AvatarGroupPopoverSlots> & Required<Pick<AvatarGroupPopoverProps, 'count' | 'indicator'>> & {
                                                                 ~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@fluentui/react-avatar/dist/index.d.ts:181:55 - error TS2344: Type 'AvatarSlots' does not satisfy the constraint 'SlotPropsRecord'.
  Property 'image' is incompatible with index signature.
    Type '({ as?: "img" | undefined; } & Omit<Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & { ...; }, "children"> & { ...; }) | null' is not assignable to type 'UnknownSlotProps | SlotShorthandValue | null | undefined'.
      Type '{ as?: "img" | undefined; } & Omit<Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & { ...; }, "children"> & { ...; }' is not assignable to type 'UnknownSlotProps | SlotShorthandValue | null | undefined'.
        Type '{ as?: "img" | undefined; } & Omit<Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & { ...; }, "children"> & { ...; }' is not assignable to type 'UnknownSlotProps'.
          Type '{ as?: "img" | undefined; } & Omit<Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & { ...; }, "children"> & { ...; }' is not assignable to type 'Pick<HTMLAttributes<HTMLElement>, "style" | "className" | "children">'.
            Types of property 'children' are incompatible.
              Type 'SlotRenderFunction<Omit<Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & { ...; }, "children">> | undefined' is not assignable to type 'ReactNode'.
                Type 'SlotRenderFunction<Omit<Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & { ...; }, "children">>' is not assignable to type 'ReactNode'.       

181 export declare type AvatarProps = Omit<ComponentProps<AvatarSlots>, 'color'> & {
                                                          ~~~~~~~~~~~

node_modules/@fluentui/react-avatar/dist/index.d.ts:286:50 - error TS2344: Type 'AvatarSlots' does not satisfy the constraint 'SlotPropsRecord'.

286 export declare type AvatarState = ComponentState<AvatarSlots> & Required<Pick<AvatarProps, 'active' | 'activeAppearance' | 'shape' | 'size'>> & {
                                                     ~~~~~~~~~~~
```
