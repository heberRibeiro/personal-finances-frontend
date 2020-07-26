import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';
import Buttons from './Buttons';
import Exclusion from './Exclusion';

export class Card extends Component {
  componentDidMount() {
    // console.log(this.props.values);
  }

  render() {
    return (
      <div className='container center'>
        <div style={styles[`${this.props.stylus}`]} className='row'>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }} className='col s12'>
            <div style={styles.day}>
              <b>{this.props.transaction.day}</b>
            </div>
            <div style={styles.description}>
              <div>
                <b>{this.props.transaction.category}</b>
              </div>
              <div>{this.props.transaction.description}</div>
            </div>
            <div style={styles.currency}>{this.props.transaction.value}</div>
            <Buttons transaction={this.props.transaction} />
            <Modal transaction={this.props.transaction} />
            <Exclusion transaction={this.props.transaction} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

const styles = {
  day: {
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10,
    width: '8.33%',
  },
  description: {
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10,
    width: '75%',
  },
  currency: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    width: 'auto',
    fontWeight: 'bold',
  },
  expense: {
    margin: 5,
    border: 30,
    borderRadius: 10,
    backgroundColor: 'LightCoral',
  },
  income: {
    margin: 5,
    border: 30,
    borderRadius: 10,
    backgroundColor: 'green',
  },
};
