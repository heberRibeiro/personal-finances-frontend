import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Modal extends Component {
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
    const instances = M.Datepicker.init(elems);
    instances.open();
  }
  render() {
    return (
      <div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id='modal1'
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
                <b>Edição de Lançamento</b>
              </h4>
              <div style={styles.close}>
                <i style={{ color: 'white' }} className='modal-close material-icons'>
                  close
                </i>
              </div>
            </div>
            <div style={styles.content}>
              <form style={styles.form} className='col s12'>
                <div>
                  <p style={styles.input}>
                    <label>
                      <input name='group1' type='radio' defaultChecked />
                      <span>Despesa</span>
                    </label>
                  </p>
                  <p style={styles.input}>
                    <label>
                      <input name='group1' type='radio' />
                      <span>Receita</span>
                    </label>
                  </p>
                </div>
                <div className='input-field col s12'>
                  <textarea className='materialize-textarea'></textarea>
                  <label htmlFor='description'>Descrição</label>
                </div>
                <div className='input-field col s12'>
                  <textarea className='materialize-textarea'></textarea>
                  <label htmlFor='category'>Categoria</label>
                </div>
                <div style={{ padding: '0 .75rem', display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}>
                  <div style={styles.value} className='input-field'>
                    <textarea className='materialize-textarea'></textarea>
                    <label htmlFor='value'>Valor</label>
                  </div>
                  <div style={styles.datePicker}>
                    <input style={styles.inputDataPicker} onClick={this.datePicker} type='text' className='datepicker col s6'></input>
                    <i style={styles.icon} className='small material-icons'>
                      date_range
                    </i>
                  </div>
                </div>
              </form>
            </div>
            <button class='waves-effect waves-light btn'>Salvar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

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
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    marginBottom: '10px',
    justifyContent: 'center',
    border: '1px solid gray',
    borderRadius: '5px',
  },
  input: {
    display: 'inline-block',
    margin: 14,
  },
  datePicker: {
    marginTop: '1rem',
    marginBottom: '1rem',
    marginLeft: '1rem',
    padding: '0 10.5px',
    height: 40,
    width: '50%',
    border: '1px solid grey',
    borderRadius: 5,
  },
  value: {
    width: '50%',
  },
  inputDataPicker: {
    borderBottom: 0,
    boxShadow: '0 0',
    width: '85%',
  },
  icon: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
};
