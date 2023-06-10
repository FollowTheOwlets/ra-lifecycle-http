import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { ITimeElement } from '../models/models'
import { Arrow } from './Arrow';

interface IWatchProps {
    time: ITimeElement;
    setWatches: Dispatch<SetStateAction<ITimeElement[]>>;
}

export const Watch = ({ time, setWatches }: IWatchProps) => {
    const now = (date: Date = new Date()) => [date.getUTCSeconds(), date.getUTCMinutes(), time.hours + date.getTimezoneOffset() / 60 - 1];

    let [watch, setWatch] = useState(now());

    useEffect(() => {
        const interval = setInterval(() => {
            setWatch(now());
        }, 100);

        return () => { clearInterval(interval) };
    }, []);


    return (
        <div className="watch">
            <div className="name">
                {time.name}
            </div>
            <div className="circle">
                <Arrow type={"seconds"} deg={6 * watch[0]} />
                <Arrow type={"minuts"} deg={6 * watch[1]} />
                <Arrow type={"hours"} deg={360 / 24 * watch[2]} />
            </div>
            <button className="remove" onClick={() => {
                setWatches((prev) => {
                    return prev.filter((e) => e !== time);
                })
            }}>X</button>
        </div>
    )
}
