import PropTypes from 'prop-types';
import React from 'react';
import { initialState } from '../../constants/index.js';
import './style.scss';

Session.propTypes = {
  decrementSession: PropTypes.func,
  incrementSession: PropTypes.func,
  sessionLength: PropTypes.number,
  started: PropTypes.bool,
};

function Session(props) {
  const { incrementSession, decrementSession, sessionLength, started } = props;

  return (
    <div className="session">
      <p className="session__label">Session Length</p>
      <div className="session__control">
        <button
          className={`btn btn__increment ${
            (sessionLength === initialState.initSessionLength || started) && 'not-allowed'
          }`}
          onClick={incrementSession}
        >
          +
        </button>
        <p className="session__name">{sessionLength}</p>
        <button
          className={`btn btn__decrement ${(sessionLength === 1 || started) && 'not-allowed'}`}
          onClick={decrementSession}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Session;
