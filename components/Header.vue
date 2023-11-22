<script setup lang="ts">
import UnkuzLogo from "@/assets/svg/unkuz_logo.svg";

const route = useRoute();
console.log("Rout", route);
</script>

<template>
  <header class="w-full flex justify-between items-center">
    <div title="Unkuz" class="flex items-center gap-[10px] font-au">
      <NuxtLink to="/">
        <UnkuzLogo
          class="!fill-transparent [&>path]:!fill-transparent !w-[30px] !h-[30px] hover:cursor-pointer hover:rotate-[180deg] duration-300"
        />
      </NuxtLink>
    </div>
    <div class="flex gap-[20px] [&>div]:hover:cursor-pointer">
      <NuxtLink to="/work">
        <div class="">_WORK</div>
      </NuxtLink>
      <NuxtLink to="/about">
        <div>_ABOUT</div>
      </NuxtLink>
      <NuxtLink to="/contact">
        <div>_CONTACT</div>
      </NuxtLink>
    </div>
  </header>
</template>
