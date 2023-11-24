<script lang="ts" setup>
import { gsap } from "gsap";

defineProps<{
  text: string;
}>();

const elRef = ref<HTMLDivElement | null>(null);
const speed = 0.015;

const onHover = () => {
  elRef.value?.childNodes.forEach((i) => {
    console.log("i?.childNodes",i?.childNodes);
    i?.childNodes && gsap.to(i?.childNodes, {
      transform: "translateY(-100%)",
      stagger: {
        each: 0.015,
      },
    });
  });
};
const onLeave = () => {
  elRef.value?.childNodes.forEach((i) => {
    i?.childNodes && gsap.to(i?.childNodes, {
      transform: "translateY(0%)",
      stagger: {
        each: 0.015,
        ease: "cubic-bezier(0.76,0,0.24,1)",
      },
    });
  });
};
</script>

<template>
  <div
    ref="elRef"
    @mouseover="onHover"
    @mouseleave="onLeave"
    class="h-[50px] [&__span]:text-[50px] [&__span]:leading-[50px] overflow-hidden cursor-pointer"
  >
    <div v-for="i in 2" :key="i" class="last:text-blue-400 flex">
      <span
        v-for="(j, idx) in text.replaceAll(' ', '\xa0').split('')"
        className="inline-block"
        :key="idx"
      >
        {{ j }}
      </span>
    </div>
  </div>
</template>
