<template>
  <VSlider :data="headerImages" />
  <div class="home-view">
    <div class="home-view__container">
      <VMoviePosters />
      <VLoyaltyProgram />
      <VCinemaHalls />
      <VInformationBlock />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import VCinemaHalls from "~/components/Common/VCinemaHalls.vue";
import VLoyaltyProgram from "~/components/Common/VLoyaltyProgram.vue";
import VMoviePosters from "~/components/Common/VMoviePosters.vue";
import VInformationBlock from "~/components/Common/VInformationBlock.vue";
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
  components: {
    VSlider,
    VMoviePosters,
    VLoyaltyProgram,
    VCinemaHalls,
    VInformationBlock,
  },
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
</style>
