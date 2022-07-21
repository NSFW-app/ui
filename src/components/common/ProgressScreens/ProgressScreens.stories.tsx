import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { styled, theme } from 'core/stitches'
import { Box } from 'primitives/Box'
import { Text } from 'primitives/Text'
import { ProgressScreens, ProgressScreensProps } from './index'
import { Button } from 'common/Button'

const StepBox = styled(Box, {
  margin: '20px 8px',
  padding: '16px',
  backgroundColor: theme.colors.gray400,
  borderRadius: '5px',
})

const StepLabel = styled(Text, {
  marginButtom: '12px',
  textAlign: 'center',
})

const Template: Story<ProgressScreensProps> = ({ ...args }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <Box css={{ maxWidth: '375px', margin: 'auto' }}>
      <ProgressScreens {...args} activeIndex={activeIndex}>
        <StepBox>
          <StepLabel>Step 1</StepLabel>
          <StepLabel>
            I am the <strong>first</strong> child element
          </StepLabel>
          <Button
            onClick={() => {
              setActiveIndex(1)
            }}
          >
            Continue
          </Button>
        </StepBox>

        <StepBox>
          <StepLabel>Step 2</StepLabel>
          <StepLabel>
            I am the <strong>second</strong> child element
          </StepLabel>
          <Button
            onClick={() => {
              setActiveIndex(2)
            }}
          >
            Continue
          </Button>
        </StepBox>

        <StepBox>
          <StepLabel>Step 3</StepLabel>
          <StepLabel>
            I am the <strong>third</strong> child element
          </StepLabel>
          <Button
            onClick={() => {
              setActiveIndex(3)
            }}
          >
            Continue
          </Button>
        </StepBox>

        <StepBox>
          <StepLabel>Step 4</StepLabel>
          <StepLabel>
            I am the <strong>fourth</strong> child element
          </StepLabel>
          <Button
            onClick={() => {
              setActiveIndex(0)
            }}
          >
            Continue
          </Button>
        </StepBox>
      </ProgressScreens>
    </Box>
  )
}

export default {
  title: 'Common/ProgressScreens',
  component: Template,
} as Meta

export const Default = Template.bind({})

// const AuthTemplate: Story<ProgressScreensProps> = ({ darkMode, ...args }) => {
//   const [activeIndex, setActiveIndex] = useState<number>(0)

//   return (
//     <StoryWrapper height='812px' width='375px' p='16px'>
//       <ProgressScreens
//         {...args}
//         activeIndex={activeIndex}
//         onNext={() => setActiveIndex(activeIndex > 3 ? 0 : activeIndex + 1)}
//         onClose={() => setActiveIndex(0)}
//         onComplete={() => setActiveIndex(0)}
//         height={['100vh', 'auto']}
//       >
//         {steps.map(({ title, description, icon }, i) => (
//           <Box
//             key={`intro_step_${i}`}
//             textAlign='center'
//             p={['46px 16px', '46px 60px']}
//             height='100%'
//           >
//             <Icon icon={icon} mb='16px' />
//             <Text fontSize='small' fontWeight='500' color='text.0' mb='20px'>
//               {title}
//             </Text>
//             <Text fontSize='small' color='text.2'>
//               {description}
//             </Text>
//           </Box>
//         ))}
//       </ProgressScreens>
//     </StoryWrapper>
//   )
// }

// export const AuthExample = AuthTemplate.bind({})
