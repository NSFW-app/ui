# @nsfw-app/ui

## 1.4.1

### Patch Changes

- 4513108: Fix GroupedComparisonGrid row border bottom default color
- d33afad: Fix Desktop/mobile viewport size hooks for SSR

## 1.4.0

### Minor Changes

- 8ef2d7e: Add CurrencySelectOption button with grouped Story
- a711c81: Add uppercase variant to Anchor (alike Button)
- d19bc80: Add ButtonGroup primitive

## 1.3.0

### Minor Changes

- 57863df: Add Mobile Hamburger menu drawer component [NSFW-1063](#6)
- 4c117ad: Add Card component
- 78a39ff: Add detectDevice util (react-device-detect)
- 5fc6126: Refactor ConfirmPopupDialog to accept props to configure as well as children

### Patch Changes

- c74b218: Fix PopupDialog missing background-color for content container
- 341c15e: Refactor Remove PopOver component
- 4317e4b: Fix Button Uppercase as variant instead of default
- 13ee4a8: Fix Container Move to primitive as styled Stitches component
- c095fbc: Fix GroupedComparisonGrid Add RowCelll min-width
- e627bc1: Fix icons/Cross Missing classes
- d1609ee: Fix ConfirmPopupDialog Story controls showing props
- 6c899b5: Fix SnackBar Exports to namespace the configs
- 890c435: Fix BadgeBinance Apply themed svg path fill

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
