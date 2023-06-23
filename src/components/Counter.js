import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const [username,setUsername] = useState('');
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <h1>{username}</h1>
            <input placeholder='Enter Name' onChange={(event) => { setUsername(event.target.value) }} />
        </div>
    )
}

export default Counter; 