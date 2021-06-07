import React, { useState } from 'react';

const BranchContext = React.createContext([{}, () => {}]);

const BranchProvider = (props) => {
  const [branch, setBranch] = useState({});
  return (
    <BranchContext.Provider value={[branch, setBranch]}>
      {props.children}
    </BranchContext.Provider>
  );
}

export { BranchContext, BranchProvider };