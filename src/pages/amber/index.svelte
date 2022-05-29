<script lang="ts">
  import InfoBox from '@/components/info-box/index.svelte'
  import MyCrypto from '@/components/my-crypto/index.svelte'
  import AmberSwap from '@/components/amber-swap/index.svelte'

  const content = `CxNxD Omega는 Nectar War 게임에 사용되는 NFT입니다. 민팅 가격은 1개에 2 klay 입니다.
하루에 총 1000개 민팅이 가능하며 지갑당 하루에 9개 민팅 가능합니다. CxNxD Omega는 민팅시 스킬을 랜덤으로 부여받습니다.
또한 CxNxD Asset NFT를 활용하여 CxNxD Omega의 의상을 바꿀 수 있습니다.`
</script>

<div class="wrap">
  <InfoBox {content} />
  <div class="space" />
  <MyCrypto />
  <div class="space" />
  <AmberSwap />
  <div class="space" />
</div>
