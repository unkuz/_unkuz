<script setup lang="ts">
import TextRolling from '@/components/TextRolling.vue';
import { navigation } from '@/config/app';

const route = useRoute();
const globalS = uGlobalS();

const magicName = (selectedPath: string, routePath: string, name: string) =>
  _isEqual(selectedPath, routePath) ? '>' + name : name;
</script>

<template>
  <header
    class="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-[#fdfdfd0e] px-[20px] backdrop-blur-[5px] dark:bg-black sm:px-[100px] sm:pt-[50px]"
  >
    <div
      title="Unkuz"
      class="flex items-center gap-[10px] py-[20px] font-au sm:py-0"
    >
      <NuxtLink to="/" replace>
        <NuxtImg
          :src="'/icon-144x144.png'"
          class="!mb-0 !h-auto !w-[35px] dark:invert [&>path]:!fill-none"
        />
      </NuxtLink>
    </div>
    <div class="flex gap-[20px] [&>div]:hover:cursor-pointer">
      <NightMode @click="globalS.toggleDarkMode" />
      <NuxtLink
        v-for="(i, idx) in navigation"
        :to="i.path"
        :key="idx"
        class="last:md:block"
        replace
      >
        <div
          :class="[
            ' uppercase',
            {
              'text-[#34d0ff]': route.path === i.path,
            },
          ]"
        >
          <TextRolling :text="magicName(route.path, i.path, i.name)" />
        </div>
      </NuxtLink>
    </div>
  </header>
</template>
