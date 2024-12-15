import { signature } from "@/utils/app";
import { uGlobalS } from "~/stores/global";

export default defineNuxtPlugin((nuxtApp) => {
  const globlS = uGlobalS();

  nuxtApp.hook("app:mounted", () => {
    // Consolog signature
    setInterval(
      (function hello() {
        signature();
        return hello;
      })(),
      1 * 60 * 1000
    );

    globlS.setAppReady(false);
  });

  nuxtApp.hook("page:finish", () => {
    globlS.setAppReady();
  });

  nuxtApp.hook("page:start", () => {
    // console.log('page:transition:start');
  });
  nuxtApp.hook("page:transition:finish", () => {
    // console.log('page:transition:finish');
  });
});
