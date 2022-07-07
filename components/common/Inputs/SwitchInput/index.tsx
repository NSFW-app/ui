import { ComponentProps } from '@stitches/react'
import { ListItem } from 'primitives/ListItem'
import { Label } from 'primitives/Label'
import { StyledSwitch, StyledThumb } from 'primitives/Switch'

export interface SwitchFieldProps extends ComponentProps<typeof ListItem> {
  label?: string
  checked?: boolean
  disabled?: boolean
  type?: {}
  onCheckedChange?: (checked: boolean) => void
}

export const SwitchField: React.FC<SwitchFieldProps> = ({
  label,
  checked,
  disabled,
  onCheckedChange,
}) => (
  <>
    <Label css={{ color: 'White', marginBottom: '0px' }}>{label}</Label>
    <StyledSwitch
      onCheckedChange={onCheckedChange}
      checked={checked}
      disabled={disabled}
    >
      <StyledThumb disabled={disabled} />
    </StyledSwitch>
  </>
)
