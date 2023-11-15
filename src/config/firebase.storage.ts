import * as admin from "firebase-admin";
import { firebaseConfig } from "./firebase.config";
import { firebaseAdmin } from "./firebaseadmin.config";



admin.initializeApp({
  credential: admin.credential.cert(firebaseAdmin as admin.ServiceAccount),
  storageBucket: firebaseConfig.storageBucket,
});

const storage = admin.storage();
export default storage;