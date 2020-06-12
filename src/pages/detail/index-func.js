import React from 'react';

function Detail(props) {
  return (
    <div className="index">
        Detail{props.match.params.id}
    </div>
  );
}

export default Detail;
