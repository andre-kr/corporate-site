<template>
  <div class="layout">
    <header class="header">
    <!--     <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
      <nav class="nav">
        <div class="navbar_top">
          <div class="left">
            <g-link class="nav__link" to="/onlineShop/"> Online Shop</g-link>
            <g-link class="nav__link" to="/magazin/"> Magazin</g-link> 
          </div>
          <div class="lang_select">
            <locale-switcher></locale-switcher>
          </div>
        </div>
        <!-- <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link> -->
      </nav>
    </header>
    <slot/>
    <footer class="footer">
        <div class="footer_top">
          <g-image src="~/images/thinking_man.png" id="image_man"></g-image>
          <p id="txt_questions">
            <b>Sie haben noch Fragen?</b><br />
            Wir sind gerne für Sie da und beantworten alle Ihre Fragen!
          </p>
          <button id="btn_contact">Zum Kontaktformular</button>
        </div>
        <div class="footer_center">
          <div class="Company">
              <dl>
                  <dt><b>{{ $t('company') }}</b></dt>
                  <dt>Unternehmensprofil</dt>
                  <dt>Geschichte</dt>
                  <dt>Unternehmenskultur</dt>
                  <dt>Unternehmensstrategie</dt>
                  <dt>Unsere Standorte</dt>
                  <dt>Social Media</dt>
                  <dt>Neuigkeiten</dt>
              </dl>
          </div>
          <div class="Partner">
              <dl>
                  <dt><b>Partner</b></dt>
                  <dt>Industriepartner</dt>
                  <dt>Großhandelspartner</dt>
              </dl>
            
          </div>
          <div class="Career">
              <dl>
                  <dt><b>Karriere</b></dt>
                  <dt>Überblick</dt>
                  <dt>Job-Portal</dt>
                  <dt>Arbeitsleben</dt>
                  <dt>Kontakt</dt>
              </dl>
            
          </div>
          <div class="Bricofloor">
              <dl>
                  <dt><b>Unternehmen</b></dt>
                  <dt>Unternehmensprofil</dt>
                  <dt>Geschichte</dt>
              </dl>
            
          </div>
        </div>
        <div class="footer_bottom">
          <div>(c) 2022 BRICOFLOR GmbH</div>
        </div>
    </footer>
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

.footer_bottom{
  background-color: blue;
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: right;
}

.footer_top{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
}

.footer_center{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
}

.footer{
  position: relative;
}

#image_man {
  width: 100px;
  height: 100px;
}

#btn_contact {
  height: 40px;
  background-color: chocolate;
}

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

.left {
  display: inline-block;
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
  float: right;
}

</style>
