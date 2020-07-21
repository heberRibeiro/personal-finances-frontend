import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Buttons extends Component {
  render() {
    return (
      <div style={styles.button}>
        <i style={styles.cursor} class='material-icons'>
          mode_edit
        </i>
        <i style={styles.cursor} class='material-icons'>
          delete
        </i>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

const styles = {
  button: {
    display: 'flex',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    width: 'auto',
  },
  cursor: {
    cursor: 'pointer',
    padding: 5,
  },
};
