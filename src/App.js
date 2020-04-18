import React, { useState } from 'react';
import logo from './logo.svg';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import './App.css';

Modal.setAppElement('#root');

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">

        <div className="content">
            <div className="perspective">
                <button className="button" onClick={()=> setModalIsOpen(true)}>Open modal</button>
            </div>

            <img src={logo} className="App-logo" alt="logo" />
        </div>

      <Modal isOpen={modalIsOpen}
             shouldCloseOnOverlayClick={true}
             onRequestClose={()=> setModalIsOpen(false)}
             style={
                 {
                   overlay: {
                     backgroundColor: 'rgba(0,0,0,0.6)'
                   },
                   content: {
                    color: '#333',
                       textAlign: 'center',
                       maxWidth: '600px',
                       width: '100%',
                       margin: '0 auto',
                       top: '50%',
                       left: '50%',
                       right: 'auto',
                       transform: 'translate(-50%, -50%)',
                       bottom: 'auto'
                   }
                 }
             }
      >
        <h2>Hello</h2>
        <p>Contact Us</p>

          <form>
              <fieldset>
                  <div className="field">
                      <label for="name">Name: </label>
                      <input type="text" name="name" id="name" required={true}/>
                  </div>
                  <div className="field">
                      <label for="email">Email: </label>
                      <input type="email" name="email" id="email" required={true}/>
                  </div>
              </fieldset>

              <button type="submit" title="Submit" className="button submit">
                  <span>SEND</span>
              </button>
          </form>

        <button className="button-close" onClick={()=> setModalIsOpen(false)}><MdClose /></button>
      </Modal>
    </div>
  );
}

export default App;
