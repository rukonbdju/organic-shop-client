import { auth } from "../../../firebase.init"

// create new user with email and password and update name and save to database
const createNewUserWithEmail = async (email, password) => {
    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, password)
      return user
    }catch (error) {
      return error;
    }
}
export default createNewUserWithEmail