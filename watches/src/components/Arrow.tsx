import React from 'react'

interface IArrowProps {
    type: string;
    deg: number;
}

export const Arrow = ({ type, deg }: IArrowProps) => {
    return (
        <div className={type} style={{ "--deg": deg } as React.CSSProperties}>
            <div></div>
        </div>
    )
}
