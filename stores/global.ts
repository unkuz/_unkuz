export const uGlobalS = defineStore("global", {
  state: () => ({
    darkMode: false,
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
  },
  persist: true,
});
