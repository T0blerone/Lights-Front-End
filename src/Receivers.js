import useFetch from './useFetch';
import ReceiverList from './ReceiverList';

const Receivers = () => {
    const{data, isPending, error} = useFetch('http://localhost:8000/receivers');

    return (  
        <div className="receivers">
            {error && <div>{error} </div>}
            {isPending && <div>Loading...</div>}
            {data && <ReceiverList receivers={data} />}
        </div>
    );
}

export default Receivers;