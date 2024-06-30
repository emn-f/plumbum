import { useRef } from "react"
import { Link } from "react-router-dom"

export const Dashboard = () => {

    const counterRef = useRef(0);

    return (
        <div>
            <p>Dashboard</p>

            <p>Contador: { counterRef.current }</p>
            
            <button onClick={() => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current++)}>Somar</button>

            <Link to='/loginp'>Login</Link>


        </div>
    );
}