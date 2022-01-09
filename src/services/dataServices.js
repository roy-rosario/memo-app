import {getDB} from '../utils/firebase-config'
import {setDoc, doc, collection, getDocs, query, where, deleteDoc, updateDoc, orderBy} from 'firebase/firestore'



export const addDoc = async(task, body, id) =>{
    const db = getDB()

    const docRef = doc(collection(db, 'tasks'))

    let date = new Date()

    return await setDoc(docRef, {task: task, taskBody: body, userId: id, dateCreated: date.toDateString().slice(3), dateActual: date.getTime(), tracked: false})
    .then(() =>{
        return true
    })
    .catch(err =>{
        alert(err)
        return false
    })
}

export const completeDoc = async(data) => {
    const db = getDB()

    const docRef = doc(collection(db, 'completed'))

    return await setDoc(docRef, data)
    .then(()=>{
        return true
    })
    .catch(err =>{
        alert(err)
        return false
    })
}

export const revertDoc = async(data) => {
    const db = getDB()

    const docRef = doc(collection(db, 'tasks'))

    return await setDoc(docRef, data)
    .then(()=>{
        return true
    })
    .catch(err =>{
        alert(err)
        return false
    })
}

export const archiveDoc = async(data) => {
    const db = getDB()

    const docRef = doc(collection(db, 'archived'))

    return await setDoc(docRef, data)
    .then(()=>{
        return true
    })
    .catch(err =>{
        alert(err)
        return false
    })
}

export const editDoc = async(docId, data) =>{
    const db = getDB()

    const docRef = doc(collection(db, 'tasks'), docId)


    return await updateDoc(docRef, data)
    .then(() =>{
        return true
    })
    .catch(err =>{
        alert(err)
        return false
    })
}




export const retrieveDocs = async(id, collectionName) =>{
    const date = new Date()
    
    const db = getDB()

        const q = query(collection(db, collectionName), orderBy("dateActual"),  where("userId", "==", id))

        return await getDocs(q)
        .then((snapShot)=>{
            const placeholder = []
            snapShot.forEach(doc =>{
                placeholder.push({
                    ...doc.data(),
                    docId: doc.id
                })
            })
            console.log('retrieved collection at ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
            return placeholder
        })
        .catch(err => {
            console.log(err)
            return ([])
        })
    
}

export const removeDoc = async(id, collectionName) =>{
    const db = getDB()

    const docRef = doc(db, collectionName, id)

    return await deleteDoc(docRef)
    .then(()=>{
        return true
    })
    .catch(err =>{
        alert(err)
        return false
    })
}