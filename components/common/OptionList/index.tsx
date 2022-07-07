import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import { keyframes, styled } from '@stitches/react'
import { Check } from 'common/Icon'
import { CSS, theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'
import { Label } from 'primitives/Label'
import { List } from 'primitives/List'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { groupList } from 'primitives/List'
import { ComponentProps } from '@stitches/react'
import { Control, Controller, FieldValues } from 'react-hook-form'

const StyledOptionsList = styled(List, {})

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
})

export const OptionListItemHeader = styled(Label, {
  cursor: 'pointer',
  marginBottom: '0px',
})

export const OptionListItemLabel = styled(Label, {
  cursor: 'pointer',
  marginBottom: '0',
})

const scaleUp = keyframes({
  '0%': { transform: 'scale(0.5)' },
  '70%': { transform: 'scale(1.1)' },
  '90%': { transform: 'scale(0.9)' },
})

export const StyledOptionListItem = styled(ToggleGroupPrimitive.Item, {
  ...groupList,
  textAlign: 'left',
  margin: 0,
  borderWidth: '0 0 1px 0',
  borderColor: theme.colors.gray600,
  transition: 'background .7s ease-out, color .6s linear ',
  background: theme.colors.gray500,
  backgroundSize: '200%',
  '&:hover': {
    background: theme.colors.gray400,
  },
  '& svg': {
    animation: `${scaleUp} 400ms`,
  },
  '&:first-child': {
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
  },
  '&:last-child': {
    borderBottomRightRadius: '8px',
    borderBottomLeftRadius: '8px',
    boxShadow: `0 0 0px`,
  },
  '&[data-state=on]': {
    [`& ${OptionListItemHeader}`]: {
      color: 'white',
      transition: 'color 0.4s linear',
    },
    backgroundColor: theme.colors.gray500,
    '&:hover': {
      backgroundPosition: 'right',
    },
  },
})

export interface OptionsListProps
  extends Partial<ComponentProps<typeof ToggleGroupPrimitive.Item>> {
  css?: CSS
  control: Control<FieldValues, object>
  onOptionChange?: (option: string) => void
}

export const OptionsList = forwardRef<HTMLDivElement, OptionsListProps>(
  ({ children, css = {}, control, onOptionChange, name }, ref) => {
    const getDefaultValue = useCallback(() => {
      if (name && name in control._formValues) {
        return control._formValues[name] || ''
      }
      return ''
    }, [control, name])

    const [selectedValue, setSelectedValue] = useState<string>(
      getDefaultValue()
    )

    return (
      <Controller
        name={name || 'optionList'}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <StyledOptionsList type='grouped' css={css}>
              <StyledToggleGroup
                value={value}
                onValueChange={(e) => {
                  setSelectedValue(e)
                  onChange(e)
                  onOptionChange?.(e)
                }}
                type='single'
                aria-label='Text alignment'
                ref={ref}
              >
                {Children.map<ReactNode, ReactNode>(children, (child) => {
                  if (isValidElement(child)) {
                    return cloneElement(child, { listValue: selectedValue })
                  }
                })}
              </StyledToggleGroup>
            </StyledOptionsList>
          )
        }}
      />
    )
  }
)

export interface OptionListItemProps {
  header?: string
  label?: string
  optionValue: string
  disabled?: boolean
  displayIcon?: boolean
  listValue?: string
}

export const OptionListItem: React.FC<OptionListItemProps> = ({
  children,
  header,
  label,
  optionValue,
  disabled,
  listValue,
}) => {
  const isSelected = listValue === optionValue

  return (
    <StyledOptionListItem
      disabled={disabled || isSelected}
      value={optionValue}
      aria-label='top aligned'
    >
      <Flex column css={{ backgroundColor: 'transparent', gap: '4px' }}>
        {header && <OptionListItemHeader>{header}</OptionListItemHeader>}
        {label && <OptionListItemLabel>{label}</OptionListItemLabel>}
        {children}
      </Flex>
      {isSelected && <Check />}
    </StyledOptionListItem>
  )
}

OptionsList.displayName = 'OptionLIst'
