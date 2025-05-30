import React from 'react'
import './OpenAccount.css'

function OpenAccount() {
    return (
      <div className="container account-container">
        <div className="row text-center account-content">
          <h1 className="mb-4">Open a Zerodha account</h1>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button type="button" className="mt-3 account-btn ">
            Signup for free
          </button>
        </div>
      </div>
    );
}

export default OpenAccount;