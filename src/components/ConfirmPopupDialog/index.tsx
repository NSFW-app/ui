import { PopupDialog, PopupDialogProps } from 'components/PopupDialog'
import { PopupDialogContent } from 'components/PopupDialog/PopupDialogContent'

export interface ConfirmPopupDialogProps extends PopupDialogProps {
  onIgnore: () => void
  onReject?: () => void
  onConfirm?: () => void
  rejectIsLoading?: boolean
  confirmIsLoading?: boolean
  title?: string
  description?: string
  confirmButtonLabel?: string
  rejectButtonLabel?: string
}

export const ConfirmPopupDialog: React.FC<ConfirmPopupDialogProps> = ({
  onIgnore,
  css,
  isOpen,
  children,
}) => {
  return (
    <PopupDialog css={css} isOpen={isOpen} onIgnore={onIgnore}>
      <PopupDialogContent css={css}>{children}</PopupDialogContent>
    </PopupDialog>
  )
}
