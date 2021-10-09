import React from "react";

const ErrorField=(
    {
        label,
        message
        
    }
)=>{
    return <React.Fragment>
          {message !== '' &&  <small className="error">
                { message }
            </small>
        }
    </React.Fragment>
}

export default ErrorField;