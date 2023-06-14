/*
1. Data User
2. Action Fetch User
3. Getters is User Logged In
*/

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// User Types
import type User from '@/types/user'

export const useUserStore = defineStore('user', () => {
  // API URL
  const API_URL = import.meta.env.VITE_API_URL as string

  // State / Date
  const user = ref<User>({})

  // Computed
  const isLoggedIn = computed(() => {
    return localStorage.getItem('access_token') !== null
  })

  // Actions / Method
  async function fetchUser() {
    try {
      const { data } = await axios.get(API_URL + '/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      user.value = data
    } catch (error) {
      user.value = {}
      console.log(error)
    }
  }

  // Getters / Computed
  return { user, fetchUser, isLoggedIn }
})
