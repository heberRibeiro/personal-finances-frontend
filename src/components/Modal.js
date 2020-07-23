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
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className='modal-content'>
            <h4>Edição de Lançamento</h4>
            <div style={styles.content}>
              <form style={styles.form} className='col s12'>
                <p>
                  <label>
                    <input name='group1' type='radio' checked />
                    <span>Red</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name='group1' type='radio' />
                    <span>Yellow</span>
                  </label>
                </p>

                <div className='input-field col s12'>
                  <textarea id='description' className='materialize-textarea'></textarea>
                  <label for='description'>Descrição</label>
                </div>
                <div className='input-field col s12'>
                  <textarea id='category' className='materialize-textarea'></textarea>
                  <label for='category'>Categoria</label>
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
    flexDirection: 'row',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid gray',
    borderRadius: '5px',
  },
};
