export default defineNuxtPlugin(() => {
  const { checkAuth } = useAuth()
  
  // Перевіряємо автентифікацію при завантаженні додатку
  checkAuth()
})

