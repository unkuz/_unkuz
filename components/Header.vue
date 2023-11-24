<script setup lang="ts">
const route = useRoute();

const nav = [
  {
    name: "_work",
    path: "/work",
  },
  {
    name: "_about",
    path: "/about",
  },
  {
    name: "_contact",
    path: "/contact",
  },
];
</script>

<template>
  <header
    class="w-full  flex justify-between items-center fixed  sm:pt-[50px] top-0 left-0 sm:px-[100px] px-[20px] z-10 bg-[#fdfdfd3b] backdrop-blur-[10px] "
  >
    <div
      title="Unkuz"
      class="flex items-center gap-[10px] font-au py-[20px] sm:py-0"
    >
      <NuxtLink to="/">
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
      <NuxtLink v-for="(i, idx) in nav" :to="i.path" :key="idx">
        <div
          :class="[
            ' uppercase',
            {
              'text-[#34d0ff]': route.path === i.path,
            },
          ]"
        >
          {{ i.name }}
        </div>
      </NuxtLink>
    </div>
  </header>
</template>
