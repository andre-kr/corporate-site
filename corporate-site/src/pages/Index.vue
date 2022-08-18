<template>
  <Layout>
    <body>
      <div class="img_container">
          <g-image class="image_left" src="~/images/main.png"></g-image>
        <div class="img_right">
            <g-image class="image_right" src="~/images/history.png"></g-image>
            <g-image class="image_right" src="~/images/culture.png"></g-image>
            <g-image class="image_right" src="~/images/strategy.png"></g-image>
        </div>
      </div>
      
      <span>
        {{ $t('teststring') }}
      </span>
    </body>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Bricoflor'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.img_container {
  width: 100%;
}

.image_left {
  width: 65%;
  height: 95%;
  float: left;
  margin:3% 3%;
}

.imgage_right {
  width: 30%;
  height: 30%;
  float: right;
  margin:3% 3%;
}


</style>
