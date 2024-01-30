import { ValidExt } from "$lib/enums";

export const loadImage = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
		const validExt: string[] = Object.values(ValidExt);

		reader.addEventListener('load', ({ target }) => {
			const result = String(target?.result);
			resolve(result);
		}, false);

		if (file && file.size < 2 * 1e7 && validExt.includes(file.type)) {
			reader.readAsDataURL(file);
		}
  })
};
