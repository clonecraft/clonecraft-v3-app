<script lang="ts">
  import { klaytn, connect } from '@/blockchain/chain/klaytn'
  import { isConnect, myAddress, myAssetList, myShortAddress, myV3List } from '@/stores'
  import { METADATA_API_BASE_URI } from '@/constants/index'
  import axios from 'axios'
  import { onMount } from 'svelte'

  onMount(async () => {
    if (window.klaytn !== undefined && window.klaytn._kaikas.isEnabled()) {
      await connectWallet()
    }
    if (window.klaytn !== undefined) {
      window.klaytn.on('accountsChanged', async () => {
        await connectWallet()
      })
    }
  })

  const connectWallet = async () => {
    connect()
    await klaytn.enable()
    $myAddress = klaytn.selectedAddress
    $myShortAddress = `${$myAddress.slice(0, 6)}...${$myAddress.slice(-4)}`
    $myV3List = await getMyV3List(klaytn.selectedAddress)
    $myAssetList = await getMyAssetList(klaytn.selectedAddress)
    $isConnect = true
  }

  const getMyV3List = async (address: string) => {
    const res = await axios.get(`${METADATA_API_BASE_URI}/v3/wallet/${address}`)
    return res.data
  }

  const getMyAssetList = async (address: string) => {
    const res = await axios.get(`${METADATA_API_BASE_URI}/asset/wallet/${address}`)
    return res.data
  }
</script>

<button class="normal-button" on:click={connectWallet}>Wallet Connect</button>

<style lang="scss">
  @media screen and (max-width: 1000px) {
    .normal-button {
      display: none;
    }
  }
</style>
