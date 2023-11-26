<script lang="ts" setup>
import Header from '@/components/Header.vue';
import { gsap } from 'gsap';
import Ani from '@/assets/svg/ani.svg';

const ani = ref<HTMLDivElement | null>(null);
const pre = ref<HTMLDivElement | null>(null);
const main = ref<HTMLDivElement | null>(null);

const { isMobile } = useDevice();

onMounted(() => {
  if (isMobile) {
    setTimeout(() => {
      gsap.set(pre.value, {
        display: 'none',
      });
      gsap.set(main.value, {
        display: 'block',
      });
    }, 1000);
    return;
  }
  const tl = gsap.timeline({});
  const animation = () =>
    tl
      .set(ani.value, {
        translateX: '100%',
      })
      .set(pre.value, {
        display: 'flex',
      })
      .set(main.value, {
        display: 'none',
      })
      .to(ani.value, {
        translateX: '0%',
        duration: 0.5,
        ease: 'linear',
      })
      .set(pre.value, {
        display: 'none',
      })
      .set(main.value, {
        display: 'block',
      })
      .to(ani.value, {
        translateX: '-100%',
        duration: 0.5,
        ease: 'linear',
      });

  setTimeout(() => {
    animation();
  }, 1000);
});
</script>

<template>
  <div class="relative text-[.9rem] dark:bg-black dark:text-white">
    <div ref="ani" class="fixed left-0 top-0 z-[60] translate-x-[150%]">
      <Ani filled class="!h-screen !w-auto dark:[&_path]:fill-white" />
    </div>
    <div
      ref="pre"
      class="flex !h-screen !w-screen select-none items-center justify-center font-au text-[2.5rem] tracking-widest"
    >
      UNKUZ
    </div>
    <div ref="main" class="mx-auto hidden w-full px-[20px] md:px-0">
      <Header />
      <div class="mx-auto sm:w-[700px]">
        <slot />
      </div>
    </div>
  </div>
</template>
