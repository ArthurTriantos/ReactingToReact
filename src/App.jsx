import React, {useState} from 'react';
import Greeter from './components/Greeter'

let App = () => {
    const [username, setUsername] = useState('')
    const [loaded, setLoaded] = useState(false);


    if (loaded){
        
        return (
            <>
            <Greeter name='Tommy Pickles' phrase='Oh brother'/>
            <Greeter name='Tommy Pickles' phrase='Oh brother'/>
            <Greeter name='Tommy Pickles' phrase='Oh brother'/>
            <input type='text' value={username} onChange={(e)=> {setUsername(e.target.value)}} />
            <p>You are loggin in as</p>
            </>
        );
    };

}else{
    return (
        <>
        <h2>Page loading...</h2>
        <button onClick={() => setLoaded(true)}>Load Page</button>
        </>
        )

};



export default App;