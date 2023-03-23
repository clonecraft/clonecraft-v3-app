<script lang="ts">
  import InfoBox from '@/components/info-box/index.svelte'
  import V3Info from '@/components/v3-info/index.svelte'
  import V3List from '@/components/v3-list/index.svelte'
  import AssetList from '@/components/asset-list/index.svelte'

  const content = `CxNxD Omega는 Clonecraft 게임에 사용될 예정인 NFT입니다. 
CxNxD Asset Nft를 사용해서 Omega nft의 이미지와 메타데이터를 변경할 수 있습니다. 
Asset 장착과 해제엔 Amber 토큰으로 수수료가 발생합니다.`
</script>

<div class="wrap">
  <InfoBox {content} />
  <div class="space" />
  <V3Info />
  <div class="space" />
  <V3List />
  <div class="space" />
  <AssetList />
  <div class="space" />
</div>
