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

      const { data, releases, incomes, expenses, balance, transaction } = res;

      await this.props.dispatch(infoAction(data, releases, incomes, expenses, balance, transaction));
    })();
  }

  render() {
    return (
      <div className='container center'>
        <div style={styles.border}>
          <div style={styles.row} className='row'>
            <div className='col s3'>
              <span style={styles.span.generic}>Lançamentos: </span>
              <span>{this.props.releases}</span>
            </div>
            <div className='col s3'>
              <span style={styles.span.generic}>Receitas: </span>
              <span style={styles.span.income}>
                {Number.parseFloat(this.props.incomes).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <div className='col s3'>
              <span style={styles.span.generic}>Despesas: </span>
              <span style={styles.span.expenses}>
                {Number.parseFloat(this.props.expenses).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <div className='col s3'>
              <span style={styles.span.generic}>Saldo: </span>
              <span style={styles.span.balance}>
                {Number.parseFloat(this.props.balance).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
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
    generic: {
      fontWeight: 'bold',
    },
    income: {
      fontWeight: 'bold',
      color: 'green',
    },
    expenses: {
      fontWeight: 'bold',
      color: 'red',
    },
    balance: {
      fontWeight: 'bold',
      color: 'green',
    },
  },
};
