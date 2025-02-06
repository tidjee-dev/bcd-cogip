import React from 'react';

export default function Invoices() {
  return (
    <div className="containerInvoice" data-anim="2">
      <h3>New invoice</h3>
      <form method="POST">
        <div className="reference inputDiv">
          <input type="text" name="reference" id="reference" required />
          <label htmlFor="reference">Reference</label>
        </div>
        <div className="price inputDiv">
          <input type="number" name="price" id="price" required />
          <label htmlFor="price">Price</label>
        </div>
        <div className="companyName inputDiv">
          <input type="text" name="companyName" id="companyName" required />
          <label htmlFor="companyName">Company Name</label>
        </div>
        <input type="submit" value="save" className="btn" />
      </form>
    </div>
  );
}
