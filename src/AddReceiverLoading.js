import useFetch from './useFetch';
import AddReceiver from './AddReceiver';

const AddReceiverLoading = () => {
    const{data, isPending, error} = useFetch('http://localhost:8000/receivers');

    return (  
        <div className="receivers">
            {error && <div>{error} </div>}
            {isPending && <div>Loading...</div>}
            {data && <AddReceiver receivers={data} />}
        </div>
    );
}

export default AddReceiverLoading;