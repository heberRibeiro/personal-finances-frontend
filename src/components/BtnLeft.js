import React, { Component } from 'react';
import { connect } from 'react-redux';

class BtnLeft extends Component {
  handleBtnLeft(params) {
    //
  }
  render() {
    return (
      <div style={styles}>
        <button className='waves-effect waves-light btn' onClick={this.handleBtnLeft()}>
          &lt;
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { date: state.date };
}

export default connect(mapStateToProps)(BtnLeft);

const styles = {
  display: 'inline-block',
  width: 50,
  height: 35,
};
