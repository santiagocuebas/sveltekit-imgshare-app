export const getLinks = (username: string) => {
	return [
		{
			href: `/user/${username}/post`,
			className: 'fa-regular fa-image',
			name: 'Post'
		},
		{
		  href: `/user/${username}/favorite`,
			className: 'fa-regular fa-star',
			name: 'Favorite'
		},
		{
			href: `/user/${username}/comment`,
			className: 'fa-regular fa-message',
			name: 'Comments'
		},
		{
			href: `/user/${username}/about`,
			className: 'fa-regular fa-file',
			name: 'About'
		},
		{
			href: `/user/${username}/upload`,
			className: 'fa-regular fa-file-image',
			name: 'Upload'
		},
		{
			href: `/user/${username}/settings`,
			className: 'fa-solid fa-gear',
			name: 'Settings'
		}
	];
};
