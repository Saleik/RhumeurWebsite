

export const contactFormReducer = (state, action) => {

    switch (action.type) {
        case 'lastname':
            return {
                ...state, lastname: action.value
            };
        case 'corporation':
            return {
                ...state, corporation: action.value
            };
        case 'subject':
            return {
                ...state, subject: action.value
            };
        case 'email':
            return {
                ...state, email: action.value
            };
        case 'message':
            return {
                ...state, message: action.value
            };
        default:
            throw new Error();
    }
};