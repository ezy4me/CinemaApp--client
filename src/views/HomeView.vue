<template>
  <VSlider :data="headerImages" />
  <div class="home-view">
    <div class="home-view__container container">
      <h1 class="title">Афиша</h1>
        <div class="cards">
        <div class="card" v-for="(card, index) in 10" :key="index">
            {{ card }}
        </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import VSlider from "~/components/Common/VSlider.vue";
export default defineComponent({
  setup() {
    const headerImages = reactive([
      {
        id: 0,
        title: "slide 1",
        source: "../../../public/images/header-slide-1.jpg",
      },
      {
        id: 1,
        title: "slide 2",
        source: "../../../public/images/header-slide-2.jpg",
      },
      {
        id: 2,
        title: "slide 3",
        source: "../../../public/images/header-slide-3.jpg",
      },
    ]);

    return { headerImages };
  },
  components: { VSlider },
});
</script>
<style lang="scss" scoped>
.home-view {
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}


.cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
}
.card {
    border: 1px solid #ececec;
    border-radius: 1rem;
    background: #cfcfcf;
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: black;
}
</style>
