import React from 'react'

export default function Header(props) {
    return (
        <div>
    {props.title?<h2>This Is My Header</h2>: "Nh hai kuch"}
        </div>
    )
}
