import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const AddReceiver = () => {
    const [name, setName] = useState('');
    const [receiver_id, setid] = useState();
    const [group, setGroup] = useState('');
    const [leds, setleds] = useState();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const receiver = {name, receiver_id, group, leds};

        setIsPending(true);

        fetch('http://localhost:8000/receivers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(receiver)
        }).then(() => {
            console.log(receiver);
            setIsPending(false);
            navigate('/receivers');
        })
    }

    return ( 
        <div className="add-receiver-menu">
            <h2>Add Receiver Info</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder='Receiver Name'
                required 
                value = {name}
                onChange={(e)=> setName(e.target.value)}
                /><br />
                <input type="number"
                placeholder='Receiver ID'
                required 
                value = {receiver_id}
                onChange={(e)=> setid(e.target.value)}
                /><br />
                <input type="number"
                placeholder='Receiver LEDs'
                required 
                value = {leds}
                onChange={(e)=> setleds(e.target.value)}
                /><br />
                <select value={group}
                onChange={(e) => setGroup(e.target.value)}>
                    <option value="Drumline">Drumline</option>
                    <option value="Pit">Pit</option>
                </select><br />

                {!isPending && <button>Add Receiver</button>}
                {isPending && <button disabled>Adding receiver...</button>}
            </form>
        </div>
    );
}

export default AddReceiver;