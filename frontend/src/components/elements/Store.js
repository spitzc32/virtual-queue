import React from "react";
import { Grid } from '@material-ui/core';

import global from './images/global.png';
import shop from './images/shop.png';
import Branch from "../elements/Branch";

const Store = ({ prop, func }) => {

  console.log(prop);
  return (
  <div>
  <div className="listContainer">
    <Grid container spacing={3}>
      <Grid  xs={12} sm={8}>
        <div>
          <p className="Title">
            {prop.name}
          </p>
          <p className="Sub">
            {prop.description}
            <br/>
            {prop.default_opening_hours}
          </p>
        </div>
      </Grid>
      <Grid  xs={12} sm={2}>
        <div className="formCenterLabel">
          <img src={global} />
          <br/>
          <a className="formSub" href={prop.website_url}>
            Website
          </a>
        </div>
      </Grid>
      <Grid  xs={12} sm={2}>
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
        return <Branch
                  prop={data}
                  func={func}/>
    })}
  </div>
  );

}

export default Store;
