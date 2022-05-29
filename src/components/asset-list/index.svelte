<script lang="ts">
</script>

<div class="box">
  <div class="box-title">CxNxD Asset List</div>
  <div class="box-content">
    <div class="asset-type">
      <div class="type-title">Head</div>
      <div class="type-title">Background</div>
      <div class="type-title">Situation</div>
      <div class="type-title">Head</div>
      <div class="type-title">Background</div>
      <div class="type-title">Situation</div>
      <div class="type-title">Head</div>
      <div class="type-title">Background</div>
      <div class="type-title">Situation</div>
      <div class="type-title">Head</div>
      <div class="type-title">Background</div>
      <div class="type-title-actived">Situation</div>
    </div>
    <div class="asset-list">
      <div class="asset-wrap">
        <div class="asset-frame">
          <div class="asset-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Equip?</div>
            </div>
          </div>
          <div class="asset-title">Asset: asdasdasdasdasd</div>
          <div class="asset-amount">x3</div>
          <button class="normal-button">info</button>
        </div>
      </div>
      <div class="asset-wrap">
        <div class="asset-frame">
          <div class="asset-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Equip?</div>
            </div>
          </div>
          <div class="asset-title">Asset: asdasdasdasdasd</div>
          <div class="asset-amount">x3</div>
          <button class="normal-button">info</button>
        </div>
      </div>
      <div class="asset-wrap">
        <div class="asset-frame">
          <div class="asset-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Equip?</div>
            </div>
          </div>
          <div class="asset-title">Asset: asdasdasdasdasd</div>
          <div class="asset-amount">x3</div>
          <button class="normal-button">info</button>
        </div>
      </div>
      <div class="asset-wrap">
        <div class="asset-frame">
          <div class="asset-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Equip?</div>
            </div>
          </div>
          <div class="asset-title">Asset: asdasdasdasdasd</div>
          <div class="asset-amount">x3</div>
          <button class="normal-button">info</button>
        </div>
      </div>
      <div class="asset-wrap">
        <div class="asset-frame">
          <div class="asset-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Equip?</div>
            </div>
          </div>
          <div class="asset-title">Asset: asdasdasdasdasd</div>
          <div class="asset-amount">x3</div>
          <button class="normal-button">info</button>
        </div>
      </div>
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
      padding: 5px;
      box-sizing: border-box;
      .asset-frame {
        /* display: flex; */
        min-width: 20%;
        border: 1px solid $inline-color;
        box-sizing: border-box;
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
