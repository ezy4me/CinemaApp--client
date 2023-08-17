<template>
  <div class="slider">
    <div class="slides" :style="{ transform: `translateX(${position}%)` }">
      <div class="slide" v-for="(image, index) in loopedData" :key="index">
        <div
          class="slide-inner"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgb(36, 36, 36, 1)), url(${getImageUrl(
              image.source
            )})`,
            display: index === activeIndex ? 'block' : 'none',
          }"></div>
      </div>
    </div>
    <button class="prev-btn" @click="prevSlide">Previous</button>
    <button class="next-btn" @click="nextSlide">Next</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Array as any,
      default: () => [],
    },
  },
  setup(props) {
    const { data } = toRefs(props);
    const position = ref(0);
    const activeIndex = ref(0);

    function getImageUrl(source: string) {
      return new URL(source, import.meta.url).href;
    }

    const prevSlide = () => {
      activeIndex.value = Math.max(activeIndex.value - 1, 0);
    };

    const nextSlide = () => {
      activeIndex.value = (activeIndex.value + 1) % loopedData.length;
    };

    const loopedData = [...data.value];

    return {
      prevSlide,
      nextSlide,
      position,
      getImageUrl,
      activeIndex,
      loopedData,
    };
  },
});
</script>

<style>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slides {
  width: 100%;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

.slide {
  width: 100%;
  transition: background-image 1s ease-in-out;
}

.slide-inner {
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
