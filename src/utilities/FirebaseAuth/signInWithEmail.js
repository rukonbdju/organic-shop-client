import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.init";

//sign in with email and password
const signInWithEmail = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user;
    } catch (error) {
        return error.code;
    }
}
export default signInWithEmail;