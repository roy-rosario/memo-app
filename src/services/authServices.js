import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth'


export const signUpService = async(name, email, password) =>{
    const auth = getAuth()
    let check
    await createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
        updateProfile(auth.currentUser, {displayName: name})
        check = true
        console.log(check)
    })
    .catch(err => {
        check = false
        alert(err)
    })

    return check
}

export const LogInService = async(email, password) =>{
    const auth = getAuth()
    return await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        localStorage.setItem('token', userCredential._tokenResponse.idToken)
            return true
        }
    )
    .catch(err => {
        alert(err.message)
        return false
    })
}