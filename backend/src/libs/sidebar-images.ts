import { Image } from '../models/index.js';

export const recentImages = async () => {
	return await Image.find({
		select: {
			id: true,
			filename: true,
			title: true,
			author: true,
			views: true,
			createdAt: true
		},
		where: { isPublic: true },
		order: { createdAt: 'DESC' },
		take: 20
	});
};
