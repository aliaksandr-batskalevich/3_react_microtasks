import React from 'react';

type HeaderPropsType = {
    infoHeader: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div>{props.infoHeader}</div>
    )
}