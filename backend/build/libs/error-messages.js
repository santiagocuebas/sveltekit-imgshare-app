export const getErrorMessage = (errors) => {
    const message = {};
    for (const e of errors) {
        if (e.type === 'field')
            message[e.path] = e.msg;
    }
    return message;
};
