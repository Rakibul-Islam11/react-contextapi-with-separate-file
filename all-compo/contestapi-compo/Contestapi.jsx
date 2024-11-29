import { createContext } from "react";

// Context তৈরি করা
export const Contest1 = createContext(); //এখন এই conapi কে আপনি useContest দিয়ে রিসিভ করে use করতে পারবেন


export const Fnn = ({ children }) => {// (১)
    const handle = () => {//এটাকেই আমারা pass করবো
        alert("clicked");
    };

    return (
        <Contest1.Provider value={handle}>
            {children}
        </Contest1.Provider>
    );
};

// (১) ==> React-এ children হলো একটি বিশেষ প্রপস (props), যা আপনার Fnn কম্পোনেন্টের ভেতরে অন্য কম্পোনেন্ট বা JSX কোড পাস করার সুযোগ দেয়।

// আপনার উদাহরণে:

// jsx
// Copy code
// <Fnn>
//   <Home />
//   <About />
// </Fnn>
// এখানে কী ঘটছে:
// Fnn কম্পোনেন্টের ভিতরে <Home /> এবং <About /> এই দুইটি কম্পোনেন্ট রাখা হয়েছে।
// এগুলো Fnn কম্পোনেন্টের প্রপস হিসেবে children নামে পৌঁছে।
