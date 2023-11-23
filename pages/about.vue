<template>
  <div
    class="w-full flex justify-center flex-col items-center py-[100px] gap-[20px]"
  >
    <h1 class="text-[1rem]">About</h1>
    <NuxtImg src="/unkuz.jpeg" class="w-[350px] object-cover" />
    <div class="indent-8">
      A passionate Web developer with 2+ years of experience working in building
      website. Proficient in HTML, CSS, JavaScript, TypeScript: plus modern
      libraries and frameworks. Well-versed in requirements aith an in-depth
      knowledge. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
      amet consectetur hic magnam modi provident. Perferendis deserunt soluta
      quod numquam modi itaque, quas autem provident perspiciatis iure enim.
      Exercitationem, illo. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Sed impedit laudantium eveniet maxime mollitia atque officiis
      sapiente consequatur vel, facilis ex tempore, quos error adipisci dolores
      provident aut, voluptatem dolor.
    </div>
  </div>
</template>

<script setup lang="ts">
import Unkuz from "@/assets/image/unkuz.jpeg";
useHead({
  title: "Unkuz | About Page",
});
</script>

<style scoped></style>
