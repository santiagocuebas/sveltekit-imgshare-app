import { OrderGallery } from '../enums.js';
export const getLike = (optOne, optTwo, username) => {
    if (!optOne.includes(username)) {
        optOne.push(username);
        optTwo = optTwo.filter(opt => opt !== username);
    }
    else {
        optOne = optOne.filter(opt => opt !== username);
    }
    return [optOne, optTwo];
};
export const getOrderGallery = (order) => {
    if (order === OrderGallery.NEWEST) {
        return { createdAt: 'DESC', views: 'DESC' };
    }
    else if (order === OrderGallery.OLDEST) {
        return { createdAt: 'ASC', views: 'DESC' };
    }
    else if (order === OrderGallery.VIEWED) {
        return { views: 'DESC', createdAt: 'DESC' };
    }
    else
        return { createdAt: 'DESC', views: 'DESC' };
};
