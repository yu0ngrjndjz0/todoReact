export const sortByAB = (arraySort, arraySortAtt) => {
  const compare = (a, b) => {
    if (a[arraySortAtt].toLowerCase() < b[arraySortAtt].toLowerCase()) {
      return -1;
    }
    if (a[arraySortAtt].toLowerCase() > b[arraySortAtt].toLowerCase()) {
      return 1;
    }
    return 0;
  };
  return arraySort.sort(compare);
};
