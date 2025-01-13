// firebaseConfig.js
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCU5KSCDkpPH8zoRNrHvFFbd1Di-AHpQVY',
  databaseURL:
    'https://arawmatic-15f8d-default-rtdb.asia-southeast1.firebasedatabase.app', // Update this URL
  projectId: 'arawmatic-15f8d',
  storageBucket: 'arawmatic-15f8d.firebasestorage.app',
  messagingSenderId: '767761889421',
  appId: '1:767761889421:android:5e948165862145916acac4',
}

// Initialize Firebase
const myApp = initializeApp(firebaseConfig)
const database = getDatabase(myApp)

export { myApp, database }
