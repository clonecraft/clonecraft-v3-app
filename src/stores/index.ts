import { writable } from 'svelte/store'

export const isConnect: any = writable(false)
export const myAddress: any = writable(null)
export const myShortAddress: any = writable(null)

// my nft list
export const myV3List: any = writable([])
export const myAssetList: any = writable([])

// selected nft
export const v3ImageMergeLoading: any = writable(false)
export const selectedV3: any = writable({
  id: null,
})
export const selectedAsset: any = writable({
  background: {
    id: null,
  },
  situation: {
    id: null,
  },
  weapon: {
    id: null,
  },
  body: {
    id: null,
  },
  tattoo: {
    id: null,
  },
  mouth: {
    id: null,
  },
  eyes: {
    id: null,
  },
  clothes: {
    id: null,
  },
  hat: {
    id: null,
  },
  accessory: {
    id: null,
  },
  mask: {
    id: null,
  },
  effect: {
    id: null,
  },
})