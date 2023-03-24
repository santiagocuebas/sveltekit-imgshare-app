export const getErrorMessage = (errors) => {
    const message = {};
    for (const e of errors) {
        message[e.param] = e.msg;
    }
    return message;
};
