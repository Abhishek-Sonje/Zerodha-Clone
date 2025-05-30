import React from "react";
import "./AccountCharges.css";
function  AddedServicesCharges() {
  return (
    <div className="account-charges">
      <div className="container account-charges-container" style={{paddingBottom:"80px"}}>
        <h2>Charges for optional value added services</h2>
        <table className="table border">
          <thead>
            <tr>
              <td scope="col">Service Billing </td>
              <td scope="col">Frquency</td>
              <td scope="col">Charges</td>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>Tickertape</td>
              <td> Monthly / Annual </td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase </td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td> Connect: 2000 | Historical: 2000</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddedServicesCharges;
