import React, { useEffect, useState } from "react";
import { Container, Grid } from '@material-ui/core';

import StoreItem from "../elements/StoreItem";
import BranchItem from "../elements/BranchItem";

const WorkerDetails = ({ prevStep, nextStep, getId, values }) => {
  const [storeItem, setStoreItem] = useState([]);
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  };

  const Previous = e => {
    e.preventDefault();
    prevStep();
  };



  useEffect(() => {
    let st = values.store.map((item) => item);
    st.forEach((item) => {
      item.branch= item.branches.length
    });
    setStoreItem(st);
  },[])


  return (
    <Container  component="main" maxWidth="xl">
      <div className="formCenter">
        <div className="formTitle">
          Step 3: Worker Details
          <p className="formSub">
            Select the Store and Branch you work at.
            This will help us productively queue customers if
            we have enough data to assign you to one.
          </p>
        </div>
      </div>

      {storeItem.map((data)=> {
        return <div key={data.id}>
        <StoreItem
           prop={data}
           func={getId}
        />
        </div>
      })}

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className="formField">
              <button
                className="formFieldButton"
                onClick={ Previous }
                type="submit"
               >
                Previous
              </button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="formField">
              <button
                className="formFieldButton"
                onClick={ Continue }
                type="submit"
               >
                Next
              </button>
            </div>
          </Grid>
        </Grid>
    </Container>
  );
}

export default WorkerDetails;


