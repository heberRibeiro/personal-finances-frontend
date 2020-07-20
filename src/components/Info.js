import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Info extends Component {
  render() {
    return (
      <div className='container center'>
        <div style={styles.border}>
          <div style={styles.row} className='row'>
            <div className='col s3'>
              <span style={styles.span}>Lançamento:</span>
              {}
            </div>
            <div className='col s3'>
              <span style={styles.span}>Receitas:</span>
              {}
            </div>
            <div className='col s3'>
              <span style={styles.span}>Despesas:</span>
              {}
            </div>
            <div className='col s3'>
              <span style={styles.span}>Saldo:</span>
              {}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Info);

const styles = {
  border: {
    margin: 15,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  row: {
    margin: 0,
  },
  span: {
    fontWeight: 'bold',
  },
};
