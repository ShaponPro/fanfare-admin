import * as React from "react";
import NabBarComponent from 'src/components/NabBarComponent'

const createBrand = {
    background:' #ffffff',
    padding: '20px',
    boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)',
    borderRadius: '10px',
    border: '2px solid rgba(0, 0, 0, 0.05)',
    gap: '20px',
    width: '1315px',
    height: '304px'
  }
export default function CreateBrand() {
  return (
    <>
     <NabBarComponent/>
     <br/>
      <div style={createBrand}>
        <div>
            <b>Hello xyz</b>
            <p>
            Thank you for registering your account at our website. Your account need the approval before sign in. Please keep checking your email. Best regards Fanfare Bangladesh Ltd.
            </p>
            </div>
      </div>
    </>
  );
}