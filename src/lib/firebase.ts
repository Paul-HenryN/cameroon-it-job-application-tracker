import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  ref,
  get,
  query,
  orderByChild,
  limitToFirst,
} from "firebase/database";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function getJobs({
  maxResults = 5,
}: { maxResults?: number } = {}) {
  const jobsRef = ref(database, "jobs");

  const q = query(jobsRef, limitToFirst(maxResults));

  const snapshot = await get(q);

  if (snapshot.exists()) {
    return snapshot.val();
  }

  return null;
}
