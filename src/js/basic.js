export default function getSortHeroes(items) {
  items.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (b.health > a.health) {
      return 1;
    }
    return 0;
  });

  return items;
}
