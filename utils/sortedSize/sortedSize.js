export const sortSizes = (sizes) => {
    return Object.entries(sizes).sort((a, b) => {
      const aText = a[1][`${a[0]}_name`];
      const bText = b[1][`${b[0]}_name`];
  
      // cm számok kinyerése zárójelből, pl. "Kicsi (26cm)" → 26
      const aCm = parseInt(aText.match(/\((\d+)cm\)/)?.[1] || 0);
      const bCm = parseInt(bText.match(/\((\d+)cm\)/)?.[1] || 0);
  
      return aCm - bCm; // növekvő sorrend
    });
};  