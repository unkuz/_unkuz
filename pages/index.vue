<script setup lang="ts">
useHead({
  title: 'Unkuz',
});

const router = useRouter();

onBeforeMount(() => {
  router.push('/work');
});
</script>

<template></template>
