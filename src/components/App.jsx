// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const label = event.target.textContent;
    this.setState(prevState => {
      return { [label]: prevState[label] + 1 };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, n) => {
      return acc + n;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? Number.parseInt((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };
  render() {
    const options = this.state;

    return (
      <div>
        <section>
          <h2>ghjdla</h2>
          <h1>Please leave feedback</h1>
          <ul>
            {Object.keys(options).map(btnName => {
              return (
                <li key={btnName}>
                  <button type="button" onClick={this.handleIncrement}>
                    {btnName}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h1>Statistics</h1>
          <ul>
            <li>Cood: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total:{this.countTotalFeedback()}</li>
            <li>
              Positive Feedback: {this.countPositiveFeedbackPercentage()} %
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
