<template>
  <header class="header">
    <div class="header__top container">
      <div class="header__actions">
        <div class="logo">CINEMA</div>
        <input class="search-bar" placeholder="Поиск..." />
        <div>Личный кабинет</div>
      </div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">Кинотеатры</li>
          <li class="nav__item">Фильмы</li>
          <li class="nav__item">Детям</li>
          <li class="nav__item">Жанры</li>
          <li class="nav__item">Акции</li>
        </ul>
      </nav>
    </div>
    <VSlider :data="headerImages" />
  </header>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import VSlider from "../Common/VSlider.vue";
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
