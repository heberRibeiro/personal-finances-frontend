import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

export class Cards extends Component {
  componentDidUpdate() {
    // console.log(this.props.transaction);
  }

  render() {
    return (
      <div>
        {this.props.transaction === undefined && 'Caregando...'}
        {this.props.transaction !== undefined &&
          this.props.transaction.map(transaction => {
            let tag = transaction.type === '-' ? 'expense' : 'income';

            return <Card stylus={`${tag}`} key={transaction._id} transaction={transaction} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  period: state.periodReducer.period,
  data: state.infoReducer.data,
  releases: state.infoReducer.releases,
  incomes: state.infoReducer.incomes,
  expenses: state.infoReducer.expenses,
  balance: state.infoReducer.balance,
  transaction: state.infoReducer.transaction,
});

export default connect(mapStateToProps)(Cards);
