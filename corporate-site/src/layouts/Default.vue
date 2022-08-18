<template>
  <div class="layout">
    <header class="header">
<!--        <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
      <nav class="nav">
        <div class="navbar_top">
          <div>
            <g-link class="nav__link" to="/onlineShop/"> Online Shop</g-link>
            <g-link class="nav__link" to="/magazin/"> Magazin</g-link> 
          </div>
          <div class="lang_select">
            <locale-switcher></locale-switcher>
            <!-- <g-link to="/magazin/"> DE</g-link>
            <g-link to="/magazin/"> EN</g-link>
            <g-link to="/magazin/"> FR</g-link> -->
          </div>
        </div>
        <!-- <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link> -->
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
export default {
  components: {
    LocaleSwitcher,
  },
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.nav {
  width: max-content;
  position: sticky;
  top: 0px;
  display: flex;
  font-size: small;
}

.navbar_top{
  width: max-content;
  position: sticky;
  display: flex;
  font-size: small;
}

.navbar_bottom{
  position: relative;
  font-size: small;
  height: 30px;
}

.logo {
  position: relative;
  left: 10px;
}

.lang_select {
  position: relative;
  left: 30%;
}

</style>
