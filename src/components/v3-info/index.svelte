<script lang="ts">
  import { selectedAsset, selectedV3, v3ImageMergeLoading } from '@/stores/index'
  import { Circle } from 'svelte-loading-spinners'

  import TransparentModal from '@/components/modal/transparent.svelte'
  import { onMount } from 'svelte'

  onMount(() => {
    $selectedV3 = {
      id: null,
    }
    $selectedAsset = {
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
    }
  })
</script>

<TransparentModal modalState={$v3ImageMergeLoading} />

<div class="box">
  <div class="box-title">CxNxD Omega Clone Info</div>
  {#if $selectedV3.id !== null}
    <div class="box-content">
      <div class="box-content-images">
        <div class="image-title">{$selectedV3.name}</div>
        <div class="clone-wrap">
          <div class="v3-image" style="background-image: url({$selectedV3.image});">
            {#if $v3ImageMergeLoading}
              <div class="loading">
                <Circle size="60" color="#ffffff" unit="px" duration="1s" />
              </div>
            {/if}
          </div>
          <div class="grade">
            <div class="grade-text">{$selectedV3.grade}</div>
            <div class="grade-title">Grade</div>
          </div>
        </div>
        <div class="asset-images">
          <div class="asset-image" style="background-image: url({$selectedV3.background.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.situation.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.weapon.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.body.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.tattoo.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.mouth.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.eyes.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.clothes.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.hat.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.accessory.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.mask.image});" />
          <div class="asset-image" style="background-image: url({$selectedV3.effect.image});" />
        </div>
      </div>
      <div class="box-content-status">
        <div class="box-content-title">type</div>
        <div class="type-item">
          <div class="type-title">{$selectedV3.type.name}</div>
        </div>
        <div class="line" />
        <div class="box-content-title">power level</div>
        <div class="type-item">
          <div class="type-title">{$selectedV3.power_level}</div>
        </div>
        <div class="line" />
        <div class="box-content-title">status</div>
        <div class="status-item">
          <div class="status-title">attack</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.attack}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.attack / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">defense</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.defense}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.defense / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">luck</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.luck}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.luck / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">speed</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.speed}</div>
              <div class="status-amount">60</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: {($selectedV3.speed / 60) * 100}%;" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">evade</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.evade}</div>
              <div class="status-amount">100</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: {($selectedV3.evade / 100) * 100}%;" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">hitrate</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.hitrate}</div>
              <div class="status-amount">100</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.hitrate / 100) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="line" />
        <div class="box-content-title">element</div>
        <div class="status-item">
          <div class="status-title">divine</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.divine}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.divine / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">diabolic</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.diabolic}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.diabolic / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">ignis</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.ignis}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.ignis / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">aqua</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.aqua}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.aqua / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">aer</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.aer}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: {($selectedV3.aer / 12000) * 100}%;" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">terra</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">{$selectedV3.terra}</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.terra / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="line" />
        <div class="box-content-title">skill</div>
        <div class="skill-wrap">
          <div class="skill" />
          <div class="skill" />
          <div class="skill" />
        </div>
      </div>
    </div>
    <div class="button-wrap">
      <div class="normal-button">Equip</div>
    </div>
  {:else}
    <div class="box-content" style="min-height: 554.976px;" />
  {/if}
</div>

<style lang="scss">
  .loading {
    width: 188px;
    height: 188px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100000;
  }
  .button-wrap {
    .normal-button {
      border: none;
      border-top: 1px solid $outline-color;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      font-size: 20px;
      font-family: 'Trajan Pro Bold';
    }
  }
  .box-content-images {
    width: 40%;
    display: flex;
    flex-direction: column;
    .clone-wrap {
      display: flex;
      .grade {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .grade-text {
          font-size: 40px;
          font-family: 'Trajan Pro Bold';
        }
        .grade-title {
          font-family: 'Trajan Pro Bold';
          font-size: 16px;
        }
      }
    }
    .image-title {
      font-family: 'Trajan Pro Bold';
      font-size: 24px;
      margin-bottom: 10px;
    }
    .v3-image {
      width: 188px;
      height: 188px;
      border: 1px solid $inline-color;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .asset-images {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 376px;
      flex-wrap: wrap;
      .asset-image {
        display: flex;
        flex-flow: wrap;
        flex-wrap: wrap;
        width: 25%;
        border: 1px solid $inline-color;
        box-sizing: border-box;
        width: 94px;
        height: 94px;
        background-color: #161514;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }

  .box-content-status::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .box-content-status {
    width: 60%;
    max-height: 500px;
    display: flex;
    overflow: scroll;
    flex-direction: column;
    margin-left: 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .type-item {
      display: flex;
      justify-content: center;
      .type-title {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }
    .skill-wrap {
      display: flex;
      .skill {
        width: 110px;
        height: 100px;
        margin-right: 10px;
        background-image: url('/images/skill-sample.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    .box-content-title {
      font-family: 'Trajan Pro Bold';
      font-size: 22px;
      margin-bottom: 10px;
    }
    .status-item {
      display: flex;
      margin-bottom: 15px;
      .status-title {
        width: 20%;
        display: flex;
        align-items: flex-end;
        color: $inline-color;
      }
      .status-content-wrap {
        width: 80%;
        .amount-wrap {
          display: flex;
          justify-content: space-between;
          .status-amount {
            font-size: 12px;
          }
        }
        .status-graph {
          display: flex;
          width: 100%;
          height: 15px;
          border: 1px solid $inline-color;
          box-sizing: border-box;
          .status-graph-amount {
            background-color: $text-color;
          }
        }
      }
    }
  }
</style>
