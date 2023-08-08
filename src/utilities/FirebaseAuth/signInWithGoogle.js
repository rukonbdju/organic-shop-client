import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase.init";

// google sign in
const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const { user } = await signInWithPopup(auth, provider)
        return user;
    } catch (error) {
        return error
    }
}
export default signInWithGoogle;