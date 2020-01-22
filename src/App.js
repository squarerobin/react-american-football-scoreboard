//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  //stretch: quarterUpdate Hook
  const [currentQuarter, setCurrentQuarter] = useState(1);
  const [counter, setCounter] = useState(0);
  /* STRETCH GOAL:
Add a button that changes which quarter the game is in, 
and then render the state quarter value on the scoreboard */
  const quarterUpdate = e => {
    if (currentQuarter < 4) {
      setCurrentQuarter(currentQuarter + 1);
    } else {
      if (counter === 4) {
        setCurrentQuarter("OT");
        setCounter(0);
      } else {
        setCurrentQuarter(1);
        setCounter(counter + 1);
      }
    }
  };

  const homeTouchDown = e => {
    setHomeScore(homeScore + 7);
  };

  const awayTouchDown = e => {
    setAwayScore(awayScore + 7);
  };

  const homeFieldGoal = e => {
    setHomeScore(homeScore + 3);
  };

  const awayFieldGoal = e => {
    setAwayScore(awayScore + 3);
  };

  const [h, setH] = useState(0)
  const [m, setM] = useState(0)
  const [s, setS] = useState(0)
     
      
      
   
   
  

   function checkTime(i) {
     if (i < 10) {
       i = "0" + i;
     } // add zero in front of numbers < 10
     return i;
   } 

  const startTime =  () => {
     
     if(s === 60){
          setS(0)
          setM(m+1)

      }
      if(m === 60){
        setM(0)
        setH(h+1)
      }
  }
      
    
      useEffect(() =>  {
  
       
      
        
          setInterval (() => setS(s+1), 1000)
               
      }, [s])
     
      
    
  
  
    
    //var t = setTimeout(startTime, 500);
  
 




  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{`${h}:${m}:${s}`}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{currentQuarter}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchDown} className="homeButtons__touchdown">
            Home Touchdown
          </button>
          <button onClick={homeFieldGoal} className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button onClick={awayTouchDown} className="awayButtons__touchdown">
            Away Touchdown
          </button>
          <button onClick={awayFieldGoal} className="awayButtons__fieldGoal">
            Away Field Goal
          </button>
        </div>
        <div className="quarterButton">
          <button
            onClick={quarterUpdate}
            className="quarterButton__quarterUpdate"
          >
            Quarter Update
          </button>
          <div className="startButton">
            <button
              onClick={startTime} //TODO style this button and see what I need to do to use it to start the timer
              className="quarterButton__quarterUpdate"
            >
              Quarter Update
            </button>
          </div>
          <button
            onClick={quarterUpdate}
            className="quarterButton__quarterUpdate"
          >
            Quarter Update
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
