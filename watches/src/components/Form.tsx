import React, { Dispatch, SetStateAction, useRef } from 'react'
import { ITimeElement } from '../models/models';

interface IFormProps {
    setWatches: Dispatch<SetStateAction<ITimeElement[]>>;
}

export const Form = ({ setWatches }: IFormProps) => {
    const name = useRef<HTMLInputElement>(null);
    const hours = useRef<HTMLInputElement>(null);

    return (
        <div className="form">
            <div className="form-element">
                <label htmlFor='name' >Название</label>
                <input id='name' type="text" ref={name} />
            </div>
            <div className="form-element">
                <label htmlFor="hours" >Временная Зона</label>
                <input id="hours" type="text" ref={hours} />
            </div>
            <button onClick={() => {
                setWatches((prev) => {
                    if (name.current && hours.current) {
                        return [...prev, { name: name.current?.value, hours: parseInt(hours.current?.value) }];
                    }
                    return prev;
                });
            }}>Добавить</button>
        </div>
    )
}
