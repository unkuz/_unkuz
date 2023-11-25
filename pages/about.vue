<template>
  <div
    class="w-full flex justify-center flex-col items-center py-[30px] gap-[20px]"
  >
    <h1 class="text-[1rem]">About</h1>
    <div
      class="w-[350px] overflow-hidden [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]"
    >
      <NuxtImg
        src="/unkuz.jpeg"
        class="object-cover overflow-hidden hover:scale-110 duration-300"
      />
    </div>

    <div >
      <p class="indent-8">
        Unkuz is the code name of Nguyen Ba Cuong, a creative web developer with
        2.5+ years of experience working in building website. Proficient in
        HTML, CSS, JavaScript, TypeScript, Python,...: plus modern libraries,
        frameworks and mastering the latest front-end technologies. Well-versed
        in requirements aith an in-depth knowledge. I'm currently working in
        Hanoi as a web developer, while also taking on freelance projects that
        pique my interest. Here is the list of my technologies I exprencie. Here
        is the list of technologies that I have experience with
        
      <div class="[&_svg]:cursor-pointer indent-0 flex flex-col gap-[10px]">
        <span class="">Application and Data</span>
        <div class="flex  gap-x-[20px] gap-y-[8px] flex-wrap [&>svg]:text-[30px]">
          <Tailwind filled />
          <ReactIcon filled class="" />
          <NuxtIcon filled class="" />
          <NextIcon filled class="!text-[45px]" />
          <VueIcon filled />
          <Lodash filled />
          <Express filled />
          <Nestjs filled />
          <Django filled  class="!text-[45px]" />
          <Nodejs filled  class="!text-[45px]" />
          <Socketio filled />
          <Python filled />
          <Mongodb filled />
          <Mysql filled />
          <Postgresql filled />
        </div>
        <span class="">Utilities</span>
        <div class="flex gap-x-[20px] gap-y-[8px] flex-wrap [&>svg]:text-[30px]">
          <Framerjs filled />
          <Jest filled />
          <Figma filled />
        </div>
        <span class="">DevOps</span>
        <div class="flex gap-x-[20px] gap-y-[8px] flex-wrap [&>svg]:text-[30px]">
          <Docker filled />
          <Datadog filled  class="!text-[45px]" s/>
          <Google_analytics filled />
          <TravisCI filled />
        </div>
      </div>
      <div></div>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueIcon from "@/assets/svg/vue.svg";
import NuxtIcon from "@/assets/svg/nuxt.svg";
import ReactIcon from "@/assets/svg/react.svg";
import NextIcon from "@/assets/svg/next.svg";
import Tailwind from "@/assets/svg/tailwind.svg";
import Django from "@/assets/svg/django.svg";
import Nodejs from "@/assets/svg/nodejs.svg";
import Socketio from "@/assets/svg/socketio.svg";
import Python from "@/assets/svg/python.svg";

import Mysql from "@/assets/svg/mysql.svg";
import Postgresql from "@/assets/svg/postgresql.svg";
import Mongodb from "@/assets/svg/mongodb.svg";
import Express from "@/assets/svg/express.svg";
import Nestjs from "@/assets/svg/nestjs.svg";
import Lodash from "@/assets/svg/lodash.svg";

import Framerjs from "@/assets/svg/framerjs.svg";
import Jest from "@/assets/svg/jest.svg";
import Datadog from "@/assets/svg/datadog.svg";
import Figma from "@/assets/svg/figma.svg";
import Docker from "@/assets/svg/docker.svg";
import Google_analytics from "@/assets/svg/google_analytics.svg";
import TravisCI from "@/assets/svg/travisCI.svg";

useHead({
  title: "Unkuz | About Page",
});
</script>
