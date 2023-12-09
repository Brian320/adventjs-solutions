function findFirstRepeated(gifts: number[]): number {
  const repeatedGifts: number[] = [];
  for (let i = 0; i < gifts.length; i++) {
    const foundGift: boolean = repeatedGifts.indexOf(gifts[i]) > -1;
    if (foundGift) {
      return gifts[i];
    }
    repeatedGifts.push(gifts[i]);
  }
  // Code here
  return -1;
}

export default findFirstRepeated;
