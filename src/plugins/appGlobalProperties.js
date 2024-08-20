export function addAppGlobalProperties (app) {
  if (!app) {
    console.error ('App is not provided')
  }

  app.config.globalProperties.$gameStore = useGameStore()
}