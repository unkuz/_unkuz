<template>
  <div
    class="flex h-[50px] w-[300px] items-center gap-[10px] rounded-[10px] bg-yellow-200 p-[5px] sm:w-[400px]"
  >
    <div
      class="aspect-square h-full overflow-hidden rounded-[7px] bg-fuchsia-200"
    >
      <img
        :src="state.thumbnail"
        class="h-full w-full object-cover"
        :alt="state.title"
      />
    </div>
    <div class="flex flex-1 flex-col text-[.7rem] text-black">
      <p class="">{{ state.title }}</p>
    </div>
    <audio
      ref="audioEl"
      controls
      class="hidden"
      src="/Ball VRP & Novel Soul - Fake Colors (128 kbps).mp3"
    />
    <canvas ref="canvasRef" class="hidden h-[25px] w-[100px] sm:block" />
    <div class="mr-[5px] flex gap-[10px] *:cursor-pointer">
      <!-- <div>{{ '<' }}</div> -->
      <div @click="togglePlay" class="*:w-[20px] [*>path]:fill-black">
        <svg
          v-if="state.isPlay"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M10.396 18.433L17 12l-6.604-6.433A2 2 0 0 0 7 7v10a2 2 0 0 0 3.396 1.433"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2m7 0a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2"
          />
        </svg>
      </div>
      <!-- <div>{{ '>' }}</div>
      <div>{{ '?' }}</div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';

const audioEl = ref<HTMLMediaElement>();
const canvasRef = ref<HTMLCanvasElement>();
const analyser = ref<AnalyserNode>();
const audioSource = ref<MediaElementAudioSourceNode>();
const ctxCanvas = ref<any>(null);

onMounted(() => {
  ctxCanvas.value = canvasRef.value!.getContext('2d');
});

const state = reactive({
  track: new Audio(),
  title: '',
  thumbnail: '',
  isPlay: false,
});

const start = () => {
  state.isPlay = !audioEl.value?.paused
  if (!audioEl.value?.paused) {
    audioEl.value?.pause();
    return;
  }
  audioEl.value?.play();

  const audioContext = new AudioContext();

  if (!audioSource.value) {
    audioSource.value = audioContext.createMediaElementSource(audioEl.value!);

    analyser.value = audioContext.createAnalyser();

    audioSource.value.connect(analyser.value);

    analyser.value.connect(audioContext.destination);
  }

  analyser.value!.fftSize = 32_768;
  const bufferLength = analyser.value!.frequencyBinCount;

  const dataArray = new Uint8Array(bufferLength);

  function animate() {
    ctxCanvas.value.clearRect(
      0,
      0,
      canvasRef.value!.width,
      canvasRef.value!.height,
    );
    analyser.value!.getByteTimeDomainData(dataArray);

    ctxCanvas.value.fillStyle = 'transparent';
    ctxCanvas.value.fillRect(
      0,
      0,
      canvasRef.value!.width,
      canvasRef.value!.height,
    );

    ctxCanvas.value.lineWidth = 5;
    ctxCanvas.value.strokeStyle = 'rgb(0 0 0)';
    ctxCanvas.value.beginPath();

    const sliceWidth = canvasRef.value!.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * (canvasRef.value!.height / 2);

      if (i === 0) {
        ctxCanvas.value.moveTo(x, y);
      } else {
        ctxCanvas.value.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctxCanvas.value.lineTo(canvasRef.value!.width, canvasRef.value!.height / 2);
    ctxCanvas.value.stroke();
    requestAnimationFrame(animate);
  }

  animate();
};

onMounted(async () => {
  const res = await axios.post('/api/proxy-yt', {
    url: 'https://www.youtube.com/watch?v=oX4uaarflA4&list=RDMM&index=2',
  });
  const data = res.data;

  state.track.src = '/Ball VRP & Novel Soul - Fake Colors (128 kbps).mp3';
  state.title = data.title;
  state.thumbnail = data.thumbnail;
});

const togglePlay = () => {
  start();
  //   const isPaused = state.track.paused;
  //   isPaused ? state.track.play() : state.track.pause();
  //   state.isPlay = !isPaused;
};
</script>

<style scoped></style>
