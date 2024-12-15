<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";
import Header from "@/components/Header.vue";
import { gsap } from "gsap";
import Ani from "@/assets/svg/ani.svg";
import { uGlobalS } from "~/stores/global";

const ani = ref<HTMLDivElement | null>(null);
const pre = ref<HTMLDivElement | null>(null);
const main = ref<HTMLDivElement | null>(null);

const { appReady } = storeToRefs(uGlobalS());
const globalS = uGlobalS();

const route = useRoute();
console.log("object, route");

const { isMobile } = useDevice();

watch(appReady, async (val) => {
  if (val) {
    if (isMobile) {
      setTimeout(() => {
        gsap.set(pre.value, {
          display: "none",
        });
        gsap.set(main.value, {
          display: "block",
        });
      }, 3_000);
      return;
    }

    const tl = gsap.timeline({});

    setTimeout(() => {
      tl.set(ani.value, {
        translateX: "100%",
      })
        .set(pre.value, {
          display: "flex",
        })
        .set(main.value, {
          display: "none",
        })
        .to(ani.value, {
          translateX: "0%",
          duration: 0.5,
          ease: "linear",
        })
        .set(pre.value, {
          display: "none",
        })
        .set(main.value, {
          display: "block",
        })
        .to(ani.value, {
          translateX: "-100%",
          duration: 0.5,
          ease: "linear",
        });
    }, 2_500);
  }
});

const otherPage = computed(() =>
  ["/linhxinhgai", "/linhxinhgai/"].includes(route.fullPath)
);
</script>

<template>
  <div
    :class="[
      'relative text-[.9rem] dark:bg-black dark:text-white',
      {
        '!bg-[floralwhite]': otherPage,
      },
    ]"
  >
    <SpeedInsights />
    <div ref="ani" class="fixed left-0 top-0 z-[60] translate-x-[150%]">
      <Ani filled class="!h-screen !w-auto dark:[&_path]:fill-white" />
    </div>
    <div
      ref="pre"
      class="flex !h-screen !w-screen select-none items-center justify-center font-au text-[2.5rem] tracking-widest"
    >
      {{ otherPage ? "CHOI OI" : "UNKUZ" }}
    </div>
    <div ref="main" class="mx-auto hidden w-full px-[20px] md:px-0">
      <Header v-if="!otherPage" />
      <div class="mx-auto sm:w-[620px] lg:w-[900px]">
        <slot />
      </div>
      <div
        class="fixed bottom-[20px] right-1/2 translate-x-1/2 sm:bottom-[50px]"
      >
        <Miracle v-if="!otherPage" />
      </div>
    </div>
  </div>
</template>
