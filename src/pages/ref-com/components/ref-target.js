import React, {forwardRef} from "react";


const RefTarget = forwardRef((props, ref) => <input type="text" {...props} ref={ref} />);

export default RefTarget;