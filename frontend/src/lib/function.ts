import type { IComment, IImage } from "./global";

export function isImage(object: IImage | IComment): object is IImage {
	return (object as IImage).favorite !== undefined;
}
