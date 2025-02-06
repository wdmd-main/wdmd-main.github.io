import { watch } from 'vue'
import { useRootStore } from '@/stores/root'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const useLoading = () => {
  const root = useRootStore()

  watch(() => root.onLoading, (newValue) => {
    if (newValue) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  })
}

export default useLoading