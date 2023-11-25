<script setup lang="ts">
useHead({
  title: "Unkuz",
});

const router = useRouter();
onMounted(() => {
  router.push("/work");
});
</script>

<template>
  <div></div>
</template>
