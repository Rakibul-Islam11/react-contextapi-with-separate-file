import { useContext } from "react";
import { Contest1 } from "../contestapi-compo/Contestapi";


const Home = () => {
    const useContesst = useContext(Contest1)
    return (
        <div>
            <button onClick={useContesst}>click</button>
        </div>
    );
};

export default Home;