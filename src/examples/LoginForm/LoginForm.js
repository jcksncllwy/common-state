import React from "react";
import _ from 'lodash';

import { injectFieldsProvider, useFields } from './SharedState';
import { EmailField } from './components/EmailField';
import { PasswordField } from './components/PasswordField';

export const LoginForm = injectFieldsProvider(
    ({props}) => {
        const [fields, setFields] = useFields();
        const fieldInvalid = (field)=>!field.checkValidity(field.value)
        const fieldsNotValid = _.some(fields, fieldInvalid)
        return(
            <div>
                <EmailField />
                <PasswordField />
                <button disabled={fieldsNotValid}>Submit</button>
            </div>
        )
    }
)