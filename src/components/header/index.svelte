<script lang="ts">
</script>

<div class="header">
  <div class="header-logo">
    <a href="/#/" class="header-logo-link">
      <img src="/images/logo.jpg" alt="logo" class="header-logo-img" />
      <div class="header-logo-title">Clones Never Die</div>
    </a>
  </div>
  <div class="header-menu">
    <button class="normal-button">Wallet Connect</button>
  </div>
</div>

<!-- <div class="header-dummy" /> -->

<style lang="scss">
  .header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 60px;
    border-bottom: 2px solid #616039;
    background-color: black;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  /* .header-dummy {
    height: 60px;
  } */

  .header-logo-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .header-logo-img {
    width: 50px;
    height: 50px;
  }

  .header-logo-title {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    font-family: 'Trajan Pro Bold';
    line-height: 28px;
    color: $text-color;
  }

  @media screen and (max-width: 1000px) {
    .normal-button {
      display: none;
    }
  }
</style>
