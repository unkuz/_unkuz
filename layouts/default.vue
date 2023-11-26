<script lang="ts" setup>
import Header from "@/components/Header.vue";
import { gsap } from "gsap";
import Ani from "~/svgs/ani.svg";

const { isMobile } = useDevice();

const ani = ref(null);
const sc1 = ref(null);
const sc2 = ref(null);

onMounted(() => {
  if (isMobile) {
    gsap.set(sc1.value, {
      display: "none",
    });
    gsap.set(sc2.value, {
      display: "block",
    });
    return;
  }
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
        duration: 0.5,
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
        duration: 0.5,
        ease: "linear",
      });

  setTimeout(() => {
    animation();
  }, 1000);
});
</script>

<template>
  <div
    class="w-screen relative text-[.9rem] overflow-x-hidden dark:bg-black dark:text-white duration-500"
  >
    <div ref="ani" class="fixed left-0 top-0 translate-x-[150%] z-[60]">
      <Ani filled class="!w-auto !h-screen dark:[&_path]:fill-white" />
    </div>
    <div
      ref="sc1"
      class="!w-screen !h-screen flex justify-center items-center font-au text-[2.5rem] tracking-widest select-none"
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
