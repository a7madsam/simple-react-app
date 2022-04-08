import React from "react";
import './Goals.css'

const Goals = (props) => {
    const onClickHandler = (event) => {
        props.onDeleteSelectedGoal(event.target.id)
    }
    return (
        <div className="goals-container">
            {props.content.map((item, index) => {
                return <div key={index} id={item.id} className="goals-container__goal" onClick={onClickHandler}>{item.data}</div>
            })}
        </div>
    );
}
export default Goals;