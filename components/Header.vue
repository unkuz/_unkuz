<script setup lang="ts">
import UnkuzLogo from "@/assets/svg/unkuz_logo.svg";

const route = useRoute();
console.log("Rout", route);
</script>

<template>
  <header class="w-full flex justify-between items-center sticky">
    <div title="Unkuz" class="flex items-center gap-[10px] font-au">
      <NuxtLink to="/">
        <UnkuzLogo
          :class="[
            '!fill-transparent [&>path]:!fill-transparent !w-[30px] !h-[30px] hover:cursor-pointer hover:rotate-[180deg] duration-300',
            {
              '[&>path]:stroke-[#34d0ff]': route.path === '/',
            },
          ]"
        />
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
          _WORK
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
          _ABOUT
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
          _CONTACT
        </div>
      </NuxtLink>
    </div>
  </header>
</template>
