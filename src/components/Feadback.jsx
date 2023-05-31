import { Component } from "react";
import css from "./Fadback.module.css";
import Stats from "./Stats";

class Feadback extends Component {

    method = () => {
        console.log('click');
        console.log(this);
        this.setState({ good: 1 })
    };

    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    render() {
        const { good, neutral, bad, } = this.state
        console.log(good)

        return (
            <div>
                <div className={css.wraper_btn}>
                    <h2 className={css.header}>Please leave feedback</h2>

                    <ul className={css.list_btn}>
                        <li><button className={css.button} type="button" onClick={this.method}>Good</button></li>
                        <li><button className={css.button} type="button" onClick={this.method}>Neutral</button></li>
                        <li><button className={css.button} type="button" onClick={this.method}>Bad</button></li>
                    </ul>
                </div>

                {good && <Stats />}
            </div>
        );
    };
};

export default Feadback;