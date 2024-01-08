import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import useFetch from './useFetch';


const EditReceiver = () => {
    const{data: receiver, dataIsPending, error} = useFetch('http://localhost:8000/receivers/');
    const [name, setName] = useState();
    const [receiver_id, setid] = useState();
    const [group, setGroup] = useState('');
    const [leds, setleds] = useState();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {

    }
    
    return ( 
        <div className="edit-receiver-menu">
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

                {!isPending && <button>Update Receiver</button>}
                {isPending && <button disabled>Updating receiver...</button>}
            </form>
        </div>
    );
}

export default EditReceiver;