<template>
  <div class="w-screen h-screen relative text-[.9rem] overflow-x-hidden">
    <div ref="ani" class="fixed left-0 top-0 translate-x-[150%] z-[60]">
      <Ani class="!w-auto !h-screen" />
    </div>
    <div
      ref="sc1"
      class="!w-screen !h-screen flex justify-center items-center font-au text-[3rem] tracking-widest"
    >
      UNKUZ
    </div>
    <div ref="sc2" class="w-full mx-auto px-[20px] md:px-0 hidden">
      <Header />
      <div class="mx-auto sm:w-[700px]">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/Header.vue";

import { gsap } from "gsap";
import Ani from "~/svgs/ani.svg";

const ani = ref(null);
const sc1 = ref(null);
const sc2 = ref(null);

onMounted(() => {
  const tl = gsap.timeline({});
  const animation = () =>
    tl
      .set(ani.value, {
        translateX: "100%",
      })
      .set(sc1.value, {
        display: "flex",
      })
      .set(sc2.value, {
        display: "none",
      })
      .to(ani.value, {
        translateX: "0%",
        duration: 1,
        ease: "linear",
      })
      .set(sc1.value, {
        display: "none",
      })
      .set(sc2.value, {
        display: "block",
      })
      .to(ani.value, {
        translateX: "-100%",
        duration: 1,
        ease: "linear",
      });

  setTimeout(() => {
    animation();
  }, 3000);
});
</script>
