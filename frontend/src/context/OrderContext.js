import React, { useState } from 'react';

const OrderContext = React.createContext([{}, () => {}]);

const OrderProvider = (props) => {
  const [order, setOrder] = useState({});
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {props.children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };