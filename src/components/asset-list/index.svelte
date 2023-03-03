<script lang="ts">
  import { Canvas, Image } from 'canvas'
  import mergeImages from 'merge-images'
  import { myAssetList, selectedV3, selectedAsset, v3ImageMergeLoading } from '@/stores/index'

  const assetMenuList = [
    {
      type: 'background',
    },
    {
      type: 'situation',
    },
    {
      type: 'weapon',
    },
    {
      type: 'body',
    },
    {
      type: 'tattoo',
    },
    {
      type: 'mouth',
    },
    {
      type: 'eyes',
    },
    {
      type: 'clothes',
    },
    {
      type: 'hat',
    },
    {
      type: 'accessory',
    },
    {
      type: 'mask',
    },
    {
      type: 'effect',
    },
  ]
  let selectedType = 'background'

  async function select(item: any) {
    if ($selectedV3.id === null) {
      alert('omega를 먼저 선택 해주세요.')
    } else {
      const data = { ...item }
      $selectedV3.power_level = $selectedV3.power_level - $selectedV3[item.asset_type].power_level + data.power_level
      $selectedV3.attack = $selectedV3.attack - $selectedV3[item.asset_type].attack + data.attack
      $selectedV3.defense = $selectedV3.defense - $selectedV3[item.asset_type].defense + data.defense
      $selectedV3.hp = $selectedV3.hp - $selectedV3[item.asset_type].hp + data.hp
      $selectedV3.luck = $selectedV3.luck - $selectedV3[item.asset_type].luck + data.luck
      $selectedV3.speed = $selectedV3.speed - $selectedV3[item.asset_type].speed + data.speed
      $selectedV3.evade = $selectedV3.evade - $selectedV3[item.asset_type].evade + data.evade
      $selectedV3.hitrate = $selectedV3.hitrate - $selectedV3[item.asset_type].hitrate + data.hitrate
      $selectedV3.divine = $selectedV3.divine - $selectedV3[item.asset_type].divine + data.divine
      $selectedV3.diabolic = $selectedV3.diabolic - $selectedV3[item.asset_type].diabolic + data.diabolic
      $selectedV3.ignis = $selectedV3.ignis - $selectedV3[item.asset_type].ignis + data.ignis
      $selectedV3.aqua = $selectedV3.aqua - $selectedV3[item.asset_type].aqua + data.aqua
      $selectedV3.aer = $selectedV3.aer - $selectedV3[item.asset_type].aer + data.aer
      $selectedV3.terra = $selectedV3.terra - $selectedV3[item.asset_type].terra + data.terra
      // const assetObj = {
      //   id: item.id,
      //   name: item.name,
      //   image: item.image,
      //   base_image: item.base_image,
      //   thumbnail_image: item.thumbnail_image,
      //   thumbnail_base_image: item.thumbnail_base_image,
      // }
      $selectedV3[item.asset_type] = data
      $selectedAsset[item.asset_type] = data

      // const assetList = assetImageList()
      // const baseImageList: Array<object> = assetBaseImageList(assetList)
      // const mergedImage = await merge(baseImageList)
      // $selectedV3.image = mergedImage
      // $v3ImageMergeLoading = false
    }
  }

  async function merge(imgData: Array<object>): Promise<string> {
    const b64 = await mergeImages(imgData, {
      Canvas: Canvas,
      Image: Image,
      width: 2500,
      height: 2500,
      crossOrigin: 'Anonymous',
    })
    // const base64Img: string = b64.split(',')[1]
    const base64Img: string = b64
    return base64Img
  }

  function assetBaseImageList(assetList: any): Array<object> {
    const baseImageList = []
    for (let i = 0; i < assetList.length; i++) {
      baseImageList.push({ src: assetList[i].base_image })
    }
    return baseImageList
  }

  function assetImageList() {
    const data = []
    for (let i = 0; i < assetMenuList.length; i++) {
      data.push($selectedV3[assetMenuList[i].type])
    }
    return data
  }
</script>

<div class="box">
  <div class="box-title">CxNxD Asset List</div>
  <div class="box-content">
    <div class="asset-type">
      {#each assetMenuList as item}
        <div
          class={selectedType === item.type ? 'type-title-actived' : 'type-title'}
          on:click={() => {
            selectedType = item.type
          }}
        >
          {item.type}
        </div>
      {/each}
    </div>
    <div class="asset-list">
      {#each $myAssetList as item}
        {#if item.asset_type === selectedType}
          <div class="asset-wrap">
            <div class="asset-frame">
              {#if $selectedAsset[item.asset_type].id === item.id}
                <div
                  class="asset-image"
                  style="cursor: auto; background-image: url({item.thumbnail_image});"
                >
                  <div class="equiped-text-wrap">
                    <div class="equip-text">equiped</div>
                  </div>
                </div>
              {:else}
                <div
                  class="asset-image"
                  style="background-image: url({item.thumbnail_image});"
                  on:click={() => select(item)}
                >
                  <div class="equip-text-wrap">
                    <div class="equip-text">is Equip?</div>
                  </div>
                </div>
              {/if}
              <div class="asset-title">
                {item.name.length > 30 ? item.name.substr(0, 30 - 2) + '...' : item.name}
              </div>
              <div class="asset-amount">x{item.balance}</div>
              <button class="normal-button">info</button>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .box-content {
    padding: 0px;
  }
  .asset-type {
    width: 15%;
  }

  .type-title {
    padding: 10px;
    border: 1px solid $inline-color;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .type-title:hover {
    background-color: $inline-color;
  }

  .type-title:active {
    background-color: $active-color;
  }

  .type-title-actived {
    padding: 10px;
    border: 1px solid $inline-color;
    box-sizing: border-box;
    background-color: $inline-color;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .asset-list::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .equip-text {
    user-select: none;
  }

  .asset-list {
    display: flex;
    width: 85%;
    max-height: 456px;
    padding: 20px;
    overflow: scroll;
    flex-wrap: wrap;
    box-sizing: border-box;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .asset-wrap {
      display: flex;
      flex-direction: column;
      height: fit-content;
      padding: 4.6px;
      box-sizing: border-box;
      .asset-frame {
        /* display: flex; */
        min-width: 20%;
        border: 1px solid $inline-color;
        box-sizing: border-box;
        min-width: 152px;
        min-height: 232px;
        /* max-height: 232px; */
        .normal-button {
          padding: 4px;
          width: 100%;
          border: none;
          border-top: 1px solid $inline-color;
          box-sizing: border-box;
        }
        .asset-title {
          font-size: 12px;
          max-width: 150px;
          height: 37px;
          padding: 6px;
          box-sizing: border-box;
        }
        .asset-amount {
          font-size: 10px;
          padding: 4px;
          box-sizing: border-box;
          text-align: end;
        }
        .asset-image {
          width: 150px;
          height: 150px;
          width: 100%;
          background-image: url('/images/asset-sample.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          .equip-text-wrap {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            .equip-text {
              display: none;
            }
          }
          .equiped-text-wrap {
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            .equip-text {
              display: block;
              opacity: 1;
            }
          }
        }

        .asset-image:hover {
          .equip-text-wrap {
            background-color: rgba(0, 0, 0, 0.8);
            .equip-text {
              display: block;
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
