// firebaseService.js
import { database } from './firebaseConfig' // Adjust the path
import { ref, set } from 'firebase/database'

export const createUser = async (userData) => {
  const userRef = ref(database, 'users/' + userData.phoneNumber) // or use a unique ID
  return set(userRef, userData)
}
