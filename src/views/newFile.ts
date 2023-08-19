import { defineComponent, reactive } from "vue";

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

const cards = ref([
{ id: 1, title: "1", desc: "1", color: { r: 50, g: 20, b: 10 } },
{ id: 2, title: "2", desc: "2", color: { r: 100, g: 40, b: 20 } },
{ id: 3, title: "3", desc: "3", color: { r: 150, g: 60, b: 30 } },
]);

const selectCard = (selectedCard: any) => {
const index = cards.value.findIndex((card) => card.id === selectedCard.id);
if (index !== -1) {
const tempCard = { ...cards.value[index] };
cards.value.splice(index, 1);
cards.value.unshift(tempCard);
cards.value = [...cards.value]; // Принудительно обновляем массив
}
};

const cardStyle = (index: number, length: number, color: any) => ({
bottom: `${4 * (index)}rem`,
left: `${4 * (index)}rem`,
zIndex: (length - (index)).toString(),
background: `rgba(${color.r * index}, ${color.g * index}, ${color.b * index})`,
});

return { headerImages, cardStyle, cards, selectCard };
},
components: { VSlider },
});
