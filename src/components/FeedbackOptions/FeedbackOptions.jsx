// import React, { Component } from "react";

// class FeedbackOptions extends Component {

//     render() {
//         return (
//             <div>

//                 <div >
//                     <h2 >Please leave feedback</h2>

//                     <ul >
//                         <li>
//                             <button type="button" onClick={this.handleIncrmGood}>Good</button>
//                         </li>

//                         <li>
//                             <button type="button" onClick={this.handleIncrmNeutral}>Neutral</button>
//                         </li>

//                         <li>
//                             <button type="button" onClick={this.handleIncrmBad}>Bad</button>
//                         </li>
//                     </ul>
//                 </div>

//             </div>
//         );
//     }
// };

// export default FeedbackOptions;



import React from "react";
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({onLeaveFeedback}) =>  {
        return (
            <div>

                <div className={css.wraper_btn}>
                    <h2 className={css.header}>Please leave feedback</h2>

                    <ul className={css.list_btn}>
                        <li >
                            <button className={css.button} type="button" onClick={onLeaveFeedback[0]}>Good</button>
                        </li>

                        <li >
                            <button className={css.button} type="button" onClick={onLeaveFeedback[1]}>Neutral</button>
                        </li>

                        <li >
                            <button className={css.button} type="button" onClick={onLeaveFeedback[2]}>Bad</button>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }

export default FeedbackOptions;