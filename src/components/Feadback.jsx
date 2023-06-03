import { Component } from "react";
import css from "./Fadback.module.css";

class Feadback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrementForGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }

    handleIncrementForNeutral = evt => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    handleIncrementForBad = evt => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    render() {
        return (
            <div>
                <div className={css.wraper_btn}>
                    <h2 className={css.header}>Please leave feedback</h2>

                    <ul className={css.list_btn}>
                        <li><button className={css.button} type="button" onClick={this.handleIncrementForGood}>Good</button></li>
                        <li><button className={css.button} type="button" onClick={this.handleIncrementForNeutral}>Neutral</button></li>
                        <li><button className={css.button} type="button" onClick={this.handleIncrementForBad}>Bad</button></li>
                    </ul>
                </div>


                <div className={css.wraper}>
                    <h2 className={css.header}>Statistics</h2>

                    <ul className={css.list}>
                        <li className={css.stat}>
                            <span>Good:</span>
                            <span>{this.state.good}</span>
                        </li>

                        <li className={css.stat}>
                            <span>Neutral:</span>
                            <span>{this.state.neutral}</span>
                        </li>

                        <li className={css.stat}>
                            <span>Bad:</span>
                            <span>{this.state.bad}</span>
                        </li>

                        {/* <li className={css.stat}>
                            <span>Total:  {this.state.good}</span>
                        </li> */}

                        {/* <li className={css.stat}>
                            <span>Positive feedback:  {this.state.good}</span>
                        </li> */}
                    </ul>
                </div>
            </div>
        );
    };
};

export default Feadback;