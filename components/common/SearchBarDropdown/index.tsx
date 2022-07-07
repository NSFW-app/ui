import { ComponentProps } from '@stitches/react'
import { theme } from 'lib/theme'
import { Box } from 'primitives/Box'
import { Children, useRef, useState } from 'react'
import { SearchField } from 'common/Inputs/SearchField'
import { useOutsideClick } from 'hooks/useOutsideClick'
import { useStore } from 'lib/store'
import { NSFW_EVENT } from 'lib/tracking/types'

export interface SearchBarDropdownProps extends ComponentProps<typeof Box> {
  handleClose?: () => void
  loading?: boolean
  autoFocus?: boolean
  onSearchChange?: (val: string) => void
}

export const SearchBarDropdown: React.FC<SearchBarDropdownProps> = ({
  onSearchChange,
  handleClose,
  css,
  children,
  loading,
  autoFocus,
}) => {
  const [value, setValue] = useState<string>('')
  const searchBarRef = useRef<HTMLDivElement>(null)
  const store = useStore()

  const onClose = () => {
    handleClose?.()
    setValue('')
  }

  useOutsideClick(searchBarRef, () => onClose())

  return (
    <Box
      css={{
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        backgroundColor: 'transparent',
        ...css,
      }}
      ref={searchBarRef}
    >
      <Box css={{ position: 'relative', backgroundColor: 'transparent' }}>
        <SearchField
          placeholder='Search'
          css={{ position: 'relative', zIndex: 2, marginBottom: '0px' }}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
            onSearchChange?.(newValue)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              onClose()
            }
          }}
          loading={loading}
          autoFocus={autoFocus}
          onClick={() => {
            store.analytics.track(NSFW_EVENT.SEARCH_CLICK)
            store.ui.handleGatedAction()
          }}
        />
        {value.length > 0 && (
          <Box
            css={{
              position: 'absolute',
              top: '34px',
              left: '0',
              right: '0',
              zIndex: 1,
              maxHeight: '50vh',
              overflow: 'auto',
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
              boxShadow: theme.shadows.lg,
            }}
          >
            {children}
          </Box>
        )}
      </Box>
      {value.length > 0 && Children.count(children) > 0 && (
        <Box
          css={{
            display: 'none',
            backgroundColor: theme.colors.gray100,
            opacity: '50%',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            '@lg': {
              display: 'block',
            },
          }}
          onClick={() => onClose()}
        />
      )}
    </Box>
  )
}
