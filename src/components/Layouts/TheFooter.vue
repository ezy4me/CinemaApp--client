<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <h1 class="title">Cinema</h1>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
.footer {
  width: 100%;
  padding: 4rem;
  background: #1c1c1c;

  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
