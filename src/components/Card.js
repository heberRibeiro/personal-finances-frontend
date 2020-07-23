import React, { Component } from 'react';
import { connect } from 'react-redux';

import Buttons from './Buttons';

export class Card extends Component {
  componentDidMount() {
    console.log(this.props.values);
  }

  render() {
    return (
      <div className='container center'>
        <div style={styles.row} className='row'>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }} className='col s12'>
            <div style={styles.day}>
              <b>{this.props.values.day}</b>
            </div>
            <div style={styles.description}>
              <div>
                <b>{this.props.values.category}</b>
              </div>
              <div>{this.props.values.description}</div>
            </div>
            <div style={styles.currency}>{this.props.values.value}</div>
            <Buttons />
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
  row: {
    margin: 5,
    border: 30,
    borderRadius: 10,
    backgroundColor: 'LightCoral',
  },
};
