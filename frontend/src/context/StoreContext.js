import React, { useState } from 'react';

const StoreContext = React.createContext([{}, () => {}]);

const StoreProvider = (props) => {
  const [store, setStore] = useState({});
  return (
    <StoreContext.Provider value={[store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };