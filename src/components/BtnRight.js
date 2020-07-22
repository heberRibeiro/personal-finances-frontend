import React, { Component } from 'react';
import { connect } from 'react-redux';

import enableDisableButtons from '../utils/enableDisableButtons';
import changePeriodState from '../utils/changePeriodState';

class BtnRight extends Component {
  //

  componentDidMount() {
    const monthYearCurrent = this.props.period;
    enableDisableButtons.call(this, monthYearCurrent);
  }

  handleBtnRight = e => {
    const monthYearCurrent = this.props.period;
    changePeriodState.call(this, monthYearCurrent, false);
  };
  render() {
    return (
      <div style={styles}>
        <button disabled={this.props.disabled} className='waves-effect waves-light btn' onClick={this.handleBtnRight}>
          &gt;
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    period: state.periodReducer.period,
    disabled: state.btnRightReducer.disabledBtnRight,
  };
}

export default connect(mapStateToProps)(BtnRight);

const styles = {
  display: 'inline-block',
  width: 50,
  height: 35,
};
