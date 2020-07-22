import React, { Component } from 'react';
import { connect } from 'react-redux';

import tranformPeriod from '../utils/tranformPeriod';
import releasesAction from '../store/modules/Releases/action';

import api from '../api';

export class Info extends Component {
  componentDidMount() {
    const monthYearCurrent = this.props.period;
    (async () => {
      const res = await api.get(tranformPeriod(monthYearCurrent));
      const releases = await res.data.lenght;
      await this.props.dispatch(releasesAction(releases));
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
    releases: state.releasesReducer.releases,
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
