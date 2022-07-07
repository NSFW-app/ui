import React from 'react'
import { theme } from '../lib/theme'
import { DarkModeProvider } from '../lib/theme/DarkModeContext'
import { StoreProvider } from '../lib/store/StoreProvider'
import { lightMode } from '../lib/theme/lightTheme'
import { globalStyles } from '../lib/theme/global'
import { Flex } from '../components/primitives/Flex'
import { dummyPost } from '../components/shared/PostCard/PostCard.stories'
import { mockProfile } from '../components/common/UserCard/UserCard.stories'

import 'lib/theme/css/reset.css'

globalStyles()

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
      <StoreProvider
        key='mst-store'
        value={{
          user: {
            account: mockProfile,
          },
        }}
      >
        <DarkModeProvider value={darkMode}>
          <Flex
            full
            column
            className={darkMode ? '' : lightMode}
            css={{ backgroundColor: theme.colors.gray100 }}
          >
            {story({ args: { darkMode, ...props.args } })}
          </Flex>
        </DarkModeProvider>
      </StoreProvider>
    )
  },
]
