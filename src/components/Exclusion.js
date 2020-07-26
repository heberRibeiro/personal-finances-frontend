import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import * as api from '../api';

export default class Exclusion extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%',
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }
  datePicker(e) {
    const elems = e.target;
    const instances = M.Datepicker.init(elems, { format: 'yyyy-mm-dd' });
    instances.open();
  }
  deleteData = async e => {
    e.preventDefault();
    const id = this.props.transaction._id;

    await api.remove(id);
  };
  render() {
    return (
      <div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={`modalExclusion${this.props.transaction._id}`}
          className='modal'
          style={{ width: '65%' }}
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className='modal-content'>
            <div style={styles.header}>
              <h4>
                <b>Deseja excluir dado?</b>
              </h4>
              <div style={styles.close}>
                <i style={{ color: 'white' }} className='modal-close material-icons'>
                  close
                </i>
              </div>
            </div>
            <div>
              <form onSubmit={this.deleteData} className='col s12'>
                <button type='submit' className='waves-effect waves-light btn'>
                  Sim
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  close: {
    display: 'flex',
    width: '5vw',
    height: '7vh',
    borderRadius: 5,
    marginBottom: '0.912rem',
    backgroundColor: '#de1d1d',
    boxShadow: '3px 3px #905c5c',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
};
