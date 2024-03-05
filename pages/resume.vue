<template>
  <div class="fixed inset-0 dark:bg-black">
    <div
      class="fixed left-[100px] top-[100px] h-[calc(100vh-150px)] !w-[calc(100vw-200px)]"
    >
      <embed :src="resumePdf" class="h-full w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import resumePdf from '/resume.pdf';

const router = useRouter();
onMounted(() => {
  //   console.log({ router });
  //   router.push('/resume.pdf');
});
</script>
