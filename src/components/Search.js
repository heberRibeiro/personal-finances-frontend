import React, { Component } from 'react';
import { connect } from 'react-redux';

import searchAction from '../store/modules/Search/action';

export class Search extends Component {
  componentDidMount() {
    //
  }

  searchTransaction = e => {
    const valueSearched = e.target.value;

    const filtered = this.props.transaction.filter((transaction, index) => {
      return transaction.description.includes(valueSearched);
    });

    this.props.dispatch(searchAction(filtered));
  };

  render() {
    return (
      <div className='container center'>
        <div style={styles.row} className='row'>
          <button className='waves-effect waves-light btn col s4 material-icons modal-trigger' data-target={'modalCreate'}>
            + Novo Lançamento
          </button>
          <div style={styles.input} className='input-field col s8'>
            <input onChange={this.searchTransaction} style={styles.input} placeholder='Filtro' id='first_name' type='text' className='validate' />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transaction: state.infoReducer.transaction,
  filter: state.infoReducer.filter,
});

export default connect(mapStateToProps)(Search);

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
