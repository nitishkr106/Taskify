import React, { useState } from 'react'
import rocket from './images/rocket.png'
import 'animate.css'

function TodoList() {
    const [activity,setActivity]=useState("");
    const[listData,setListData]=useState([]);
    const handlePress=(event)=>{
        if(event.key=='Enter'){
            addActivity();
        }
    }

    function addActivity()
    {
        // setListData([...listData,activity])
        // console.log(listData);  it will work asynchrous ..second click me updae hoga
        setListData((listData)=>{
            const updatedList=[...listData,activity]
            setActivity(''); //to make the box empty
            return updatedList;
        })
    }
    function removeActivity(i){
        const updatedListData=listData.filter((elem, id)=>{
            return i!=id; // jo index number id se match nhii ho rha usko return aur jo match ho gaya usko delete..
            //filter fnction ka kaam hi yehi h broooo
        })
        setListData(updatedListData);
    }
    function removeAll()
    {
        setListData([])
    }

  return (
    <>
        <div  className='container'>
            <div className='animate__animated animate__bounce'>
            <div className='header'> ✨TODO ✨ </div>
            </div>
        

            <input type='text' onKeyPress={(e)=>handlePress(e)} placeholder='Enter your activity which needs to be done....!!' value={activity} onChange={(e)=>
                setActivity(e.target.value)}></input>
                <button onClick={addActivity}>Add</button>
                
                 <div className='animate__heartBeat'>
                <p className='List-heading'> List of tasks are given below...✌</p>
                </div>
                {listData!=[]&& listData.map((data,i)=>{
                    return(
                        <>
                        
                            <p key={i}>
                                <div className='listData'>{data}</div>
                                <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(-)</button></div>
                            </p>
                        </>
                    )
                })}
                {listData.length>=1 && <button onClick={removeAll}> REMOVE ALL</button>}
                {/* <img className='rocket' src={rocket}/> */}
                <img className='rocket2' src={rocket}/>
                <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
</div>
        </div>
       
    </>
  )
            }

export default TodoList
