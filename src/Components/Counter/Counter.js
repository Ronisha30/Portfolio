import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
export default function Counter({text}){
const [counter, setCounter] = useState(0);
const increment =() => setCounter(counter + 1);
const decrement =() => setCounter(counter - 1);
const inputChange = e =>{
    console.log('input change', e.target.value);
    hasSelectionSupport(e.target.value);
}
return <div>
<h1>{text} {counter}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<input type= 'number'onChange={inputChage}
>inputChange</input>
</div>

} 

