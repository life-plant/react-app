import React, {forwardRef} from "react";

console.log(forwardRef)

const RefTarget = React.forwardRef((props, ref) => <input type="text" ref={ref} />);


export default RefTarget;