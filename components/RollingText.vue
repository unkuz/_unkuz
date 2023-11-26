<script lang="ts" setup>
import { gsap } from 'gsap';

defineProps<{
  text: string;
}>();

const el = ref<HTMLDivElement | null>(null);

const onHover = () => {
  console.log('el.value?.childNodes', el.value?.childNodes);
  el.value?.childNodes.forEach((i) => console.log(i.childNodes));

  el.value?.childNodes.forEach((i) => {
    if (i.nodeType !== 3) {
      gsap.to(i?.childNodes, {
        transform: 'translateY(-100%)',
        stagger: {
          each: 0.015,
        },
      });
    }
  });
};
const onLeave = () => {
  el.value?.childNodes.forEach((i) => {
    if (i.nodeType !== 3) {
      gsap.to(i?.childNodes, {
        transform: 'translateY(0%)',
        stagger: {
          each: 0.015,
          ease: 'cubic-bezier(0.76,0,0.24,1)',
        },
      });
    }
  });
};
</script>

<template>
  <div
    ref="el"
    @mouseover="onHover"
    @mouseleave="onLeave"
    class="h-[50px] cursor-pointer overflow-hidden [&__span]:text-[50px] [&__span]:leading-[50px]"
  >
    <div v-for="i in 2" :key="i" class="flex last:text-blue-400">
      <span
        v-for="(j, idx) in text.replaceAll(' ', '\xa0').split('')"
        class="inline-block"
        :key="idx"
      >
        {{ j }}
      </span>
    </div>
  </div>
</template>
