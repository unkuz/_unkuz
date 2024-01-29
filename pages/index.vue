<template>
  <div
    class="flex min-h-screen w-full flex-col items-center justify-center gap-[20px] pt-[30px]"
  >
    <div class="uppercase">&gt; Side Project</div>

    <NuxtImg
      :src="dogEyesRight ? '/doge_right.png' : '/doge_left.png'"
      class="w-[160px] object-cover"
    />
    <div>Data is updating...</div>
  </div>
</template>

<script setup lang="ts">
const dogEyesRight = ref(true);
const { x } = useMouse();

const setDogEyes = () =>
  (dogEyesRight.value = x.value - document.body.clientWidth / 2 >= 0);

onMounted(setDogEyes);
watch(x, setDogEyes);
</script>
