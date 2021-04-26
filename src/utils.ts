export const shuffleArray = (array: any[]) => {
	const copyArray: any[] = array.slice(0);
	for (let i: number = copyArray.length - 1; i > 0; i--) {
		let j: number = Math.floor(Math.random() * (i + 1));
		let temp: any = copyArray[i];
		copyArray[i] = copyArray[j];
		copyArray[j] = temp;
	}
	return copyArray;
};
