import React from 'react'
import './Lot.css'
import {useEffect,useState} from 'react'

    

export default function Lot() {
    var seatsused=[];
  var obj,obj1;
  const [count, setCount] = useState(24);

  var av=24;
  var nonav=0;
  var i;
  var time=0;
  var url="http://localhost:8080/file"
    const fetchData= async()=>{
        if(time==10)
   {
       clearInterval(fun)
   }

     const data= await fetch(url)
     .then(res => res.json())
     .then(data => {
         console.log(data)
         var av=24
         for (i in data)
         {
           if(data[i]==0)
           {
           obj=document.getElementById(i)
           obj.style.color="black"
           obj.style.border="3px solid  #393053"
           obj.style.backgroundColor="#daa8a8"

           av--;
           //console.log(obj)
           //setCount(count - 1)
           console.log(count)
           }
           else if(data[i]==1)
           {
            obj=document.getElementById(i)
            obj.style.color="black"
            obj.style.border="3px solid #90EE90F "
            obj.style.backgroundColor="#90EE90"
           }

         }
         setCount(av)
         
 
     })
    }

    
    
    seatsused=fetchData()
    
     const fun=setInterval(()=>{
        fetchData();
        console.log(time)
        time++;

    },10000)
    
    
    
  return (
    <div id="slot">
      <div id="av">Parking Lot</div>
      <div id="master">
      <div className="masterbox" >
      <div className="box" id="0">0</div>
        <div className="box" id="1">1</div>
        <div className="box" id="2">2</div>
        <div className="box" id="3">3</div>
        <div className="box" id="4">4</div>
        <div className="box" id="5">5</div>
       
      </div>
      <div className="masterbox" >
      <div className="box" id="6">6</div>
        <div className="box" id="7">7</div>
        <div className="box" id="8">8</div>
        <div className="box" id="9">9</div>
        <div className="box" id="10">10</div>
        <div className="box" id="11">11</div>
        
      </div>
      <div className="masterbox" >
      <div className="box" id="12">12</div>
        <div className="box" id="13">13</div>
        <div className="box" id="14">14</div>
        <div className="box" id="15">15</div>
        <div className="box" id="16">16</div>
        <div className="box" id="17">17</div>
        
      </div>
      <div className="masterbox" >
      <div className="box" id="18">18</div>
        <div className="box" id="19">19</div>
        <div className="box" id="20">20</div>
        <div className="box" id="21">21</div>
        <div className="box" id="22">22</div>
        <div className="box" id="23">23</div>
       
      </div>
     
    </div>
   
    </div>
  )
}
