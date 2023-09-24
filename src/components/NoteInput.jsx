import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxTitle: 50,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;

        if (title.length <= 50) {
            this.setState({
                title,
                maxTitle: 50 - title.length,
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState({
            body: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        this.setState(() => {
            event.preventDefault();
            this.props.addNote(this.state);
        });
    }

    render() {
        return (
            <div className='note-input'>
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler} >
                    <p className='note-input__title__char-limit'>Sisa karakter: {this.state.maxTitle}</p>
                    <input className='note-input__title' type='text' placeholder='Ini adalah judul...' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className='note-input__body' placeholder='Tuliskan catatanmu di sini...' value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
                    <button type='submit'>Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;