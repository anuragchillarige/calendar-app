import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Event(props) {
    const del = async (e) => {
        e.preventDefault();
        await deleteDoc(
            doc(db, 'users', props.event.user, 'events', props.event.docID)
        );
    };

    return (
        <div className="event" style={{
            "marginBottom": "50px"
        }}>
            <p>Event: {props.event.name}</p>
            <p>Details: {props.event.details}</p>
            <p>Start Time: {props.event.start_time}</p>
            <p>Duration: {props.event.duration.hours} {props.event.duration.hours === "1" ? "Hour" : "Hours"} {props.event.duration.mins}  {props.event.duration.mins === "1" ? "Minute" : "Minutes"}</p>
        </div >
    );
}
