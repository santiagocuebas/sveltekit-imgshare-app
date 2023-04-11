export const catchLike = (optOne, optTwo, username) => {
    if (!optOne.includes(username)) {
        optOne.push(username);
        optTwo = optTwo.filter(opt => opt !== username);
    }
    else {
        optOne = optOne.filter(opt => opt !== username);
    }
    return [optOne, optTwo];
};
