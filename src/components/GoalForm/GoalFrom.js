import React, { useState } from "react";
import styles from './GoalFrom.module.css';
import Button from "../UI/Button";
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
        <div className={styles["goal-form"]}>
            <form onSubmit={onSubmitHandler}>
                <div className={`${styles['goal-form__enter-area']} ${!isValid ? styles['invalid'] : ''}`}>
                    <label>Course Goal</label>
                    <input type="text" value={goalInput} onChange={getDataHandler} />
                </div>
                <div className={styles["goal-form__actions-area"]}>
                    <Button type="submit">Add Goal</Button>
                </div>
            </form>
        </div>
    );
}
export default GoalFrom;