import { ComponentProps } from '@stitches/react'
import { Text } from 'primitives/Text'
import { Flex } from 'primitives/Flex'
import { Avatar } from 'common/Avatar'
import { Box } from 'primitives/Box'
import { theme } from 'lib/theme'
import { Comment } from 'graphql/types'
import { Icon } from 'common/Icon'
import { Link } from 'common/Link'
import { AppRoutes } from 'config/routes'
import { TextSkeleton } from 'common/TextSkeleton'
import { randomIntBetween } from 'lib/helpers'

export interface CommentBoxProps extends ComponentProps<typeof Flex> {
  comment: Comment
  timeDistance?: string
  blurredText?: boolean
  onClickAuthor?: () => void
}

export const CommentBox: React.FC<CommentBoxProps> = ({
  css,
  timeDistance,
  comment,
  blurredText = false,
  onClickAuthor,
}) => {
  const avatar = comment.author.avatar
  return (
    <Flex
      css={{
        borderBottom: `1px solid ${theme.colors.gray500}`,
        padding: '24px 0px 9px 0px',
        width: '100%',
        ...css,
      }}
    >
      <Link
        nounderline
        href={`${AppRoutes.PROFILE}/${comment.author.username}`}
        onClick={onClickAuthor}
      >
        <Avatar src={avatar?.url} size='xsmall' />
      </Link>
      <Flex
        css={{
          marginLeft: '16px',
          marginTop: '2px',
          width: '100%',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Link
          nounderline
          href={`${AppRoutes.PROFILE}/${comment.author.username}`}
          onClick={onClickAuthor}
          css={{ marginRight: '6px' }}
        >
          <Text as='span' type='body3' css={{ lineHeight: '16px' }}>
            {comment.author.displayName}{' '}
          </Text>
        </Link>
        {blurredText ? (
          <>
            <TextSkeleton css={{ width: '80%', margin: '0 8px 0 4px' }} />
            <TextSkeleton
              css={{
                width: `${randomIntBetween(30, 73)}%`,
                margin: '0 8px 0 0',
              }}
            />
          </>
        ) : (
          <Text
            type='caption1'
            css={{ display: 'inline-block', color: theme.colors.gray800 }}
          >
            {comment.text}
          </Text>
        )}
        {timeDistance && (
          <Text
            as='span'
            type='body3'
            css={{
              lineHeight: '16px',
              color: theme.colors.gray600,
              marginLeft: '6px',
            }}
          >
            {` • ${timeDistance}`}
          </Text>
        )}
        {/* Todo: implement these in future */}
        {/* <Flex>
              <CommentBoxButton buttonIcon='Heart'>88</CommentBoxButton>
              <CommentBoxButton buttonIcon='Reply' css={{ marginLeft: '16px' }}>
                <Span>3</Span>
                <Span css={{ marginLeft: '16px' }}>Reply</Span>
              </CommentBoxButton>
            </Flex> */}
      </Flex>
    </Flex>
  )
}
