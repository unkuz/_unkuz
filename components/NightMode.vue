<script lang="ts" setup></script>

<template>
  <div
    class="relative h-[20px] w-[35px] overflow-hidden rounded-[calc(25px/2)] bg-[#34d0ff] dark:bg-[#4e4e4e] cursor-pointer"
  >
    <div
      :class="[
        'absolute bottom-1/2 left-[2px] aspect-square h-[80%] translate-y-1/2 rounded-[50%] bg-white duration-200 dark:left-[17px]',
      ]"
    ></div>
    <div
      class="absolute bottom-[7px] left-[13px] hidden aspect-square h-[60%] rounded-[50%] dark:block dark:bg-[#4e4e4e]"
    ></div>
    <div
      class="absolute bottom-[12px] right-[5px] aspect-square h-[25%] rounded-[50%] bg-white duration-200 dark:bottom-[15px] dark:right-[20px] dark:h-[0%]"
    ></div>
    <div
      class="absolute bottom-[8px] right-[10px] aspect-square h-[15%] rounded-[50%] bg-white duration-200 dark:right-[20px] dark:h-[0%]"
    ></div>
  </div>
</template>
