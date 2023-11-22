<template>
  <div class="w-screen h-screen relative text-[.9rem] px-[50px] py-[30px]">
    <header class="w-full flex justify-between items-center">
      <div title="Unkuz" class="flex items-center gap-[10px] font-au">
        <UnkuzLogo
          class="!fill-transparent [&>path]:!fill-transparent !w-[40px] !h-[40px] hover:cursor-pointer hover:rotate-[180deg] duration-300"
        />
      </div>
      <div class="flex gap-[20px] [&>div]:hover:cursor-pointer">
        <div>_WORK</div>
        <div>_ABOUT</div>
        <div>_CONTACT</div>
      </div>
    </header>
    <!-- <div class="">
      <Facebook_invert />
      <Twitter_invert />
      <Instagram_invert />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import UnkuzLogo from "@/assets/svg/unkuz_logo.svg";
import Facebook_invert from "@/assets/svg/facebook_invert.svg";
import Twitter_invert from "@/assets/svg/twitter_invert.svg";
import Instagram_invert from "@/assets/svg/instagram_invert.svg";
</script>

<style scoped></style>
