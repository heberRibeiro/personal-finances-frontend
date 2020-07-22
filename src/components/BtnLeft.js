import React, { Component } from 'react';
import { connect } from 'react-redux';

import enableDisableButtons from '../utils/enableDisableButtons';
import changePeriodState from '../utils/changePeriodState';

class BtnLeft extends Component {
  //

  componentDidMount() {
    const monthYearCurrent = this.props.period;
    enableDisableButtons.call(this, monthYearCurrent);
  }

  handleBtnLeft = e => {
    const monthYearCurrent = this.props.period;
    changePeriodState.call(this, monthYearCurrent);
  };

  render() {
    return (
      <div style={styles}>
        <button disabled={this.props.disabled} className='waves-effect waves-light btn' onClick={this.handleBtnLeft}>
          &lt;
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    period: state.dateReducer.period,
    disabled: state.btnLeftReducer.disabledBtnLeft,
  };
}

export default connect(mapStateToProps)(BtnLeft);

const styles = {
  display: 'inline-block',
  width: 50,
  height: 35,
};
