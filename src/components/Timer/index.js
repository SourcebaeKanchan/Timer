import {  useEffect, useState } from "react"
import "./timer.css"


function Timer()
{
     const [seconds,setSeconds] = useState(0)
     const [minutes,setMinutes] = useState(0)
     const [ timerId, setTimerId]  = useState(0)
     const [min , setMin] =useState(100)
     const [sec , setSec] = useState(60)
     const [m, setM] = useState(0)
     const [s,setS] = useState(0)
     const [flag, setFlag] = useState(true)
    
     
     useEffect(()=>{
        
        if(seconds > 59  )
        {
            setMinutes(minutes => minutes +1)
              setSeconds(0);
        
        }
        if(minutes > min-1)
        {
            
        if(seconds > sec -1  )
        {
            stop()
            setMin(100)
            setSec(60)        
        }
        }

     },[seconds,sec,minutes,min])

    const start = () =>
    {
         if(flag===true)
            {
                setFlag(false)           
                let timer =  setInterval(() => {

                     setSeconds(seconds => seconds + 1);

                       }, 100);
                       
                  setTimerId(timer)
            }  
    }
    const stop = () => 
    {
        setFlag(true)
       clearInterval(timerId);
    }

    const reset = () =>{
        setMinutes(0)       
        setSeconds(0) 
        setM(0)
        setS(0)
      
        
    }

    function submitData()
    {
        // let  regx = /^[0-5][0-9]$/
        const pattern1 = new RegExp(/^[1-5][0-9]$/); //seconds upto 10-59
        const pattern3 = new RegExp(/^[0-9]$/);//for seconds upto 0-9
        const pattern2 = new RegExp(/^\d{1,3}$/); //minutes maximum upto 999

        setM(document.getElementById("Min").value)
        setS(document.getElementById("Sec").value)
      
        if(m===0 && s === 0)
        {
            alert("Minimum Time can be fixed as 1 sec only  ")
            return true
            
        }
        else
        {
                  if(s<10)
                    {
                        if(pattern2.test(m) && pattern3.test(s) )
                                {
                                //  console.log("correct time")
                                setSec(s)
                                setMin(m)
                                reset()
                                start()
                               
                                }
                                else
                                {
                                //console.log("Incorrect Time")
                                alert("Please Enter Valid Time 1")
                                } 
                    }
                    else
                    {
                        if(pattern2.test(m) && pattern1.test(s) )
                                {
                                    //console.log("correct time")
                                    setSec(s)
                                    setMin(m)
                                    reset()
                                    start()
                                 
                                }
                                else
                                {
                            // console.log("Incorrect Time")
                            alert("Please Enter Valid Time 2")
                                
                                } 
                    }
        }
    }

    return(
    <div className = "timer-block" >
        <h1 className="heading"> Timer</h1>
        <h1> {minutes} : {seconds}</h1>
        
        <div className="button-div">
        <button onClick={()=>start()} id= "green" className="common_css"> Start </button>
        <button onClick={()=>stop()} id= "red" className="common_css"> Stop </button>
        <button onClick={()=>reset()} id= "blue" className="common_css"> Reset </button><br></br>
        </div>

        
        <div className="input-div">
        <div className="abc">
        <h3 > Enter Minutes </h3>  <h3> Enter Seconds </h3>
        </div>
        
       <input type="number" placeholder="Enter Min"  onClick={()=>setM("")}  onChange={(e)=>setM(e.target.value)} value={m} id = "Min" />
       <input type="number" placeholder="Enter Sec" onClick={()=>setS("")} onChange={(e)=>setS(e.target.value)}  value={s} id="Sec"  /><br></br>
        </div>
        <div className="submit-btn">
        <button onClick={submitData} id ="blue" className="common_css">Submit</button> 
        </div>
        

    </div>
)
}

export default Timer