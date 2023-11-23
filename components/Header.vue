<script setup lang="ts">
import UnkuzLogo from "@/assets/svg/unkuz_logo.svg";

const route = useRoute();
</script>

<template>
  <header
    class="w-full flex justify-between items-center fixed sm:top-[50px] top-0 left-0 sm:px-[100px] px-[20px] z-10 bg-[#fdfdfdb2] backdrop-blur-[10px]"
  >
    <div
      title="Unkuz"
      class="flex items-center gap-[10px] font-au py-[20px] sm:py-0"
    >
      <NuxtLink to="/">
        <!-- <UnkuzLogo
          :class="[
            '!fill-transparent [&>path]:!fill-transparent !w-[35px] !h-[35px] hover:cursor-pointer hover:rotate-[180deg] duration-300',
            {
              '[&>path]:stroke-[#34d0ff]': route.path === '/',
            },
          ]"
        /> -->
        <div
          :class="[
            'text-[1.5rem] tracking-widest',
            {
              'text-[#34d0ff]': route.path === '/',
            },
          ]"
        >
          UNKUZ
        </div>
      </NuxtLink>
    </div>
    <div class="flex gap-[20px] [&>div]:hover:cursor-pointer">
      <NuxtLink to="/work">
        <div
          :class="[
            {
              'text-[#34d0ff]': route.path === '/work',
            },
          ]"
        >
          WORK
        </div>
      </NuxtLink>
      <NuxtLink to="/about">
        <div
          :class="[
            {
              'text-[#34d0ff]': route.path === '/about',
            },
          ]"
        >
          ABOUT
        </div>
      </NuxtLink>
      <NuxtLink to="/contact">
        <div
          :class="[
            {
              'text-[#34d0ff]': route.path === '/contact',
            },
          ]"
        >
          CONTACT
        </div>
      </NuxtLink>
    </div>
  </header>
</template>
