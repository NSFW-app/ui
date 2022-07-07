import addons from '@storybook/addons'
import { STORY_RENDERED, STORY_CHANGED } from '@storybook/core-events'

addons.register('TitleAddon', (api) => {
  ;[STORY_RENDERED, STORY_CHANGED].forEach((evt) => {
    api.on(evt, () => {
      document.title = `NSFW UI`
    })
  })
})
