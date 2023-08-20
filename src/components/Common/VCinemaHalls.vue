<template>
  <div class="cinema-halls">
    <div class="cinema-halls__container container">
      <div class="cinema-halls__content">
        <div class="cinema-hall" v-for="(hall, index) in halls" :key="index">
          <div class="cinema-hall__image"></div>
          <div class="cinema-hall__title">{{ hall.title }}</div>
          <div class="cinema-hall__desc desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            dicta minus veritatis consequatur mollitia quo soluta, culpa odit
            aperiam error, esse, nobis numquam sed natus provident
            necessitatibus ipsum! Dolores, optio?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const halls = reactive([
      { id: 1, title: "Cinema 2D", desc: "description 1" },
      { id: 2, title: "Cinema 3D", desc: "description 2" },
      { id: 3, title: "Cinema VIP", desc: "description 3" },
    ]);

    return {
      halls,
    };
  },
});
</script>
<style lang="scss">
.cinema-halls {
  padding: 4rem 0;
  &__container {
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}

.cinema-hall {
  background: #eeeeee;
  border-radius: 1rem;
  padding: 2rem;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  &__image {
    width: 400px;
    height: 300px;
    background: #5dbbf1;
    border-radius: 1rem;
  }

  &__title {
    font-size: 24px;
  }

  &__desc {
  }
}
</style>
