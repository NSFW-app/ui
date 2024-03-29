# @nsfw-app/ui

## 1.9.3

### Patch Changes

- 3117a05: Fix util toFloatString bug

  Guard for undefined not falsey for zero decimal place

## 1.9.2

### Patch Changes

- 35cb26e: Add Coinbase Icon

## 1.9.1

### Patch Changes

- 35616a7: Simplify ProgressBar removing delayed animation effect
- 4306504: Fix primary pill button hover style

  Set primary pill compound variant hover text color to white instead of grey

## 1.9.0

### Minor Changes

- b8b45c7: Add ProgressBar component

### Patch Changes

- c0f5796: Transparent Modal/PopupDialog backdrop with blurred variant

## 1.8.0

### Minor Changes

- 5b380fc: Add GnosisSafe icon
- e62864f: Add ExternalLink icon to NavLink with target="\_blank"

## 1.7.0

### Minor Changes

- a3da4e4: Add Radix UI Selector component with Network Selectory story

### Patch Changes

- d5837cc: Fix BadgeNsfw svg property errors

## 1.6.0

### Minor Changes

- 27518fc: Add \$NSFW badge icon

## 1.5.0

### Minor Changes

- fbb0116: Add isPromise typegaurd

### Patch Changes

- 2702262: Export ProgressScreenProps interface
- 9eae3b3: Fix modal wrappers missing background-color
- 1168fa2: Fix react-hook-form missing peerDependency

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
