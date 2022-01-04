import {getDB} from '../utils/firebase-config'
import {setDoc, doc, collection, getDocs, query, where, deleteDoc, updateDoc, orderBy} from 'firebase/firestore'



export const addDoc = async(task, id) =>{
    const db = getDB()

    const docRef = doc(collection(db, 'tasks'))

    let date = new Date()

    return await setDoc(docRef, {task: task, userId: id, dateCreated: date.toDateString().slice(3), dateActual: date.getTime(), tracked: false})
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

export const removeDoc = async(id) =>{
    const db = getDB()

    const docRef = doc(db, 'tasks', id)

    return await deleteDoc(docRef)
    .then(()=>{
        return true
    })
    .catch(err =>{
        alert(err)
        return false
    })
}