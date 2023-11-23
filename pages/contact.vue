<template>
  <div class="w-full flex justify-center flex-col items-center pt-[100px]">
    <h1 class="text-[1rem]">Contact</h1>
    <div class="flex flex-col">
      <a class="underline" href="mailto:hi.unkuz@gmail.com"
        >hi.unkuz@gmail.com</a
      >
      <a class="underline" href="tel:+84888388859">+84 888388859</a>
    </div>
    <div class="flex gap-[20px] mt-[30px] [&>svg]:cursor-pointer">
      <div title="I'm not using facebook">
        <Facebook_invert class="cursor-not-allowed !w-[17px] !h-[17px]" />
      </div>

      <div title="I'm not using Twitter">
        <Twitter_invert class="cursor-not-allowed !w-[17px] !h-[17px]" />
      </div>
      <div title="I'm not using Instagram">
        <Instagram_invert class="cursor-not-allowed !w-[17px] !h-[17px]" />
      </div>
      <NuxtLink to="https://github.com/unkuz" title="Github" target="_blank">
        <Github_invert class="[&>path]:!fill-transparent !w-[17px] !h-[17px]" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Facebook_invert from "@/assets/svg/facebook_invert.svg";
import Instagram_invert from "@/assets/svg/instagram_invert.svg";
import Twitter_invert from "@/assets/svg/twitter_invert.svg";
import Github_invert from "@/assets/svg/github_invert.svg";

useHead({
  title: "Unkuz | Contact Page",
});
</script>
