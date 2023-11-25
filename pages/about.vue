<template>
  <div class="w-full flex justify-center flex-col items-center py-[100px] gap-[20px] min-h-screen">
    <h1 class="text-[1rem]">About</h1>
    <div class="w-[350px] overflow-hidden">
      <NuxtImg src="/unkuz.jpeg" class="object-cover overflow-hidden" />
    </div>

    <div class="mx-auto sm:w-[550px]">
      <p class="indent-8 text-justify">
        Unkuz is the code name of Nguyen Ba Cuong, a creative web developer with
        2.5+ years of experience working in building website. Proficient in
        HTML, CSS, JavaScript, TypeScript, Python,...: plus modern libraries,
        frameworks and mastering the latest front-end technologies. Well-versed
        in requirements aith an in-depth knowledge. I'm currently working in
        Hanoi as a Software Engineering, while also taking on freelance projects that
        pique my interest. Here
        is the list of technologies that I have experience with:

      <div class="[&_svg]:cursor-pointer indent-0 flex flex-col gap-[8px] mt-[10px]">
        <span>Application and Data</span>
        <div class="flex  gap-x-[20px] gap-y-[5px] flex-wrap [&_svg]:text-[30px]">
          <NuxtLink to="https://tailwindcss.com/" target="_blank">
            <Tailwind filled />
          </NuxtLink>
          <NuxtLink  to="https://react.dev/"   target="_blank">
            <ReactIcon filled  target="_blank"/>
          </NuxtLink>
          <NuxtLink  to="https://nuxt.com/"   target="_blank">
            <NuxtIcon filled   />
          </NuxtLink>
          <NuxtLink to="https://nextjs.org/ " target="_blank">
            <NextIcon filled class="!text-[45px]" />
          </NuxtLink>
          <NuxtLink to="https://vuejs.org/" target="_blank">
            <VueIcon filled />
          </NuxtLink>
          <NuxtLink to="https://lodash.com/" target="_blank">
            <Lodash filled />
          </NuxtLink>
          <NuxtLink to="https://expressjs.com/" target="_blank">
            <Express filled />
          </NuxtLink>
          <NuxtLink to="https://nestjs.com/" target="_blank">
            <Nestjs filled />
          </NuxtLink>
          <NuxtLink to="https://www.djangoproject.com/" target="_blank">
            <Django filled class="!text-[45px]" />
          </NuxtLink>
          <NuxtLink to="https://nodejs.org/en/" target="_blank">
            <Nodejs filled class="!text-[45px]" />
          </NuxtLink>
          <NuxtLink to="https://socket.io/" target="_blank">
            <Socketio filled />
          </NuxtLink>
          <NuxtLink to="https://www.python.org/" target="_blank">
            <Python filled />
          </NuxtLink>
          <NuxtLink to="https://www.mongodb.com/" target="_blank">
            <Mongodb filled />
          </NuxtLink>
          <NuxtLink to="https://www.mysql.com/" target="_blank">
            <Mysql filled />
          </NuxtLink>
          <NuxtLink to="https://www.postgresql.org/" target="_blank">
            <Postgresql filled />
          </NuxtLink>

        </div>
        <span>Utilities</span>
        <div class="flex gap-x-[20px] gap-y-[8px] flex-wrap [&_svg]:text-[30px]">
          <NuxtLink to="https://www.framer.com/" target="_blank">
            <Framerjs filled />
          </NuxtLink>
          <NuxtLink to="https://jestjs.io/" target="_blank">
            <Jest filled />
          </NuxtLink>
          <NuxtLink to="https://www.figma.com/" target="_blank">
            <Figma filled />
          </NuxtLink>
        </div>
        <span>DevOps</span>
        <div class="flex gap-x-[20px] gap-y-[8px] flex-wrap [&_svg]:text-[30px]">
          <NuxtLink to="https://www.docker.com/" target="_blank">
            <Docker filled />
          </NuxtLink>
          <NuxtLink to="https://www.datadoghq.com/" target="_blank">
            <Datadog filled class="!text-[45px]" s />
          </NuxtLink>
          <NuxtLink to="https://analytics.google.com/" target="_blank">
            <Google_analytics filled />
          </NuxtLink>
          <NuxtLink to="https://www.travis-ci.com/" target="_blank">
            <TravisCI filled />
          </NuxtLink>
        </div>
      </div>
      <!-- <div>On the other hand, he also a music producer</div> -->
      </p>
      <p class="indent-8 text-justify">Besides being a software engineer, I am also quite interested in becoming a music producer.  In recent months, I've been inspired by the future bounce music genre.  Producers who inspire me at the moment are: rentz, bayze, bad reputation, dirty palm, ball vrp,...Hopefully in 2024 I can release a song sound something similar ⭐</p>
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
