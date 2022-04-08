import React, { useState } from "react";
import './GoalFrom.css';
import Card from "../UI/Card";
const GoalFrom = (props) => {
    const [goalInput, setGoalInput] = useState('');
    const getDataHandler = (event) => {
        setGoalInput(event.target.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoalClick({ id: new Date().getTime(), data: goalInput });
        setGoalInput('');
    }
    return (
        <Card className="goal-form">
            <form onSubmit={onSubmitHandler}>
                <div className="goal-form__enter-area">
                    <label>Course Goal</label>
                    <input type="text" value={goalInput} required onChange={getDataHandler} />
                </div>
                <div className="goal-form__actions-area">
                    <button type="submit">Add Goal</button>
                </div>
            </form>
        </Card>
    );
}
export default GoalFrom;