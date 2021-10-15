import React, { useCallback } from "react";
import { BootstrapScreenSizeElement } from "./components/BootstrapScreenSizeElement";
import { RentReceipt } from "./components/RentReceipt";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const handleClickPrint = useCallback(() => {
    window.print();
  }, []);
  return (
    <div>
      <div className="container d-print-none">
        <div className="flex-row my-2">
          <h3 className="text-center h3">Rent Receipt Printer</h3>
          <form>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Your Name
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                From
              </span>
              <input
                type="date"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
              <span className="input-group-text">To</span>
              <input
                type="date"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Amount
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="e.x. 23,000"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
              <div className="form-check mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Includes maintenance
                </label>
              </div>
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text">Address</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                rows={5}
              ></textarea>
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Landlord's Name
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Landlord's PAN #
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary rounded-0 d-print-none "
              onClick={handleClickPrint}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-printer-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-success rounded-0 d-print-none mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-share-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <RentReceipt
        amount="16,000"
        tenantName="Prakash Shrivastav"
        address="202 North Enclave, Nexus, Princeton, England - 9929"
        fromDt="01-Oct-2021"
        toDt="31-Oct-2021"
        landlordName="MUKESH KUMAR"
        panNo="PSTJP0122X"
      />

      <BootstrapScreenSizeElement />
    </div>
  );
};

// render(<App />, document.getElementById('root'));

export default App;
