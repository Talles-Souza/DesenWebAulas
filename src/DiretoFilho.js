import React from "react";

export function ComponenteFilho (props) {
return(
    <>
    <div>
        <h2>
            {props.name}
        </h2>
    </div>
    <div>
        <h2>
            {props.idade}
        </h2>
    </div>
    <div>
        <h2>
            {props.nerd ? "verdadeiro" : "falso"}
        </h2>
    </div>
    </>
);
}