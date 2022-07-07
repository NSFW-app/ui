import { ComponentProps } from '@stitches/react'
import { observer } from 'mobx-react-lite'
import { Avatar } from 'common/Avatar'
import { Button } from 'common/Button'
import { Link } from 'common/Link'
import { AppRoutes } from 'config/routes'
import { useToggleFollowProfile } from 'hooks/useToggleFollowProfile'
import { theme } from 'lib/theme'
import { Profile } from 'models/Profile'
import { Box } from 'primitives/Box'
import { Flex } from 'primitives/Flex'
import { Text } from 'primitives/Text'
import { useStore } from 'lib/store'
import { NSFW_EVENT } from 'lib/tracking/types'
import { MouseEventHandler } from 'react'

export interface ProfileSearchResultProps extends ComponentProps<typeof Box> {
  profile: Profile
  handleClose?: () => void
}

const _ProfileSearchResult: React.FC<ProfileSearchResultProps> = ({
  css,
  profile,
  handleClose,
}) => {
  const { toggleFollowProfile } = useToggleFollowProfile(profile)
  const store = useStore()

  const handleFollowProfile: MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleFollowProfile(e).then(({ success, following }) => {
      if (success && following) {
        store.analytics.track(NSFW_EVENT.SEARCH_PROFILE_FOLLOW, {
          profileId: profile.profileId,
        })
      }
    })
  }

  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '-2px',
        textDecoration: 'none',
        padding: '16px',
        transition: 'background-color 200ms ease',
        backgroundColor: 'transparent',
        '@media (hover: hover)': {
          '&:hover': {
            backgroundColor: theme.colors.gray500,
          },
          '&:hover [data-follow]': {
            border: `1px solid ${theme.colors.gray400}`,
          },
        },
        ...css,
      }}
    >
      <Link
        nounderline
        href={`${AppRoutes.PROFILE}/${profile.username}`}
        onClick={() => {
          store.analytics.track(NSFW_EVENT.SEARCH_PROFILE_CLICK, {
            profileId: profile.profileId,
          })
          handleClose?.()
        }}
      >
        <Flex transparent full center>
          <Avatar src={profile.avatar?.url} size='small' />
          <Box
            css={{
              marginLeft: '8px',
              backgroundColor: 'transparent',
              textAlign: 'left',
            }}
          >
            <Text type='body3'>{profile.displayName}</Text>
            <Text type='body4' css={{ marginTop: '4px' }}>
              @{profile.username}
            </Text>
          </Box>
        </Flex>
      </Link>
      <Button
        data-follow
        pill
        css={{
          width: 'auto',
          border: `1px solid ${theme.colors.gray400}`,
          backgroundColor: theme.colors.gray500,
          fontSize: '12px',
          lineHeight: '16px',
          marginRight: '20px',
        }}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleFollowProfile(e)
        }}
      >
        {profile.followingStatus}
      </Button>
    </Box>
  )
}

export const ProfileSearchResult = observer(_ProfileSearchResult)
