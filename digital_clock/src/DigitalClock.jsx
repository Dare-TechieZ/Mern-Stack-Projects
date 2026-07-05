import react,{useEffect,useState} from 'react'
function DigitalClock() {
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        const intervalID=setInterval(()=>{//for every 1000 milliseconds,updaate the time
            setTime(new Date())//setInterval is also a built-in fucntion by browser
        },1000)

        return ()=>{//function to clear interval
            clearInterval(intervalID)//clearInterval is built-in func by browser which clears interval set earlier
        }

    },[])

    function formatTime(){
        let hours=time.getHours()
        let minutes=time.getMinutes()
        let seconds=time.getSeconds()
        const meridiem=hours>=12?'PM':'AM'
        hours=hours%12||12
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    //1:30 should be 01:30,same for hrs,mins & secs
    function padZero(number){
        if(number<10){//single digit?
            return `0${number}`
        }
        return number
    }

    //5 july 2026
    function formatDate(){
        const options={
            year:'numeric',
            month:'long',
            day:'numeric'
        }
        return time.toLocaleDateString('en-US',options)
    }
    return(
        <>
        <div className='clock-container'>
            
            <div className='clock'>
                <span className='time'>{formatTime()}</span>
            </div>
            <div className='date'>{formatDate()}</div>
        </div>
        </>
    )
}
export default DigitalClock