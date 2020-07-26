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
        {this.props.filter === undefined && 'Caregando...'}
        {this.props.filter !== undefined &&
          this.props.filter.map(transaction => {
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
  filter: state.infoReducer.filter,
});

export default connect(mapStateToProps)(Cards);
