import { Score } from "$lib/types/enums";

export const catchLike = (
	scores: [string[], string[]],
	score: string,
	username: string
) => {
	let patchedcores = (score === Score.LIKE) ? scores : scores.reverse();

	patchedcores[0] = patchedcores[0].includes(username)
		? patchedcores[0].filter(name => username !== name)
		: [username, ...patchedcores[0]];

	patchedcores[1] = patchedcores[1].filter(name => username !== name);

	return (score === Score.LIKE) ? patchedcores : patchedcores.reverse();
};
