import { ChangeEvent, forwardRef, useState, useEffect } from 'react'
import { ComponentProps } from '@stitches/react'
import { hasStringValue } from 'utils'
import { Flex } from 'primitives/Flex'
import { Box } from 'primitives/Box'
import { FieldError } from 'common/Inputs/FieldError'
import { InputActionField } from 'common/Inputs/InputActionField'
import { InputActionIcon } from '../InputActionField/InputActionIcon'
import { TextFieldInput } from '../TextField/TextFieldInput'
import { Spinner } from 'common/Spinner'
import { theme } from 'core/stitches'
import { Button } from 'common/Button'
import { Icon } from 'common/Icon'

export interface SearchFieldProps
  extends Omit<ComponentProps<typeof TextFieldInput>, 'error' | 'onChange'> {
  validationProps?: ComponentProps<typeof Box>
  error?: string | boolean
  disableTab?: boolean
  loading?: boolean
  autoFocus?: boolean
  onClear?: () => void
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      error = false,
      placeholder,
      disabled,
      onKeyDown,
      disableTab,
      loading,
      value,
      css,
      autoFocus,
      onClear,
      onChange,
      ...args
    },
    ref
  ) => {
    const newValue = typeof value === 'string' ? value : ''
    const [_value, setValue] = useState(newValue)

    useEffect(() => setValue(newValue), [newValue])

    return (
      <InputActionField
        error={!!error}
        css={{ backgroundColor: 'transparent', ...css }}
        iconPosition='left'
      >
        <Flex
          css={{
            width: '100%',
            height: '40px',
            alignItems: 'center',
          }}
        >
          {_value && (
            <Button
              icon
              css={{ position: 'absolute' }}
              onClick={() => {
                setValue('')
                onChange?.('')
              }}
            >
              <Icon icon='Cross' />
            </Button>
          )}
          <TextFieldInput
            ref={ref}
            value={_value}
            error={hasStringValue(error) ? 'message' : !!error}
            type='search'
            disabled={disabled}
            placeholder={placeholder}
            onChange={(e) => {
              const newValue = e.target.value.trim()
              setValue(newValue)
              onChange?.(newValue, e)
            }}
            onKeyDown={(e) => {
              if (onKeyDown) {
                onKeyDown(e)
              }
              if (disableTab && e.key === 'Tab') {
                e.preventDefault()
                return false
              }
            }}
            css={{ height: '40px' }}
            autoFocus={autoFocus}
            {...args}
          />
          <InputActionIcon
            disabled={disabled}
            error={hasStringValue(error) ? 'message' : !!error}
            tabIndex={-1}
            css={{ height: '100%' }}
            {...(!loading && { icon: 'Search' })}
          >
            {loading && (
              <Spinner
                css={{
                  marginRight: '3px',
                  borderColor: theme.colors.voilet100,
                  borderWidth: '2px',
                }}
              />
            )}
          </InputActionIcon>
        </Flex>
        {hasStringValue(error) && <FieldError>{error}</FieldError>}
      </InputActionField>
    )
  }
)

SearchField.displayName = 'SearchField'
