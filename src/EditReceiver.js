import {useNavigate, useParams} from 'react-router-dom';
import { useState } from 'react';
import useFetch from './useFetch';

const EditReceiver = () => {
    const {id} = useParams();
    const {data, dataIsPending, error} = useFetch('http://localhost:8000/receivers/'+id);
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

        if (name === ""){
            receiver.name = data.name;
        }
        if(group === ""){
            receiver.group = data.group;
        }
        

        fetch('http://localhost:8000/receivers/'+id, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(receiver)
        }).then(() => {
            setIsPending(false);
            navigate('/receivers');
        })
    }

    const deleteReceiver = () => {
        fetch('http://localhost:8000/receivers/'+id, {
            method:'DELETE'
        }).then(()=> {
            navigate('/receivers');
        })
    }
    
    return ( 
        <div className="edit-receiver">
            {error && <div>{error} </div>}
            {dataIsPending && <div>Loading...</div>}
            {data && 
            <div className="edit-receiver-menu">
                <h2>Edit Receiver Info</h2>                
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    placeholder='Receiver Name'
                    required 
                    defaultValue = {data.name}
                    onChange={(e)=> setName(e.target.value)}
                    /><br />
                    <input type="number"
                    placeholder='Receiver ID'
                    required 
                    defaultValue = {data.receiver_id}
                    onChange={(e)=> setid(e.target.value)}
                    /><br />
                    <input type="number"
                    placeholder='Receiver LEDs'
                    required 
                    defaultValue = {data.leds}
                    onChange={(e)=> setleds(e.target.value)}
                    /><br />
                    <select defaultValue={data.group}
                    onChange={(e) => setGroup(e.target.value)}>
                        <option value="Drumline">Drumline</option>
                        <option value="Pit">Pit</option>
                    </select><br />

                    {!isPending && <button>Update Receiver</button>}
                    {isPending && <button disabled>Updating receiver...</button>}
                </form>
                <button onClick={deleteReceiver}>Delete Receiver</button>
            </div>}
        </div>
    );
}

export default EditReceiver;