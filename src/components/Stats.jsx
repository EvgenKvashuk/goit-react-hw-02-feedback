import { Component } from "react";
import css from "./Fadback.module.css"

class Stats extends Component {

    render() {

        return (
            <div className={css.wraper}>
                <h2 className={css.header}>Statistics</h2>

                <ul className={css.list}>
                    <li className={css.stat}><span>Good:</span><i></i></li>
                    <li className={css.stat}><span>Neutral:</span><i></i></li>
                    <li className={css.stat}><span>Bad:</span><i></i></li>
                    <li className={css.stat}><span>Total:</span><i></i></li>
                    <li className={css.stat}><span>Positive feedback:</span><i></i></li>
                </ul>
            </div>
        );
    };
};

export default Stats;