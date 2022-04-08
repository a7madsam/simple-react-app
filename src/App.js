import React, { useState } from 'react';
import './App.css';
import GoalForm from './components/GoalForm/GoalFrom'
import Goals from './components/Goals/Goals';
function App() {
  const [goalsData, setGoalsData] = useState(
    [{ id: new Date().getTime(), data: "my name is ahmad" }]
  );
  const addGoalHandler = (data) => {
    setGoalsData((prevState) => {
      return [data, ...prevState];
    });

  }
  const deleteSelectedGoalHandler = (id) => {
    console.log(id);
    let filteredGoalsData = goalsData.filter((item) => {
      return item.id.toString() !== id.toString();
    })
    setGoalsData(filteredGoalsData);
  }
  return (
    <div className="App">
      <GoalForm onAddGoalClick={addGoalHandler} />
      <Goals content={goalsData} onDeleteSelectedGoal={deleteSelectedGoalHandler} />
    </div>
  );
}
export default App;
