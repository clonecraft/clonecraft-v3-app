<script lang="ts">
</script>

<div class="box">
  <div class="box-title">CxNxD Omega Clone List</div>
  <div class="box-content">
    <div class="omega-wrap">
      <div class="omega-frame">
        <div class="omega-image">
          <div class="equip-text-wrap">
            <div class="equip-text">is Select?</div>
          </div>
        </div>
        <div class="omega-title">CxNxD Omega</div>
        <div class="omega-number">#2022</div>
      </div>
    </div>
    <div class="omega-wrap">
      <div class="omega-frame">
        <div class="omega-image">
          <div class="equip-text-wrap">
            <div class="equip-text">is Select?</div>
          </div>
        </div>
        <div class="omega-title">CxNxD Omega</div>
        <div class="omega-number">#2022</div>
      </div>
    </div>
    <div class="omega-wrap">
      <div class="omega-frame">
        <div class="omega-image">
          <div class="equip-text-wrap">
            <div class="equip-text">is Select?</div>
          </div>
        </div>
        <div class="omega-title">CxNxD Omega</div>
        <div class="omega-number">#2022</div>
      </div>
    </div>
    <div class="omega-wrap">
      <div class="omega-frame">
        <div class="omega-image">
          <div class="equip-text-wrap">
            <div class="equip-text">is Select?</div>
          </div>
        </div>
        <div class="omega-title">CxNxD Omega</div>
        <div class="omega-number">#2022</div>
      </div>
    </div>
    <div class="omega-wrap">
      <div class="omega-frame">
        <div class="omega-image">
          <div class="equip-text-wrap">
            <div class="equip-text">is Select?</div>
          </div>
        </div>
        <div class="omega-title">CxNxD Omega</div>
        <div class="omega-number">#2022</div>
      </div>
    </div>
    <div class="omega-wrap">
      <div class="omega-frame">
        <div class="omega-image">
          <div class="equip-text-wrap">
            <div class="equip-text">is Select?</div>
          </div>
        </div>
        <div class="omega-title">CxNxD Omega</div>
        <div class="omega-number">#2022</div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .box-content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .box-content {
    overflow: scroll;
    flex-wrap: wrap;
    max-height: 240px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .omega-wrap {
    min-width: 20%;
    padding: 6px;
    box-sizing: border-box;
    .omega-frame {
      border: 1px solid $inline-color;
      box-sizing: border-box;
      .omega-title {
        font-size: 12px;
        max-width: 178px;
        padding: 6px;
        box-sizing: border-box;
      }
      .omega-number {
        font-size: 12px;
        padding: 6px;
        box-sizing: border-box;
        text-align: end;
      }
      .omega-image {
        min-width: 178px;
        height: 178px;
        width: 100%;
        background-image: url('/images/clone-sample.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        box-sizing: border-box;
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
      .omega-image:hover {
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
</style>
