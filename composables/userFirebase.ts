import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async ( email: string, password: string) => {
  const auth = getAuth();
  const credential = await createUserWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      // ..
    });

    return credential
}
  
export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credential = await signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  return credential
}

export const initUser = async () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("user", user)
    } else {
      // User is signed out
      // ...
    }
  });
}




  