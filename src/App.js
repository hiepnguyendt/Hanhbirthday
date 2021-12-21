import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';


const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'g1', text: 'AWS Certified Cloud Practitioner' },
    { id: 'g2', text: 'AWS Certified Solutions Architect - Associate' },
  ]);

  const addNewGoalHandler = newGoal => {
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>My Goals</h2>
      <GoalList goals={courseGoals} />
      <NewGoal onAddGoal={addNewGoalHandler} />
    </div>
  );
  
};

export default App;
