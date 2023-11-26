<script lang="ts" setup>
import Star from "@/assets/svg/star.svg";
const { darkMode } = storeToRefs(uGlobalS());
</script>

<template>
  <div
    class="w-[35px] h-[20px] rounded-[calc(25px/2)] bg-[#34d0ff] dark:bg-[#4e4e4e] relative overflow-hidden"
  >
    <div
      :class="[
        'h-[80%] rounded-[50%] aspect-square bg-white absolute bottom-1/2 translate-y-1/2 left-[2px] dark:left-[17px] duration-200',
      ]"
    ></div>
    <div
      class="h-[60%] rounded-[50%] aspect-square hidden absolute bottom-[7px] left-[13px] dark:bg-[#4e4e4e] dark:block"
    ></div>
    <div
      class="h-[25%] rounded-[50%] aspect-square bg-white absolute bottom-[12px] right-[5px] dark:right-[20px] duration-200 dark:h-[0%] dark:bottom-[15px]"
    ></div>
    <div
      class="h-[15%] rounded-[50%] aspect-square bg-white absolute bottom-[8px] right-[10px] dark:right-[20px] duration-200 dark:h-[0%]"
    ></div>
    <Star
      filled
      class="fill-white !w-[5px] !h-[5px] absolute dark:left-[5px] dark:top-[3px] duration-200 left-[35px] -top-[20px]"
    />
    <Star
      filled
      class="fill-white !w-[4px] !h-[4px] absolute dark:top-[12px] dark:left-[8px] duration-200 left-[35px] -top-[20px]"
    />
  </div>
</template>
