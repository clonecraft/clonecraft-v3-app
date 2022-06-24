<script lang="ts">
  import { klaytn, connect } from '@/blockchain/chain/klaytn'
  import { isConnect, myAddress, myShortAddress } from '@/stores'

  const connectWallet = async () => {
    connect()
    await klaytn.enable()
    $myAddress = klaytn.selectedAddress
    $myShortAddress = `${$myAddress.slice(0, 6)}...${$myAddress.slice(-4)}`
    $isConnect = true
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
