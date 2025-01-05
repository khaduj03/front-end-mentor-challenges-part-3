import { createContext, useState } from "react";


type MyContext = {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>; // تغییر نوع برای پشتیبانی از callback
    backers: number;
    setBackers: React.Dispatch<React.SetStateAction<number>>; // تغییر نوع برای پشتیبانی از callback
  };
  
export const Counter = createContext<MyContext | undefined>(undefined);

interface CounterProps{
    children:React.ReactNode;
}

const CounterProvider=({children}:CounterProps)=>{
    const INITIAL_TOTAL = 3758;
    const TOTAL_BACKERS=5007
    const [total, setTotal] = useState<number>(INITIAL_TOTAL);
    const[backers , setBackers]=useState<number>(TOTAL_BACKERS)


    
  const contextValue: MyContext = {
    total,
    setTotal,
    backers,
    setBackers
  };

    return(
        <Counter.Provider value={contextValue}>
            {children}
        </Counter.Provider>
    )
}

export default CounterProvider;