import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  // =====================================================================================================================
  // custom methods
  handleIncrmGood = () => {
    this.setState(preventState => ({
      good: preventState.good + 1,
    }))
    console.log('1')
  };

  handleIncrmNeutral = () => {
    this.setState(preventState => ({
      neutral: preventState.neutral + 1,
    }))
    console.log('2')
  };

  handleIncrmBad = () => {
    this.setState(preventState => ({
      bad: preventState.bad + 1,
    }))
  };
  // =================================================================================================================
  // counting
  countTotalFeedback = () => {

  }

  // countPositiveFeedbackPercentage()

  // =====================================================================================================================
  render() {

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={options}
            onLeaveFeedback={[this.handleIncrmGood, this.handleIncrmNeutral, this.handleIncrmBad]}
          />
        </Section>

        <Section title="Statistics">
          {(this.state.good + this.state.neutral + this.state.bad) !== 0 ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.good + this.state.neutral + this.state.bad}
              positivePercentage={Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100)}
            />
            : <Notification message="There is no feedback"></Notification>}
        </Section>
      </>
    );
  };
}

export default App;


