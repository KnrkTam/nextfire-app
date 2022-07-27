import { firestore, auth, increment  } from "../lib/firebase";
import { useDocument } from 'react-firebase-hooks/firestore';

export default function Heart ({ postRef }) {
    // Listen to heart document for currently lofgged in user
    const heartRef = postRef.collection('hearts').doc(auth.currentUser.uid);
    const [heartDoc] = useDocument(heartRef);

    // create user-to-post relationship
    const addHeart = async () => {
        const uid = auth.currentUser.uid;
        const batch = firestore.batch();

        batch.update(postRef, {heartCount: increment(1)})
        batch.set(heartRef, { uid });

        await batch.commit();
    }

   // remove user-to-post relationship
   const removeHeart = async () => {
        const batch = firestore.batch();

        batch.update(postRef, {heartCount: increment(-1)})
        batch.delete(heartRef);

        await batch.commit();
    };

    return heartDoc?.exists() ? (
        // console.log(heartRef)
        <button onClick={removeHeart}> 💔 Unheart</button>
    ) : (
        <button onClick={addHeart}>💗 Heart</button>
    ); 
}

