import {Link} from 'react-router-dom';

const ReceiverList = ({receivers}) => {
    return ( 
        <div className="receiver-list">
            <h2>Receivers</h2>
            <div className="add-receiver">
                <Link to='/add-receiver'> 
                <button>Add Receiver</button> 
                </Link>
            </div>
            {receivers.map((receiver) => (
                <div className="receiver-info">
                    <Link to={`/edit-receiver/${receiver.id}`} >
                        <h2>{receiver.name}</h2>
                        <p>ID: {receiver.receiver_id} | Group: {receiver.group} | LED Count: {receiver.leds}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ReceiverList;