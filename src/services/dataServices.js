import {getDB} from '../utils/firebase-config'
import {setDoc, doc, collection, getDocs, query, where, deleteDoc} from 'firebase/firestore'



export const addDoc = async(task, id) =>{
    const db = getDB()

    const docRef = doc(collection(db, 'tasks'))

    let date = new Date()

    return await setDoc(docRef, {task: task, userId: id, dateCreated: date.toDateString()})
    .then(() =>{
        console.log(date)
        return true
    })
    .catch(err =>{
        alert(err)
        return false
    })
}

export const retrieveDocs = async(id) =>{
    const db = getDB()

        const q = query(collection(db, 'tasks'), where("userId", "==", id))

        return await getDocs(q)
        .then((snapShot)=>{
            const placeholder = []
            snapShot.forEach(doc =>{
                placeholder.push({
                    ...doc.data(),
                    docId: doc.id
                })
            })
            return placeholder
        })
        .catch(err => {
            alert(err)
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