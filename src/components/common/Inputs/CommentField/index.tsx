import { FormEvent, forwardRef } from 'react'
import { ComponentProps } from '@stitches/react'
import { hasStringValue } from 'utils'
import { InputActionField } from 'common/Inputs/InputActionField'
import { TextFieldInput } from 'common/Inputs/TextField/TextFieldInput'
import { InputActionIcon } from 'common/Inputs/InputActionField/InputActionIcon'
import { FieldError } from 'common/Inputs/FieldError'
import { Flex } from 'primitives/Flex'

export interface CommentFieldProps
  extends Omit<ComponentProps<typeof TextFieldInput>, 'error'> {
  error?: boolean | string
  onSend?: () => void
}

// Doing this because unclear how to type a Stitches component to expect as and row props
interface CommentFieldTextAreaProps
  extends ComponentProps<typeof TextFieldInput> {
  as: string
  row: number
}
const CommentFieldTextArea: React.FC<CommentFieldTextAreaProps> = forwardRef(
  (args, ref) => <TextFieldInput ref={ref} {...args} />
)

CommentFieldTextArea.displayName = 'CommentFieldTextArea'

export const CommentField = forwardRef<HTMLInputElement, CommentFieldProps>(
  ({ css, onInput, onSend, error, disabled, ...args }, ref) => {
    const handleAutoGrow = (e: FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLTextAreaElement
      const scrollHeight = target.scrollHeight
      if (!target.value) {
        return (target.style.height = '56px')
      }
      if (scrollHeight > 56 && scrollHeight < 200) {
        target.style.height = `${target.scrollHeight}px`
      }
    }

    return (
      <InputActionField error={!!error} css={css} iconPosition='right'>
        <Flex css={{ width: '100%' }}>
          <CommentFieldTextArea
            ref={ref}
            disabled={disabled}
            error={hasStringValue(error) ? 'message' : !!error}
            as='textarea'
            css={{
              resize: 'none',
              paddingRight: '6px',
              '&::-webkit-scrollbar': {
                width: '0px',
              },
            }}
            row={1}
            onInput={(e) => {
              onInput?.(e)
              handleAutoGrow(e)
            }}
            {...args}
          />
          <InputActionIcon
            error={hasStringValue(error) ? 'message' : !!error}
            onClick={onSend}
            icon='Send'
            disabled={disabled}
          />
        </Flex>
        {hasStringValue(error) && <FieldError>{error}</FieldError>}
      </InputActionField>
    )
  }
)

CommentField.displayName = 'CommentField'
