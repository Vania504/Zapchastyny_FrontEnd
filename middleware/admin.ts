export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated, isAdmin, checkAuth } = useAuth()
  
  // Перевіряємо автентифікацію
  checkAuth()
  
  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
  
  if (!isAdmin.value) {
    return navigateTo('/')
  }
})

