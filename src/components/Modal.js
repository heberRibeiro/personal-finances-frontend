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

  render() {
    return (
      <div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id='modal1'
          className='modal'
          style={{ width: '75%' }}
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className='modal-content'>
            <h4>Edição de Lançamento</h4>
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
              </form>
            </div>
          </div>
          <div className='modal-footer'>
            <i className='modal-close waves-effect waves-red btn-flat'>Disagree</i>
            <i className='modal-close waves-effect waves-green btn-flat'>Agree</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid gray',
    borderRadius: '5px',
  },
  input: {
    display: 'inline-block',
    margin: 14,
    // flexDirection: 'row',
    // justifyContent: 'center',
  },
};
