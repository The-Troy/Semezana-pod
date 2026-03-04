import { db } from "../lib/firebase";
import {
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    doc,
    updateDoc,
    query,
    orderBy,
    Timestamp
} from "firebase/firestore";

export interface TopicData {
    name: string;
    email: string;
    topic: string;
    urgency: string;
    description: string;
}

export interface Topic extends TopicData {
    id: string;
    status: 'pending' | 'reviewed' | 'archived';
    createdAt: Timestamp;
}

export const submitTopic = async (data: TopicData) => {
    try {
        const topicsRef = collection(db, "topics");
        await addDoc(topicsRef, {
            ...data,
            createdAt: serverTimestamp(),
            status: "pending" // Initial status
        });
        return { success: true };
    } catch (error) {
        console.error("Error submitting topic:", error);
        return { success: false, error };
    }
};

// Admin functions
export const getAllTopics = async (): Promise<Topic[]> => {
    try {
        const topicsRef = collection(db, "topics");
        const q = query(topicsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const topics: Topic[] = [];
        querySnapshot.forEach((doc) => {
            topics.push({
                id: doc.id,
                ...doc.data()
            } as Topic);
        });

        return topics;
    } catch (error) {
        console.error("Error fetching topics:", error);
        return [];
    }
};

export const updateTopicStatus = async (
    topicId: string,
    status: 'pending' | 'reviewed' | 'archived'
) => {
    try {
        const topicRef = doc(db, "topics", topicId);
        await updateDoc(topicRef, { status });
        return { success: true };
    } catch (error) {
        console.error("Error updating topic:", error);
        return { success: false, error };
    }
};
