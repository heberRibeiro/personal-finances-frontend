import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Search extends Component {
  render() {
    return (
      <div className='container center'>
        <div style={styles.row} className='row'>
          <button className='waves-effect waves-light btn col s4'>+ Novo Lançamento</button>
          <div style={styles.input} className='input-field col s8'>
            <input style={styles.input} placeholder='Filtro' id='first_name' type='text' className='validate' />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

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
    marginTop: 40,
    marginBottom: 40,
    display: 'flex',
    alignItems: 'baseline',
  },
  span: {
    fontWeight: 'bold',
  },
  input: {
    margin: 0,
  },
};
