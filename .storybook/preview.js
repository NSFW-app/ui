import React from 'react'

import { Stitches, Flex } from '../src/index'
import { DarkModeProvider } from '../src/core/providers/DarkModeContext'

Stitches.globals.base()
Stitches.globals.fonts()
Stitches.globals.scrollbar()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

export const globalTypes = {
  theme: {
    name: 'Dark / light mode',
    description: 'Dark / light mode toggle for theme',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light', icon: 'circlehollow' },
        { value: 'dark', title: 'Dark', icon: 'circle' },
      ],
      showName: true,
    },
  },
}

export const decorators = [
  (story, props) => {
    const darkMode = props.globals.theme === 'dark' ? true : false
    return (
      <DarkModeProvider value={darkMode}>
        <Flex
          full
          column
          className={darkMode ? '' : Stitches.lightMode}
          css={{ backgroundColor: Stitches.theme.colors.gray100 }}
        >
          {story({ args: { darkMode, ...props.args } })}
        </Flex>
      </DarkModeProvider>
    )
  },
]
