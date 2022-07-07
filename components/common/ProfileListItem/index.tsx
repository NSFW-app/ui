import { ComponentProps } from '@stitches/react'
import { Text } from 'primitives/Text'
import { Box } from 'primitives/Box'
import { Flex } from 'primitives/Flex'
import { theme } from 'lib/theme'
import { Button } from 'common/Button'
import { Profile } from 'models/Profile'
import { useToggleFollowProfile } from 'hooks/useToggleFollowProfile'
import { observer } from 'mobx-react-lite'
import { Avatar } from 'common/Avatar'
import { AppRoutes } from 'config/routes'
import { Link } from 'common/Link'
import { useStore } from 'lib/store/useStore'

export interface ProfileListItemProps extends ComponentProps<typeof Box> {
  profile: Profile
}

const _ProfileListItem: React.FC<ProfileListItemProps> = ({ profile, css }) => {
  const store = useStore()
  const { toggleFollowProfile } = useToggleFollowProfile(profile)
  const profilePath = `${AppRoutes.PROFILE}/${profile?.username}`

  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '-2px',
        textDecoration: 'none',
        padding: '16px',
        borderRadius: '6px',
        transition: 'background-color 200ms ease',
        backgroundColor: theme.colors.gray300,
        '@media (hover: hover)': {
          '&:hover': {
            backgroundColor: theme.colors.gray400,
          },
          '&:hover [data-follow]': {
            border: `1px solid ${theme.colors.gray300}`,
          },
        },
        ...css,
      }}
    >
      <Link href={profilePath} nounderline>
        <Flex
          css={{
            backgroundColor: 'transparent',
            justifyContent: 'space-between',
          }}
        >
          <Avatar src={profile?.avatar?.url} size='small' />
          <Box css={{ marginLeft: '8px', backgroundColor: 'transparent' }}>
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
        }}
        onClick={async (e) => {
          await toggleFollowProfile(e)
          store.user.suggestions.fetch()
        }}
      >
        {profile.followingStatus}
      </Button>
    </Box>
  )
}

export const ProfileListItem = observer(_ProfileListItem)
