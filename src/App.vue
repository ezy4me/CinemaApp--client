<template>
  <TheHeader />
  <main style="margin-top: 6.3rem;">
    <router-view />
  </main>
  <TheFooter />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/Layouts/TheHeader.vue";
import TheFooter from "./components/Layouts/TheFooter.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { TheHeader, TheFooter },
});
</script>
