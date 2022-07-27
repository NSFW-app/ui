import {
  PopupDialog,
  PopupDialogProps,
} from 'components/PopupDialog/PopupDialog'
import { PopupDialogContent } from 'components/PopupDialog/PopupDialogContent'
import { ConfirmPopupDialogActions } from './ConfirmPopupDialogActions'
import { ConfirmPopupDialogTitle } from './ConfirmPopupDialogTitle'
import { ConfirmPopupDialogDescription } from './ConfirmPopupDialogDescription'
import { ConfirmPopupDialogYesButton } from './ConfirmPopupDialogYesButton'
import { ConfirmPopupDialogNoButton } from './ConfirmPopupDialogNoButton'

export interface ConfirmPopupDialogContentProps {
  title?: string
  description?: string
  confirmButtonLabel?: string
  rejectButtonLabel?: string
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
}

export interface ConfirmPopupDialogEventsProps {
  onIgnore: () => void
  onReject?: () => void
  onConfirm?: () => void
}

export interface ConfirmPopupDialogStatesProps {
  rejectIsLoading?: boolean
  confirmIsLoading?: boolean
}

export type ConfirmPopupDialogProps = PopupDialogProps &
  ConfirmPopupDialogContentProps &
  ConfirmPopupDialogEventsProps &
  ConfirmPopupDialogStatesProps

export const ConfirmPopupDialog: React.FC<ConfirmPopupDialogProps> = ({
  css,
  isOpen,
  children,
  onIgnore,
  onConfirm,
  onReject,
  rejectIsLoading,
  confirmIsLoading,
  title,
  description,
  confirmButtonLabel,
  rejectButtonLabel,
  primaryAction,
  secondaryAction,
}) => {
  const disabledActions = primaryAction === null && secondaryAction === null
  return (
    <PopupDialog css={css} isOpen={isOpen} onIgnore={onIgnore}>
      <PopupDialogContent css={css}>
        {children ? (
          // Eject completely, compose your own confirmation dialog
          children
        ) : (
          <>
            <ConfirmPopupDialogTitle>{title}</ConfirmPopupDialogTitle>
            <ConfirmPopupDialogDescription>
              {description}
            </ConfirmPopupDialogDescription>
            {!disabledActions && (
              <ConfirmPopupDialogActions>
                {/* PRIMARY SLOT */}
                {primaryAction !== undefined ? (
                  primaryAction
                ) : (
                  <ConfirmPopupDialogYesButton
                    onClick={() => onConfirm?.()}
                    loading={confirmIsLoading}
                  >
                    {confirmButtonLabel}
                  </ConfirmPopupDialogYesButton>
                )}

                {/* SECONDARY SLOT - disable by passing undefined */}
                {secondaryAction !== undefined ? (
                  secondaryAction
                ) : (
                  <ConfirmPopupDialogNoButton
                    onClick={() => onReject?.()}
                    loading={rejectIsLoading}
                  >
                    {rejectButtonLabel}
                  </ConfirmPopupDialogNoButton>
                )}
              </ConfirmPopupDialogActions>
            )}
          </>
        )}
      </PopupDialogContent>
    </PopupDialog>
  )
}
