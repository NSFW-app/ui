# What is a "primitive"?

**TL;DR:** it is a Styled Component corresponding to a HTML element e.g:

- "List" is a HTML "ul"
- "Box" is a HTML "div"
- "Input" is a HTML "input"
- "Form" is a HTML "form"

A primitive is the smallest UI Element within the component tree.

Primitives **should not** contain any application logic whatsoever. They serve only as building blocks for `common` components (see the README in the `common` directory) or `containers` (see the README in the `containers` directory).

Primitives can, and often should, contain default basic styling where doing so would undoubtedly be beneficial to any implementer. For example `Input` should always have a default dark / light mode background and text color, it makes sense to set this at the primitive level. An implementer can always override/extend the default styles if necessary.

## Is what I'm making a primitive?

- You're using the Stitches `styled` function to apply styles to an element or extended a styled object.
- The component is the equivilent of a styled HTML element, E.g. a styled HTML `anchor` component
- The component is low level and widely used component like `Flex`

If not, you are probably making a `common` component.
