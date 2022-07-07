# What is a "common" component?

**TL;DR:** It is an implementation of 1 or more primitives that may accept props to alter how it is rendered, **but does not** contain any application specific logic

## Example

`Avatar` is an example of a `common` component. It is composed of the `Box` and `Image` primitives.

It accepts an `active` prop to determine whether or not to show a border around the image. It also accepts a `size` prop to determine whether or not to show the small or regular sized version of the `Avatar`.

Common components are generally implemented by a `container` (see the README in the `container` directory).

## Is what I'm making a common component?

If you are making a reusable piece of UI that is;

- Not visually specific to one part of the application,
- Does not contain any application state, local UI state allowed, and input/output from props and events only,
- And does not contain any logic specific to one part of the application,
- And might be rendered differently depending on props supplied,

Then yes.

If the criteria above is not met, it's likely that you are making something unique to one part of the app, so you should create your component within the appropriate `container` directory as only that `container` will implement it.
