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
    <button class="prev-btn" @click="prevSlide"></button>
    <button class="next-btn" @click="nextSlide"></button>
    <div class="pagination">
      <div
        @click="choosePage(index)"
        v-for="index in loopedData"
        :key="index"
        class="page"
        :style="{ opacity: index.id === activeIndex ? 1 : 0.5 }"></div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { ref, defineComponent, toRefs, onMounted, onBeforeUnmount } from "vue";

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
    let interval: any;

    function getImageUrl(source: string) {
      return new URL(source, import.meta.url).href;
    }

    const prevSlide = () => {
      if (activeIndex.value == 0) {
        activeIndex.value = loopedData.length;
      }
      activeIndex.value = Math.max(activeIndex.value - 1, 0);
    };

    const nextSlide = () => {
      activeIndex.value = (activeIndex.value + 1) % loopedData.length;
    };

    const loopedData = [...data.value];

    const choosePage = (index: any) => {
      return (activeIndex.value = index.id);
    };

    onMounted(() => {
      interval = setInterval(nextSlide, 3000);
    });

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return {
      prevSlide,
      nextSlide,
      position,
      getImageUrl,
      activeIndex,
      loopedData,
      choosePage,
    };
  },
});
</script>

<style lang="scss" scoped>
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
  padding: 1.5rem;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: invert(100%);
}

.prev-btn {
  left: -2rem;
  background-image: url("../../../public/images/left-arrow.png");
}

.next-btn {
  right: -2rem;
  background-image: url("../../../public/images/right-arrow.png");
}

.slide {
  width: 100%;
}

.slide-inner {
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slider:hover .prev-btn {
  left: 2rem;
  opacity: 1;
}

.slider:hover .next-btn {
  right: 2rem;
  opacity: 1;
}

.pagination {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
}

.page {
  width: 1rem;
  height: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
