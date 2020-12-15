import React from 'react';

// export default (props) => (
//   <h1 class="title">{props.title}</h1>
// )

//Usando la destructuración del objeto props la función de arriba nos quedaría así:

// export default ({ title }) => (
//   <h1 class="title">{title}</h1>
// )

// Utilizamos la prop especial children de forma que el título será lo que envolvamos
// en nuestro componente title, por lo que finalmente quedaría así:

export const Title = ({ children }) => (
    <h1 className="title">{children}</h1>
)
