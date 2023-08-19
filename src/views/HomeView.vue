<template>
  <VSlider :data="headerImages" />
  <div class="home-view">
    <div class="home-view__container container">
      <h1 class="title">Афиша</h1>
      <div class="posters">
        <div class="poster" v-for="(poster, index) in 10" :key="index">
          {{ poster }}
        </div>
      </div>
      <div class="loyalty">
        <div class="loyalty__preview">
          <div
            @click="selectCard(card)"
            class="loyalty__card"
            v-for="(card, index) in cards"
            :key="index"
            :style="cardStyle(index, cards.length, card.color)">
            {{ card }}
          </div>
        </div>
        <div class="loyalty__content">
          <h3 class="loyalty__title">Программа лояльности</h3>
          <div class="loyalty__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam
            necessitatibus blanditiis molestiae porro dolorum excepturi aliquam
            officiis vitae omnis nam corrupti dolor vel ipsam nisi tempore,
            mollitia, unde labore.
          </div>
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

    const cards = reactive([
      { id: 1, title: "1", desc: "1", color: { r: 50, g: 20, b: 10 } },
      { id: 2, title: "2", desc: "2", color: { r: 100, g: 40, b: 20 } },
      { id: 3, title: "3", desc: "3", color: { r: 150, g: 60, b: 30 } },
    ]);

    const selectCard = (selectedCard: any) => {
      const index = cards.findIndex((card) => card.id === selectedCard.id);
      if (index !== -1) {
        const [removedCard] = cards.splice(index, 1);
        cards.unshift(removedCard);
      }
    };

    const cardStyle = (index: number, length: number, color: any) => ({
      bottom: `${4 * (index+1)}rem`,
      left: `${4 * (index+1)}rem`,
      zIndex: (length - (index+1)).toString(),
      background: `rgba(${color.r}, ${color.g}, ${color.b})`,
    });

    return { headerImages, cardStyle, cards, selectCard };
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

.posters {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
}
.poster {
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

.loyalty {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  height: 600px;

  &__preview {
    width: 50%;
    min-height: 500px;
    position: relative;
  }

  &__card {
    width: 500px;
    height: 350px;
    background: #cfcfcf;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 32px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 4rem;
  }

  &__desc {
  }
}
</style>
