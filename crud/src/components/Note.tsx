
import React, { Dispatch, SetStateAction } from 'react'
import { INote } from '../models/models';
import Controller from '../utils/Controller';

interface INoteProps {
    note: INote;
    setNotes: Dispatch<SetStateAction<INote[]>>;
}

export const Note = ({ note, setNotes }: INoteProps) => {
    return (
        <div className="note">
            <div className="content">
                {note.content}
            </div>
            <button className="remove-note" onClick={() => {
                Controller.delete(note.id).then((res) => setNotes(res));
            }}>x</button>
        </div>
    )
}
