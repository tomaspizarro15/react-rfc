import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

const Main = (props) => {


    const charts = props.charts;

    console.log("MAIN", charts);


    return (
        <div className="main_container">
            <div className="main_header">
                <h1> Im writing something that will be great, I ensure</h1>
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
                <h1>What is RFC </h1>
                <p>RFC Is like my children, im helping him to grow up , feeding him with codelines, spending time with it, my beloved project </p>
                <p>The plan for this project is to be a full dinamic Selling website, like Amazon, Ebay or Mercadolibre</p>
                <p>I will update the site status in my github and social media</p>
                <div className ="main_about_button">
                    <NavLink to="/register">Start now</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Main; 