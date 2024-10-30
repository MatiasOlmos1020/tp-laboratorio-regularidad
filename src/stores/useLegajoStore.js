import { defineStore } from "pinia";

export const useLegajoStore = defineStore('legajo',{
    state: () => ({
        legajo: null,
    }),
    actions: {
        setHash(newHash) {
          this.hash = newHash;
        },
      },
})