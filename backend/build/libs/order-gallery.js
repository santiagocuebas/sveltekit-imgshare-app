import { OrderGallery } from '../enums.js';
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
