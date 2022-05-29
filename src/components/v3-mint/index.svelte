<script lang="ts">
</script>

<div class="box">
  <div class="box-title">CxNxD Omega Clone Mint</div>
  <div class="box-content">
    <div class="box-sub-wrap">
      <div class="box-sub-text">My Klay: 100</div>
      <div class="box-sub-text">Today My mint available number: 9</div>
      <div class="box-sub-text">Today Total mint available number: 99</div>
      <input type="text" placeholder="Mint Amount" />
    </div>
    <button class="normal-button">Mint</button>
  </div>
</div>

<style lang="scss">
  .box {
    width: 60%;
    border: 1px solid $inline-color;
  }

  .box-title {
    border-bottom: 1px solid $inline-color;
  }

  .box-content {
    flex-direction: column;
    padding: 0px;
  }

  .box-sub-text {
    font-size: 18px;
    padding: 10px;
  }

  .box-sub-wrap {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  input {
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

  .normal-button {
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 20px;
    width: 100%;
    border: none;
    border-top: 1px solid $inline-color;
    box-sizing: border-box;
    font-family: 'Trajan Pro Bold';
  }
</style>
