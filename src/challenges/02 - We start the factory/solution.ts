function manufacture(gifts: string[], materials: string): string[] {
  const materialsList: string[] = materials.split("");
  const craftableGifts: string[] = [];

  for (const gift of gifts) {
    const giftParts = gift.split("");
    const hasEnoughMaterials = giftParts.every((giftPart) => {
      return materialsList.indexOf(giftPart) > -1;
    });

    if (hasEnoughMaterials) {
      craftableGifts.push(gift);
    }
  }

  return craftableGifts;
}

export default manufacture;
