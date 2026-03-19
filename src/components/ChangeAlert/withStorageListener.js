import React from "react";

function withStorageListener(WrappedComponenet) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    return (
      <WrappedComponenet show={storageChange} toggleShow={setStorageChange} />
    );
  };
}

export { withStorageListener };
