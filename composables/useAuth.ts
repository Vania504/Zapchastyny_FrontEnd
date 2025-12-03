import { ref, computed, readonly } from 'vue'

interface User {
  id: string
  email: string
  role: 'admin' | 'user'
}

const user = ref<User | null>(null)
const isAuthenticated = computed(() => !!user.value)
const isAdmin = computed(() => user.value?.role === 'admin')

export const useAuth = () => {
  const login = async (email: string, password: string) => {
    // TODO: Замінити на реальний API запит
    // Тимчасово: перевіряємо, чи це адміністратор
    if (email === 'admin@example.com' && password === 'admin123') {
      user.value = {
        id: '1',
        email: email,
        role: 'admin'
      }
      // Зберігаємо в localStorage
      if (process.client) {
        localStorage.setItem('user', JSON.stringify(user.value))
      }
      return user.value
    } else {
      throw new Error('Невірний email або пароль')
    }
  }

  const logout = () => {
    user.value = null
    if (process.client) {
      localStorage.removeItem('user')
    }
  }

  const checkAuth = () => {
    if (process.client) {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        try {
          user.value = JSON.parse(storedUser)
        } catch (e) {
          console.error('Error parsing user from localStorage:', e)
        }
      }
    }
  }

  return {
    user: readonly(user),
    isAuthenticated,
    isAdmin,
    login,
    logout,
    checkAuth
  }
}

