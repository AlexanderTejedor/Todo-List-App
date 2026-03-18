import React from "react";

const TodoHeader = ({ children, loading }) => {
  //crear un clon o un elemento a partir de otro
  //segundo argumento puede ser un objeto con las propiedades que tiene nuestro clon
  //Por dentro tiene varios metodos que nos ayuda a que React entienda las props.children
  return (
    <header>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading: loading }),
      )}
    </header>
  );
};

export { TodoHeader };
