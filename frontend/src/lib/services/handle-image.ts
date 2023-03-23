export function handleImage(this: HTMLInputElement) {
  const reader = new FileReader();
  const files = this.files as FileList;
  const parent = this.parentElement as HTMLElement;

  reader.readAsDataURL(files[0]);
  reader.addEventListener('load', () => {
    parent.style.backgroundImage = `url(${reader.result})`;
  }, false);
}
