import React, { memo } from 'react';

function Child() {
    console.log("Child");
  return (
    <div>
        <h4>Child</h4>
    </div>
  )
}
export default memo(Child);