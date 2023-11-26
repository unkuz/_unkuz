import { signature } from '@/utils/app';

export default defineNuxtPlugin((nuxtApp) => {
  const globlS = uGlobalS();

  nuxtApp.hook('app:mounted', () => {
    // Consolog signature
    setInterval(
      (function hello() {
        signature();
        return hello;
      })(),
      1 * 60 * 1000,
    );

    globlS.setAppReady(false);
  });
  nuxtApp.hook('page:finish', () => {
    globlS.setAppReady();
  });
});
