import { useContext } from "react";
import { Contest1 } from "../contestapi-compo/Contestapi";



const About = () => {

    const useContesst = useContext(Contest1)
    
    return (
        <div>
            <button onClick={useContesst}>click two</button>
        </div>
    );
};

export default About;