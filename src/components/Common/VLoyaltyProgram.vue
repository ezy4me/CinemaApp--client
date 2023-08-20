<template>
  <div class="loyalty">
    <div class="loyalty__container container">
      <div class="loyalty__preview">
        <div
          @click="selectCard(card)"
          class="loyalty__card"
          v-for="(card, index) in cards"
          :key="index"
          :style="cardStyle(index, cards.length, card.color)">
          {{ card.id }}
        </div>
      </div>
      <div class="loyalty__content">
        <h3 class="loyalty__title title">Программа лояльности</h3>
        <div class="loyalty__desc desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam
          necessitatibus blanditiis molestiae porro dolorum excepturi aliquam
          officiis vitae omnis nam corrupti dolor vel ipsam nisi tempore,
          mollitia, unde labore. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquid perspiciatis esse saepe quaerat
          reprehenderit aliquam natus quisquam inventore at, hic ab soluta sequi
          ex cum et facere ea doloribus accusantium?
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
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
      bottom: `${4 * (index + 1)}rem`,
      left: `${4 * (index + 1)}rem`,
      zIndex: (length - (index + 1)).toString(),
      background: `rgba(${color.r}, ${color.g}, ${color.b})`,
    });

    return {
      cards,
      selectCard,
      cardStyle,
    };
  },
});
</script>
<style lang="scss">
.loyalty {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;

  &__container {
    display: flex;
    gap: 1rem;
  }

  &__preview {
    width: 50%;
    min-height: 500px;
    position: relative;
    border: 1px solid #eeeeee;
  }

  &__card {
    width: 400px;
    height: 250px;
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
  }

  &__desc {
  }
}
</style>
