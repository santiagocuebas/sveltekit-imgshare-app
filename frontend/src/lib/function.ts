import type { IComment, IImage } from "./global";

export function isImage(object: IImage | IComment): object is IImage {
	return (object as IImage).favorites !== undefined;
}

export function isComment(object: IImage | IComment): object is IComment {
	return (object as IComment).comment !== undefined;
}
