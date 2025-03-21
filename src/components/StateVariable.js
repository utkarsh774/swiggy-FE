import React,{useState} from "react"


const StateVariable = () =>
{
    console.log("MEDI")
    const [count,setCount] = useState(0)
    const countHandleAdd = () =>
    {
        setCount(count+1)
    }
    const countHandleSub = () =>
        {
            if(count<=0) return
            setCount(count-1)
        }
        
    return(
        <>

        <div className=" h-screen flex flex-row items-center justify-center bg-gray-200">
        
        <button className="px-10 py-1 bg-red-500 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-red-600 transition-all"
        onClick = {countHandleAdd}
        >+</button>
        <div className="text-2xl font-bold ">{count}</div>
         <button className="px-10 py-1 bg-red-500 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-red-600 transition-all"
          onClick = {countHandleSub}
          >-</button>
        </div>
      
        </>
    )
}

export default StateVariable