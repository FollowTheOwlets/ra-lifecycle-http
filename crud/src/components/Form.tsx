import React, { Dispatch, SetStateAction, useRef } from 'react'
import Controller from '../utils/Controller';
import { INote } from '../models/models';

interface IFormProps {
    setNotes: Dispatch<SetStateAction<INote[]>>;
}

export const Form = ({ setNotes }: IFormProps) => {

    const note = useRef<HTMLTextAreaElement>(null);

    return (
        <div className="form">
            <div className="form-name">New Note</div>
            <textarea name="new" id="new" cols={30} rows={10} ref={note}></textarea>
            <button className="send" onClick={() => {
                if (note.current) {
                    Controller.append(note.current?.value).then((res) => setNotes(res));
                }
            }
            }>Отправить</button>
        </div>
    )
}
