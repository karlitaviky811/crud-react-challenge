import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( values ) => {
        setValues( values );
    }

    const handleInputChange = ({ target }) => {

        const {value, name} = target;
        if(name == "name" || name == 'country'){
            if(value.match("^[a-zA-Z\sáéíóúñ ]*$")!=null) {
                setValues({
                    ...values,
                    [ target.name ]: value
                });
            }
        }else
            if(name == "phone"){
                if(value.match("^[0-9-+]*$")!=null) {
                    setValues({
                        ...values,
                        [ target.name ]: value
                    });
                }

            }else{
            setValues({
                ...values,
                [ target.name ]: value
            });
        }

    }

    return [ values, handleInputChange, reset ];

}