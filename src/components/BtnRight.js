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
          &gt;
        </button>
      </div>
    );
  }
}

const styles = {
  display: 'inline-block',
  width: 50,
  height: 35,
};

function mapStateToProps(state) {
  return { date: state.date };
}

export default connect(mapStateToProps)(BtnLeft);
