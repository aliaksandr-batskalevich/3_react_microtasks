import React from 'react';

type FooterPropsType = {
    infoFooter: string
}

export const Footer = (props: FooterPropsType) => {
    return (
        <div>{props.infoFooter}</div>
    )
}