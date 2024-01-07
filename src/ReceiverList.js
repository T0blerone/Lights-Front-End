import AddReceiver from "./AddReceiver";
import {Link} from 'react-router-dom';

const ReceiverList = ({receivers}) => {
    return ( 
        <div className="receiver-list">
            <h2>Receivers</h2>
            <div className="add-receiver">
                <Link to='/add-receiver'> 
                <button onClick={AddReceiver()}>Add Receiver</button>
                </Link>
            </div>
            {receivers.map((receiver) => (
                <Link to={`/receiver/${receiver.receiver_id}`} >
                    <div className="receiver-info">
                        <h2>{receiver.name}</h2>
                        <p>ID: {receiver.receiver_id}</p>
                        <p>Group: {receiver.group}</p>
                        <p>LED Count: {receiver.leds}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ReceiverList;