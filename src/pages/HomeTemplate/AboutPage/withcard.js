import React from 'react'

export default function Withcard(Comonent) {
 return function() {
    return (
        <div className="card">
            <div className="card-header"> Header</div>
            <div className="card-body">
                <Comonent />
            </div>
            <div className="card-footer text-muted">Footer</div>
        </div >
      );
 }
}
