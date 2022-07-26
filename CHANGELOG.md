# @nsfw-app/ui

## 1.2.0

### Minor Changes

- ea8b227: Add GroupedComparisonGrid component

  Composable primitivies to form comparisons tables e.g pricing or fees section comparison tables

### Patch Changes

- 7d8f3b3: Remove common directory for top level components

  - `/components/common` => `/components`
  - `/components/primitives` => `/primitives`
  - Moves some components in primitives to components (as they were not primitives)

## 1.1.0

### Minor Changes

- f7c1b76: Add NavLink component

  Horizontal or vertical navigation links with highlighted border bottom/left on hover/active.

- 57c7ec7: Fix typography (Heading/Text) responsivity

  - Improve responsivity of typography across screen sizes, particularly, increase size of headings for large desktops
  - Add subhead1 type variant to Text for larger paragraph tags, typically seen underneath h1's.

## 1.0.1

### Patch Changes

- 29b5600: Remove transparent from Box / Flex

  - Fix button primary variant height
  - Update theme maxWidth to match theme breakpoints
  - Export hooks and add useHasMounted, useIsDesktopSize, and useIsMobileSize

## 1.0.0

### Major Changes

- 5d5b49a: Package theming, components & utilities from the NSFW interface

  - Setup CHANGELOG
  - Setup commitlint
  - Setup prettierrc & .vscode
  - Build CJS & ESM with Rollup
  - Configure Github Registry for packaging
