<script setup lang="ts">
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
        display: "flex",
      })
      .to(ani.value, {
        translateX: "-100%",
        duration: 1,
        ease: "linear",
      });

  animation();
});
</script>

<template>
  <div class="flex w-screen h-screen overflow-hidden">
    <div ref="ani" class="fixed left-0 translate-x-[150%]">
      <Ani class="!w-auto !h-screen" />
    </div>
    <div
      ref="sc1"
      class="!w-screen !h-screen flex justify-center items-center font-au text-[2rem] tracking-widest"
    >
      UNKUZ
    </div>

    <div
      ref="sc2"
      class="!w-screen !h-screen font-cuz uppercase justify-center items-center hidden font-bold tracking-tight"
    >
      _This site is under development
    </div>
  </div>
</template>
