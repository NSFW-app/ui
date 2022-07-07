import {
  Comment,
  PaginatedResult,
  Post,
  NsfwSubscription,
  Order,
  Profile,
} from 'graphql/types'
import { NextPage } from 'next'

export interface DarkModeProp {
  darkMode: boolean
}

// TODO: move to nsfw/shared?
export interface ServerError {
  message: string
  extensions?: {
    status: number
    code: string
  }
  path?: string[]
  locations?: {
    line: number
    column: number
  }[]
}

// TODO: move to nsfw/shared?
export interface ApiMutationInput<T> {
  input: T
}

export interface NextErrorProps {
  statusCode?: number
  title?: string
}

export type NextPageProps<PageProps = {}> = NextPage<
  PageProps & NextErrorProps & Record<string, any> & { canonical?: string }
>

export interface PostPaginatedResult extends PaginatedResult {
  // ? is there a better way to cast or "select" the Comment type from the Pageable union
  // ? can these items be a non-nullable array?
  items: Post[]
}

export interface CommentPaginatedResult extends PaginatedResult {
  // ? is there a better way to cast or "select" the Comment type from the Pageable union
  // ? can these items be a non-nullable array?
  items: Comment[]
}

export interface SalesOrdersPaginatedResult extends PaginatedResult {
  items: Order[]
}
export interface WithdrawalOrdersPaginatedResult extends PaginatedResult {
  items: Order[]
}

// Temporarily omitting items as Subscription is not yet a type of the Pageable union
export interface SubscriptionPaginatedResult extends PaginatedResult {
  // ? is there a better way to cast or "select" the Comment type from the Pageable union
  // ? can these items be a non-nullable array?
  items: NsfwSubscription[]
}

export interface ProfilePaginatedResult extends PaginatedResult {
  items: Profile[]
}

export type ShareSocialType = 'twitter' | 'facebook'
