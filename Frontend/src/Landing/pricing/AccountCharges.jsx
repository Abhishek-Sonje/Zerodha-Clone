import React from "react";
import "./AccountCharges.css";
function AccountCharges() {
  return (
    <div className="account-charges">
      <div className="container account-charges-container">
        <h2>Charges for account opening</h2>
        <table className="table border">
          
          <thead>
            <tr>
              <td scope="col">Type of account</td>
              <td scope="col">Charges</td>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>Online account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>&#8377; 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only))
              </td>
              <td>&#8377; 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountCharges;
