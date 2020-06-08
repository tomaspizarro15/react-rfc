import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

const Main = (props) => {


    const charts = props.charts;

    console.log("MAIN", charts);


    return (
        <div className="main_container">
            <div className="main_header">
                <h1> Welcome to RFC code helper, let us introduce you</h1>
            </div>
            <div className="main_charts">
                <ul>
                    {charts.map(chart => {
                        return (
                            <li key={chart.id}>
                                <h1>{chart.title}</h1>
                                <div className="charts_value">
                                    <p>{chart.value}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="main_about">
                <h1>What is RFC Code Helper</h1>
                <p>RFC Is a free website, oriented to web desing, is dedicated to all those developers and engineers that want to progress everyday , learn new practices, new tips, solve complex problems, and more important, enjoy programming</p>
                <p>You will find tons of free courses about what we have learned in time, from programming basic concepts to modern JS libraries and syntaxes</p>
                <p>Also you can create groups of teamwork , with chats, and forums, you also can share your CV and Git-hub advances</p>
                <div className ="main_about_button">
                    <NavLink to="/register">Start now</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Main; 