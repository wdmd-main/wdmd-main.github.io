import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
  state: () => ({
    onLoading: false
  }),
  actions: {
    setLoading(loading: boolean) {
      this.onLoading = loading
    }
  }
})