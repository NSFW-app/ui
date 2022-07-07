# @nsfw/ui

- [Installation](#installation)
  - [Core Design System with StitchesJS](#core-design-system-with-stitchesjs)
  - [Global Styles](#global-styles)
  - [Importing your first component](#importing-your-first-component)
- [Contributing](#contributing)
  - [Development](#development)
    - [Running Storybook locally](#running-storybook-locally)
    - [Linking to a local application](#linking-to-a-local-application)

## Installation

Not published yet (see linking local in [Contributing](#contributing))

### Core Design System with StitchesJS

@nsfw/ui currently uses [Stitches](https://stitches.dev/) as it's main styling & theming library.

The core Stitches API is exported onto a named module export `Stitches`, which is mainly the result of [`createStitches`](https://stitches.dev/docs/api#createstitches), but also other custom themes (lightTheme), global styles, and utils.

This can be reviewed in [/src/core/stitches/index.ts](/src/core/stitches/index.ts).

The core theming is namedspaced under "Stitches" as I think it's safe to assume we may want to use other approaches for styling in the future, and the great thing about Stitches is that is can run along side multiple Stitches `createStitches` instances, CSS, or other CSS-in-JS libs.

### Global Styles

Sitches has a method called [globalCss](https://stitches.dev/docs/styling#global-styles) that is used for base styles, fonts, and browser/lib overrides.

@nsfw/ui has some default global CSS that can be imported that uses global

These can be injected into your app like below.

```tsx
import type { AppProps } from "next/app";
import { Stitches } from "@nsfw/ui";

// App specific globals derived from internal Stitches theming
const appGlobalCss = Stitches.createGlobalCss({
  color: '$voilet100' // a Stitches "token" from @nsfw/ui core default theme.
})

function MyApp({ Component, pageProps }: AppProps) {
  Stitches.globals.base(); // includes reset styles
  Stitches.globals.fonts();
  Stitches.globals.scrollbar();
  appGlobalCss()

  return <Component {...pageProps} />;
}

export default MyApp;
```

### Importing your first component

```tsx
import { Text, Heading, Flex } from '@nsfw/ui'

export const Home = () => (
  <Flex column center>
    <Heading>NSFW/UI</Heading>
    <Text subText>Hello world.</Text>
  </Flex>
)
```

## Contributing

### Development

@nsfw/ui uses [Storybook](https://storybook.js.org/docs/ember/get-started/introduction) as a UI development environment, which documents self-contained presentational components, and allows for controlled testing.

#### Running Storybook locally

- Run `yarn` to install dependencies.
- Run `yarn storybook` to start Storybook locally.

#### Linking to a local application

You can use [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/), but I recommend checking out [Yalc](https://github.com/whitecolor/yalc). [This article helped me understand using Yalc](https://medium.com/@mtfranchetto/the-solution-for-a-working-npm-yarn-link-ddcb4f3c785e).

1. Build & publish the package locally

```bash
cd nsfw/ui
yarn
# Note, build can take up to 2min uncached to finished, with --watch, changes are faster.
yarn build --watch
# global install or npx yalc
yalc publish
```

2. Add it to your application

```bash
cd your-app
yalc add @nsfw/ui
# to remove:
yalc remove @nsfw/ui
```

3. When you make changes simply run the command below to "push" changes to linked apps from @nsfw/ui

```bash
yalc push
```
