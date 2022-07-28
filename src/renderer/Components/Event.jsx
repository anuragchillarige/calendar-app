import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import '../Styles/Event.css'

export default function Event(props) {
    const del = async (e) => {
        e.preventDefault();
        await deleteDoc(
            doc(db, 'users', props.event.user, 'events', props.event.docID)
        );
    };

    return (
        <div className="event">
            <p>Event: {props.event.name}</p>
            <p>Details: {props.event.details}</p>
            <p>Start Time: {props.event.start_time}</p>
            <p>Duration: {props.event.duration.hours} {props.event.duration.hours === "1" ? "Hr" : "Hrs"} {props.event.duration.mins}  {props.event.duration.mins === "1" ? "Min" : "Mins"}</p>
        </div >
    );
}
