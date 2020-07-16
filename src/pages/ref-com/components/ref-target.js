import React, {forwardRef} from "react";

// dom

const RefTarget = forwardRef((props, ref) => <div type="text" {...props} ref={ref}>ref-target1</div>);

export default RefTarget;