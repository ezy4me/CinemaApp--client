<template>
  <div class="information">
    <div class="information__container container">
      <div class="information__content">
        <div class="information__title title">TITLE</div>
        <div class="information__desc desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          veritatis praesentium consequatur. Iste placeat quaerat sit, culpa
          magni nostrum reiciendis veniam accusamus voluptatibus magnam. Nam
          eveniet necessitatibus ad nostrum alias.loren Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nihil quidem, maiores harum
          expedita rem eaque voluptatibus voluptates tempora? Ipsam dolorem nisi
          rerum temporibus ad eius assumenda sint, omnis asperiores nostrum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
          eveniet nostrum nemo quia earum excepturi sint expedita. Eum,
          distinctio? Tenetur accusantium, animi sapiente modi numquam expedita
          aliquam ipsa voluptates!
        </div>
      </div>
      <div class="information__image"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="scss">
.information {
  padding: 4rem 0;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  &__image {
    width: 600px;
    height: 400px;
    background: #8650eb;
  }

  &__content {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &__title {
  }

  &__desc {
  }
}
</style>
