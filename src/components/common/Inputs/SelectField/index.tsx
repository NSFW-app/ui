import React, { forwardRef, useCallback } from 'react'
import { FieldError } from 'common/Inputs/FieldError'
import { hasStringValue } from 'utils'
import Select, {
  Props,
  components,
  DropdownIndicatorProps,
  OptionProps,
} from 'react-select'
import { FieldContainer } from '../TextField'
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'

import { CSSProp } from 'core/stitches'
import { Icon } from 'common/Icon'
import { styles } from './config'

export interface SelectFieldProps extends Omit<Props, 'isDisabled'>, CSSProp {
  name: string
  control: Control<FieldValues, object>
  error?: string | boolean
  disabled?: boolean
  rules?: UseControllerProps['rules']
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon='Chevron' rotate={90} />
    </components.DropdownIndicator>
  )
}

const Option = (props: OptionProps) => {
  const ref = useCallback(
    (node: HTMLDivElement) => props.isSelected && node?.scrollIntoView(),
    [props.isSelected]
  )

  return (
    <components.Option
      className={props.isSelected ? 'selected' : ''}
      {...props}
      innerRef={ref}
    />
  )
}

export const SelectField = forwardRef<HTMLDivElement, SelectFieldProps>(
  (
    { name = 'select', rules, error = false, disabled, css, control, ...args },
    ref
  ) => {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <FieldContainer
            ref={ref}
            fieldError={hasStringValue(error)}
            css={css}
          >
            <Select
              styles={styles}
              components={{
                IndicatorSeparator: undefined,
                DropdownIndicator,
                Option,
              }}
              aria-invalid={!!error}
              aria-errormessage={typeof error === 'string' ? error : undefined}
              blurInputOnSelect
              isDisabled={disabled}
              isSearchable={false}
              {...field}
              {...args}
            />
            {hasStringValue(error) && <FieldError>{error}</FieldError>}
          </FieldContainer>
        )}
      />
    )
  }
)

SelectField.displayName = 'SelectField'
