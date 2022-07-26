import { Box } from 'primitives/Box'
import { Flex } from 'primitives/Flex'
import { Children } from 'react'
import { CSS, CSSProp } from 'core/stitches'
import { Button } from 'components/Button'
import { TabsTrack } from './TabsTrack'

export interface TabsProps extends CSSProp {
  activeTab: number
  buttonLabels: string[]
  setActiveTab: (activeTab: number) => void
  tabsWrapperCss?: CSS
}

export const Tabs: React.FC<TabsProps> = ({
  activeTab,
  buttonLabels,
  setActiveTab,
  children,
  css,
  tabsWrapperCss,
}) => {
  return (
    <Flex
      css={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowX: 'hidden',
        width: '100%',
        ...css,
      }}
    >
      <TabsTrack>
        {buttonLabels.map((label, i) => (
          <Button
            tab
            active={activeTab === i}
            key={`tab_button_${label}_${i}`}
            onClick={() => setActiveTab(i)}
          >
            {label}
          </Button>
        ))}
      </TabsTrack>
      <Flex
        css={{
          position: 'relative',
          left: `-${activeTab * 100}%`,
          transition: 'all 300ms ease-in',
          width: '100%',
          ...tabsWrapperCss,
        }}
      >
        {Children.map(children, (child, i) => (
          <Box
            css={{
              transition: 'opacity 300ms ease-out',
              opacity: activeTab === i ? '1' : '0',
              width: '100%',
              minWidth: '100%',
              maxWidth: '100%',
            }}
          >
            {child}
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}
