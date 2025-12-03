export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated, checkAuth } = useAuth()
  
  // Перевіряємо автентифікацію
  checkAuth()
  
  if (isAuthenticated.value) {
    return navigateTo('/admin/products')
  }
})

