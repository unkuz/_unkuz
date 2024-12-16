<template>
  <div class="bg-[floralwhite] fixed top-0 left-0 w-screen">
    <Vue3Lottie
      :animationData="luv"
      class="fixed w-screen h-screen z-20 scale-[2.5] sm:scale-[2]"
      v-if="showHeartDrop"
      :loop="false"
    />

    <div
      class="min-h-screen w-full sm:w-[500px] mx-auto p-[5px] bg-[#000000] relative"
    >
      <p class="h-[60px] w-full flex items-center">
        <NuxtLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
            />
          </svg>
        </NuxtLink>
      </p>
      <div class="flex w-full flex-col gap-[5px] items-end">
        <div class="flex w-full justify-end">
          <span
            class="py-[10px] px-[15px] bg-[#46daff] rounded-[20px] [border-bottom-right-radius:5px] text-black"
          >
            linh oi, cho a xin loi di ma
          </span>
        </div>
        <div class="flex w-full justify-end">
          <span
            class="py-[10px] px-[15px] bg-[#46daff] rounded-[20px] [border-top-right-radius:10px] [border-bottom-right-radius:10px] text-black"
            >e bo chan a di</span
          >
        </div>

        <img
          :src="'/6d5ede3d-f80e-4fda-8cf3-52326ba3b348.webp'"
          class="w-[100px] object-cover inline-block"
          :alt="''"
        />
        <div class="flex w-full justify-end">
          <NuxtLink
            to="https://youtu.be/u-Vs1Co9yMU?list=RDu-Vs1Co9yMU"
            target="_blank"
            external
            class="cursor-pointer py-[10px] px-[15px] bg-[#46daff] rounded-[20px] [border-top-right-radius:5px] text-[black] underline"
          >
            Jay Key - Supperherro
          </NuxtLink>
        </div>
      </div>
      <div
        @click="onClickUnblock"
        class="bg-[#790ded] flex justify-center items-center w-[300px] h-[45px] rounded-2xl absolute bottom-[140px] sm:bottom-[30px] right-1/2 translate-x-1/2"
      >
        <p>Tha lỗi</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import luv from "@/assets/lotties/luv.lotties.json";
const showHeartDrop = ref(false);

const onClickUnblock = () => {
  showHeartDrop.value = true;
  setTimeout(() => {
    showHeartDrop.value = false;
  }, 3000);
};

onMounted(() => {
  console.log(document);
  // Function to create a marquee effect on the document title
  function startTitleMarquee() {
    const originalTitle = (document.title =
      "linh oi, cho a xin loi di ma ＞︿＜"); // Store the original title
    const maxLength = 5; // Set the maximum length for the title
    let marqueeText = originalTitle;

    // Check if the title is too long
    if (originalTitle.length > maxLength) {
      // If title is too long, we begin the marquee effect
      let currentPos = 0; // Position to slice the title string

      setInterval(function () {
        // Slice the title from the current position
        document.title =
          marqueeText.substring(currentPos) +
          marqueeText.substring(0, currentPos);

        // Move to the next position, and wrap around if necessary
        currentPos++;
        if (currentPos >= marqueeText.length) {
          currentPos = 0; // Reset to the beginning of the text
        }
      }, 200); // Adjust the speed by changing the interval (200ms here)
    }
  }

  // Call the function to start the marquee effect
  startTitleMarquee();
});
</script>

<style></style>
