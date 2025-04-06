export const sortedSize = (sizes) => {
  return Object.entries(sizes).sort((a, b) => {
    const aKey = a[0]; // pl. size1
    const bKey = b[0]; // pl. size2

    // size1 → 1, size2 → 2, stb.
    const aNum = parseInt(aKey.replace("size", "")) || 0;
    const bNum = parseInt(bKey.replace("size", "")) || 0;

    return aNum - bNum;
  });
};
