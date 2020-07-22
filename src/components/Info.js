import React, { Component } from 'react';
import { connect } from 'react-redux';

import tranformPeriod from '../utils/tranformPeriod';
import infoAction from '../store/modules/Info/action';

import api from '../api';

export class Info extends Component {
  componentDidMount() {
    const monthYearCurrent = this.props.period;
    (async () => {
      const res = await api.get(tranformPeriod(monthYearCurrent));
      const data = await res.data;
      const releases = await data.lenght;
      const transaction = await data.transaction;

      await this.props.dispatch(infoAction(data, releases, 200, 0, 0));
    })();
  }

  render() {
    return (
      <div className='container center'>
        <div style={styles.border}>
          <div style={styles.row} className='row'>
            <div className='col s3'>
              <span style={styles.span}>Lançamentos: </span>
              {this.props.releases}
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

const mapStateToProps = state => {
  return {
    period: state.periodReducer.period,
    data: state.infoReducer.data,
    releases: state.infoReducer.releases,
    incomes: state.infoReducer.incomes,
    expenses: state.infoReducer.expenses,
    balance: state.infoReducer.balance,
  };
};

export default connect(mapStateToProps)(Info);

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
