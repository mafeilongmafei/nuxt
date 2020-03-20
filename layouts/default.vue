<template>
  <div>
    <nuxt />
    <div class="footer">
      <Footer class="__footer" />
    </div>
  </div>
</template>
<script>
import Footer from "~/components/footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style>
.footer {
  width: 100%;
}
.__footer {
  width: 1209px;
  margin: 0 auto;
}
</style>
