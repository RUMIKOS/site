// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAwKFpISLlI4K9tzwJgOrRxX3C9ujaIVyY',
	authDomain: 'test-9ecd9.firebaseapp.com',
	projectId: 'test-9ecd9',
	storageBucket: 'test-9ecd9.appspot.com',
	messagingSenderId: '71671214586',
	appId: '1:71671214586:web:908dd5d7b2c587b423f443',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)