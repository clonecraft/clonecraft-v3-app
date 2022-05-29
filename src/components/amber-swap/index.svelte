<script lang="ts">
</script>

<div class="box">
  <div class="box-title">amber swap</div>
  <div class="box-content">
    <div class="button-wrap">
      <button class="normal-button">Nectar-MiX &lt-&gt Amber</button>
      <button class="normal-button">Klay &lt-&gt Amber</button>
    </div>
    <div class="button-wrap">
      <button class="normal-button" style="width: 100%; font-size: 16px;">Switch</button>
    </div>
    <div class="box-sub-wrap">
      <div class="form-wrap">
        <div class="token-name">Nectar</div>
        <input type="text" placeholder="Mint Amount" />
      </div>
      <div class="form-wrap">
        <div class="token-name">Mix</div>
        <input type="text" placeholder="Mint Amount" />
      </div>
      <div class="line" />
      <div class="form-wrap">
        <div class="token-name">Estimated Amber</div>
        <input type="text" placeholder="Mint Amount" />
      </div>
    </div>
    <div class="button-wrap">
      <button class="normal-button" style="width: 100%; font-size: 22px;">Swap</button>
    </div>
  </div>
</div>

<style lang="scss">
  .box {
    width: 60%;
  }
  .box-content {
    padding: 0px;
    flex-direction: column;
  }
  .button-wrap {
    display: flex;
    .normal-button {
      font-size: 14px;
      width: 50%;
    }
  }
  .box-sub-wrap {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .form-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .token-name {
      font-size: 18px;
      width: 20%;
    }
    input {
      width: 80%;
      padding: 10px;
      margin: 10px;
      border: 1px solid $inline-color;
      height: 30px;
      font-size: 18px;
      background: none;
      background-color: rgba(0, 0, 0, 0.65);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: $text-color;
    }
  }
</style>
