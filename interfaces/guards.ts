import {
  ProductUnion,
  ExclusivePostProduct,
  TipProduct,
  WithdrawalProduct,
  SubscriptionProduct,
  Media,
  VideoAsset,
} from 'graphql/types'

export const isPostProduct = (
  product: ProductUnion
): product is ExclusivePostProduct | TipProduct => {
  return (
    product.__typename === 'ExclusivePostProduct' ||
    product.__typename === 'TipProduct'
  )
}

export const isSubProduct = (
  product: ProductUnion
): product is SubscriptionProduct => {
  return product.__typename === 'SubscriptionProduct'
}

export const isWithdrawalProduct = (
  product: ProductUnion
): product is WithdrawalProduct => {
  return product.__typename === 'WithdrawalProduct'
}

export const isVideoAsset = (media?: Media): media is VideoAsset => {
  return media?.__typename === 'VideoAsset'
}

export const isError = (error?: unknown): error is Error => {
  return error instanceof Error
}
