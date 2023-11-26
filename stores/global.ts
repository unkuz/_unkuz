export const uGlobalS = defineStore('global', {
  state: () => ({
    darkMode: false,
    appReady: false,
  }),
  getters: {},
  actions: {
    toggleDarkMode(val?: boolean) {
      if (_isBoolean(val)) {
        this.darkMode = val;
        return;
      }
      this.darkMode = !this.darkMode;
    },
    setAppReady(val?: boolean) {
      if (_isBoolean(val)) {
        this.appReady = val;
        return;
      }
      this.appReady = true;
    },
  },
  persist: {
    paths: ['darkMode'],
  },
});
