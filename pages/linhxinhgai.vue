<template>
  <div class="bg-[floralwhite] fixed top-0 left-0 w-screen">
    <div class="min-h-screen w-full lg:w-[900px] sm:w-[620px] mx-auto">
      <p class="h-[100px]"></p>
      <div class="flex w-full flex-col gap-[2px] items-end">
        <div class="flex w-full justify-end">
          <span
            class="py-[10px] px-[15px] bg-[#46daff] rounded-[20px] [border-bottom-right-radius:5px] text-black"
          >
            linh oi, cho a xin loi di ma
          </span>
        </div>
        <div class="flex w-full justify-end">
          <span
            class="py-[10px] px-[15px] bg-[#46daff] rounded-[20px] [border-top-right-radius:5px] text-black"
            >e bo chan a di</span
          >
        </div>

        <img
          :src="'/6d5ede3d-f80e-4fda-8cf3-52326ba3b348.webp'"
          class="w-[100px] object-cover inline-block"
          :alt="''"
        />
      </div>

      <iframe
        class="w-screen sm:w-full aspect-[16/9] translate-x-[-20px] sm:translate-x-0 mt-[50px]"
        src="https://www.youtube.com/embed/u-Vs1Co9yMU?si=G7OyhI-4n2obBu3c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
