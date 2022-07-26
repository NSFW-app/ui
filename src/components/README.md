# What is a component?

**TL;DR:** It is an implementation of 1 or more primitives that may accept props to alter how it is rendered, **but does not** contain any application specific logic. It is typically an React
Functional Component, althought may be a group of customised & exported primitives / styled Stitches components.

## Example

`Avatar` is an example of a `common` component. It is composed of the `Box` and `Image` primitives.

It accepts an `active` prop to determine whether or not to show a border around the image. It also accepts a `size` prop to determine whether or not to show the small or regular sized version of the `Avatar`.
