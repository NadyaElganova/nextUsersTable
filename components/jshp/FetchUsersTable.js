import {useEffect, useState} from 'react';
import TableUsers from './TableUsers';

export default function FetchUsersTable(){
    const
        [data, setData]=useState([]),
        [error, setError] = useState(null);
    
    useEffect(()=>{
        async function fetchData(){
            try {
                setError(null);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok) throw new Error('fetch error');                
                setData(await response.json());
            } catch(err) {
                setError(err)
            }
        }
        fetchData();
    }, []);

    if(error) return <h2 style={{color:'red'}}>{error.toString()}</h2>
    return <TableUsers data={data}/>
}