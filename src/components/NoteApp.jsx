import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.data = getInitialData().map((data) => ({
            ...data,
            createdAt: showFormattedDate(data.createdAt),
        }));

        this.state = {
            notes: this.data,
            search: '',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
        this.data = notes;
    }

    onArchiveHandler(id) {
        const archives = this.state.notes.map((note) => note.id === id ? {...note, archived: !note.archived} : note);
        this.setState({ notes: archives });
        this.data = archives;
    }

    onSearchChangeEventHandler(event) {
        this.setState({
            search: event.target.value
        }, () => {
            const notes = this.data.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
            this.setState({ notes });
        });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: showFormattedDate(new Date().toISOString()),
                    }
                ],
            };
        }, () => this.data = this.state.notes );

    }

    render() {
        return (
            <>
                <NoteAppHeader search={this.state.search} onSearch={this.onSearchChangeEventHandler} />
                <NoteAppBody notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} addNote={this.onAddNoteHandler} />
            </>
        );
    }
}

export default NoteApp;