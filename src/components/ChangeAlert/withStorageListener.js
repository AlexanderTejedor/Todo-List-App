import React from "react";

function withStorageListener(WrappedComponenet) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "todos_V1") {
        console.log("Hubo cambios en todos_V1");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WrappedComponenet show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
