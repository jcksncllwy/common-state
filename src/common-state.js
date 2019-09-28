import React, { useState, useContext } from 'react';

export class CommonState{
    constructor(initialState){
        this.context = React.createContext();
        this.Provider = createCommonProvider(this.context, initialState);
        
        this.getState = (key) => useCommonState(this, key)
        this.inject = (injectee) => injectProvider(this, injectee)
        this.wrap = this.inject
    }   
}

export const createCommonState = (initialState) => {
    return new CommonState(initialState)
}

export const useCommonState = (commonState, key) => {
    const [state, setState] = useContext(commonState.context)
    if(!key) return [state, setState];

    const keyState = state[key];
    if(keyState===undefined){
        throw new Error(`Cannot find key "${key}" in common state`)
    }
    const setKeyState = createSetState(key, setState);
    return [keyState, setKeyState]
}

export const injectProvider = (commonState, Injectee) => {
    return ({props}) => {
        return (
            <commonState.Provider>
                <Injectee {...props} />
            </commonState.Provider>
        )
    }
}

const createCommonProvider = (commonContext, initialState = {}) => {
    const CommonProvider = ({children}) => {
        const [state, setState] = useState(initialState);
        return(
            <commonContext.Provider
                value={[
                    state,
                    setState
                ]}
            >
                {children}
            </commonContext.Provider>
        )
    }
    return CommonProvider
}

const createSetState = (key, setState) => {
    return (value) => {
        setState(oldState => {
        const oldKeyState = oldState[key];
        const newKeyState = { ...oldKeyState, value };
        return {
            ...oldState,
            [key]: newKeyState,
        };
        });
    };
};