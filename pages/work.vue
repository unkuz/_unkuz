<template>
  <div
    class="w-full flex justify-center flex-col items-center pt-[30px] gap-[20px]"
  >
    <div>Side Project</div>
    <NuxtImg src="/doge.png" class="object-cover w-[170px]" />
    <spna>There is no data here.</spna>
    <!-- <div class="grid grid-cols-1 w-full gap-[20px]">
      <div
        class="w-full h-[200px] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] pj opacity-20"
      ></div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Unkuz | Work Page",
});
import doge from "@/assets/image/doge.png";
</script>

<style scoped>
.pj {
  background-image: radial-gradient(
      18% 28% at 24% 50%,
      #cefaffff 7%,
      #073aff00 100%
    ),
    radial-gradient(18% 28% at 18% 71%, #ffffff59 6%, #073aff00 100%),
    radial-gradient(70% 53% at 36% 76%, #73f2ffff 0%, #073aff00 100%),
    radial-gradient(42% 53% at 15% 94%, #ffffffff 7%, #073aff00 100%),
    radial-gradient(42% 53% at 34% 72%, #ffffffff 7%, #073aff00 100%),
    radial-gradient(18% 28% at 35% 87%, #ffffffff 7%, #073aff00 100%),
    radial-gradient(31% 43% at 7% 98%, #ffffffff 24%, #073aff00 100%),
    radial-gradient(21% 37% at 72% 23%, #d3ff6d9c 24%, #073aff00 100%),
    radial-gradient(35% 56% at 91% 74%, #8a4ffff5 9%, #073aff00 100%),
    radial-gradient(74% 86% at 67% 38%, #6dffaef5 24%, #073aff00 100%),
    linear-gradient(125deg, #4eb5ffff 1%, #4c00fcff 100%);
}
</style>
