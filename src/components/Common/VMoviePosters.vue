<template>
  <div class="movie-posters">
    <h1 class="title">Афиша</h1>
    <div class="movie-posters__content">
      <div :style="{background: `rgb(${randColor()})`}" class="poster" v-for="(poster, index) in 10" :key="index">
        {{ poster }}
      </div>
    </div>
    <a href="#" class="link">Больше</a>

  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    movies: {
      type: Array as any,
      default: () => [],
    },
  },
  setup() {
    const randColor = () => {
      const color = { r: 0, g: 0, b: 0 };
      color.r = Math.floor(Math.random() * 256);
      color.g = Math.floor(Math.random() * 256);
      color.b = Math.floor(Math.random() * 256);
      return color.r + ',' + color.g + ',' + color.b;
    };
    return {
      randColor,
    };
  },
});
</script>
<style lang="scss">
.movie-posters {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
  }
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
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }


}
</style>
