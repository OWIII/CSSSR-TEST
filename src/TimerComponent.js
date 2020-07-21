import React from 'react';
import PropTypes from 'prop-types';
import IntervalComponent from './IntervalComponent';
import { clearIntervalAction, goTimerAction } from './actions/actions';
import { connect } from './connect/connect';

class TimerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.setInt = null;
    this.delay = 1000;
  }


  handleStart() {
    if (this.props.interval) {
      this.setInt = setInterval(() =>
      this.props.goTimerAction(), this.props.interval * this.delay);
    }
  }

  handleStop() {
    clearInterval(this.setInt);
    this.props.clearIntervalAction();
  }

  render() {
    return (
      <div>
        <IntervalComponent />
        <div>
          Секундомер: {this.props.currentTime} сек.
        </div>
        <div>
          <button onClick={() => this.handleStart()}>Старт</button>
          <button onClick={() => this.handleStop()}>Стоп</button>
        </div>
      </div>
    );
  }
}

TimerComponent.propTypes = {
  currentTime: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  clearIntervalAction: PropTypes.func.isRequired,
  goTimerAction: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
  currentTime: store.currentTime,
  interval: store.interval,
});

const mapDispatchToProps = dispatch => ({
  clearIntervalAction: () => dispatch(clearIntervalAction()),
  goTimerAction: () => dispatch(goTimerAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerComponent);
