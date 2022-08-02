import { deleteDoc, doc } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from '../firebase';
import '../Styles/Event.css'

export default function Event(props) {
    const del = async (e) => {

        await deleteDoc(
            doc(db, 'users', props.event.user, 'events', props.event.docID)
        );
    };

    useEffect(() => {
        setInterval(async () => {
            const today = new Date();
            if (today > props.event.day) {
                await del(props.event.docID);
                console.log("sdljksd")
            }
        }, 1000)
    }, [])


    return (
        <div className="event">
            <p>Event: {props.event.name}</p>
            <p>Details: {props.event.details}</p>
            <p>Start Time: {props.event.start_time}</p>
            <p>Duration: {props.event.duration.hours} {props.event.duration.hours === "1" ? "Hr" : "Hrs"} {props.event.duration.mins}  {props.event.duration.mins === "1" ? "Min" : "Mins"}</p>
        </div >
    );
}
