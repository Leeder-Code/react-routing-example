import React from 'react';
import '../styles/ContactPage.css'
import {Prompt} from 'react-router-dom'
class ContactPage extends React.Component {
    state = { 
        value: ''
     }
     handleSubmit = (e) => {
         e.preventDefault()
         this.setState({
             value: ''
         })
     }
     onChange = (e) =>{
        this.setState({
            value: e.target.value
        })
     }

    render() { 
        return ( 
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>
                        Napisz do nas
                    </h3>
                    <textarea placeholder="Wiadomosc...." onChange={this.onChange} value={this.state.value}></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt 
                    when={this.state.value}
                    message="Ajjj"
                />
            </div>

         );
    }
}
 
export default ContactPage;