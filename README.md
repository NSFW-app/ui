# @nsfw-app/ui

- [Installation](#installation)
  - [Core Design System with StitchesJS](#core-design-system-with-stitchesjs)
  - [Global Styles](#global-styles)
  - [Importing your first component](#importing-your-first-component)
- [Contributing](#contributing)
  - [Development](#development)
    - [Running Storybook locally](#running-storybook-locally)
    - [Linking to a local application](#linking-to-a-local-application)

## Installation

```
yarn add @nsfw-app/ui
```

### Core Design System with StitchesJS

@nsfw-app/ui currently uses [Stitches](https://stitches.dev/) as it's main styling & theming library.

The core Stitches API is exported onto a named module export `Stitches`, which is mainly the result of [`createStitches`](https://stitches.dev/docs/api#createstitches), but also other custom themes (lightTheme), global styles, and utils.

This can be reviewed in [/src/core/stitches/index.ts](/src/core/stitches/index.ts).

The core theming is namedspaced under "Stitches" as I think it's safe to assume we may want to use other approaches for styling in the future, and the great thing about Stitches is that is can run along side multiple Stitches `createStitches` instances, CSS, or other CSS-in-JS libs.

### Global Styles

Sitches has a method called [globalCss](https://stitches.dev/docs/styling#global-styles) that is used for base styles, fonts, and browser/lib overrides.

@nsfw-app/ui has some default global CSS that can be imported that is just `globalCss` internally.

These globals can be injected into your app like below.

```tsx
import type { AppProps } from "next/app";
import { Stitches } from "@nsfw-app/ui";

// App specific globals derived from internal Stitches theming
const appGlobalCss = Stitches.createGlobalCss({
  color: '$voilet100' // a Stitches "token" from @nsfw-app/ui core default theme.
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
import { Text, Heading, Flex } from '@nsfw-app/ui'

export const Home = () => (
  <Flex column center>
    <Heading>NSFW/UI</Heading>
    <Text subText>Hello world.</Text>
  </Flex>
)
```

## Contributing

### Development

@nsfw-app/ui uses [Storybook](https://storybook.js.org/docs/ember/get-started/introduction) as a UI development environment, which documents self-contained presentational components, and allows for controlled testing.

#### Running Storybook locally

- Run `yarn` to install dependencies.
- Run `yarn storybook` to start Storybook locally.

#### Linking to a local application

You can use [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/), but I recommend checking out [Yalc](https://github.com/whitecolor/yalc). This [article](https://medium.com/@mtfranchetto/the-solution-for-a-working-npm-yarn-link-ddcb4f3c785e) helped me understand using Yalc.

##### Steps to link and refresh changes with Yalc

1. Setup & publish the package to a _local_ registry

```bash
cd nsfw/ui
# Install deps
yarn
# runs build with --watch
yarn dev
# Publish the package to a local registry with the help of Yalc
npx yalc publish --no-scripts
```

2. Add it to your application

```bash
cd your-app
npx yalc add @nsfw-app/ui
# to remove:
npx yalc remove @nsfw-app/ui
```

3. Push package changes to linked apps

```bash
cd nsfw/ui
# Run this after any changes have been built to /dist
npx yalc push
```

> **NOTE**: NextJS caches node_modules in the `.next` directory. For NextJS projects, you'll need to `rm -r .next` and rerun the dev server.
