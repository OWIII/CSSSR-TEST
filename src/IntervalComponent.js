import React from 'react';
import PropTypes from 'prop-types';
import { changeIntervalAction } from './actions/actions';
import { connect } from './connect/connect';

class IntervalComponent extends React.Component {
  render() {
    return (
      <div>
        <span>Интервал обновления секундомера: {this.props.interval} сек.</span>
        <span>
          <button onClick={() => this.props.changeIntervalAction(-1)}>-</button>
          <button onClick={() => this.props.changeIntervalAction(1)}>+</button>
        </span>
      </div>
    )
  }
}

IntervalComponent.propTypes = {
  interval: PropTypes.number.isRequired,
  changeIntervalAction: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
  interval: store.interval
});

const mapDispatchToProps = dispatch => ({
  changeIntervalAction: interval => dispatch(changeIntervalAction(interval))
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalComponent);