import { CommonState } from '../../common-state';

export const CommonFields = new CommonState({
    "email": {
        value: "",
        checkValidity: (value)=>/[a-z]*@[a-z]*\.com/.test(value)
    },
    "password": {
        value: "",
        checkValidity: (value)=>value.length>8
    },
});

export const useField = (fieldName) => CommonFields.getState(fieldName)
export const useFields = () => CommonFields.getState()
export const injectFieldsProvider = (component) => CommonFields.inject(component)