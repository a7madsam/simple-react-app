import React, { useState } from "react";
import './GoalFrom.css';
import Card from "../UI/Card";
const GoalFrom = (props) => {
    const [goalInput, setGoalInput] = useState('');
    const [isValid, setIsValid] = useState(true);
    const getDataHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setGoalInput(event.target.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (goalInput.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoalClick({ id: new Date().getTime(), data: goalInput });
        setGoalInput('');
    }
    return (
        <Card className="goal-form">
            <form onSubmit={onSubmitHandler}>
                <div className={`goal-form__enter-area ${!isValid ? 'invalid' : ''}`}>
                    <label>Course Goal</label>
                    <input type="text" value={goalInput} onChange={getDataHandler} />
                </div>
                <div className="goal-form__actions-area">
                    <button type="submit">Add Goal</button>
                </div>
            </form>
        </Card>
    );
}
export default GoalFrom;