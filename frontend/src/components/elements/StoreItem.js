import React from "react";
import { Grid } from '@material-ui/core';

import global from './images/global.png';
import shop from './images/shop.png';
import BranchItem from "../elements/BranchItem";

const StoreItem = ({ prop, func }) => {

  console.log(prop);
  return (
  <>
  <div className="listContainer">
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8}>
        <div>
          <p className="itemTitle">
            {prop.name}
          </p>
          <p className="itemSub">
            {prop.description}
            <br/>
            {prop.default_opening_hours}
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={2}>
        <div className="formCenterLabel">
          <img src={global} />
          <br/>
          <a className="formSub" href={prop.website_url}>
            Website
          </a>
        </div>
      </Grid>
      <Grid item xs={12} sm={2}>
        <div className="formCenterLabel">
          <img src={shop} />
          <br/>
          <a className="formSub">
            {prop.branch} branch
          </a>
        </div>
      </Grid>
    </Grid>
  </div>
  {prop.branches.map((data)=> {
        return <BranchItem
                  prop={data}
                  func={func}/>
    })}
  </>
  );

}

export default StoreItem;
