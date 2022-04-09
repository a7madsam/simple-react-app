import React from "react";
import styles from './Goals.module.css'

const Goals = (props) => {
    const onClickHandler = (event) => {
        props.onDeleteSelectedGoal(event.target.id)
    }
    return (
        <div className={styles["goals-container"]}>
            {props.content.map((item, index) => {
                return <div key={index} id={item.id} className={styles["goals-container__goal"]} onClick={onClickHandler}>{item.data}</div>
            })}
        </div>
    );
}
export default Goals;