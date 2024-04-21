export function zipSort(mainList, secondaryList, sortBy, extra = {}) {
  let zipped = mainList.map((e, i) => [e, secondaryList[i]]);

  // Sort the zipped array
  zipped.sort((a, b) => {
    if (sortBy === "asc") return a[0].name.localeCompare(b[0].name);
    else return b[0].name.localeCompare(a[0].name);
  });

  // Unzip the sorted array back into two separate arrays
  const sortedMainList = [];
  const sortedSecondaryList = [];
  for (let i = 0; i < zipped.length; i++) {
    sortedMainList[i] = zipped[i][0];
    sortedSecondaryList[i] = zipped[i][1];
  }

  return [sortedMainList, sortedSecondaryList];
}

export function getStyle(width) {
  const flexStyleLarge = {
    display: "flex",
    width: "400px",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "6px 0"
  };

  const flexStyleSmall = {
    display: "flex",
    width: "250px",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "3px 0"
  };

  if (width < 450) return flexStyleSmall;
  return flexStyleLarge;
}

export function binarySearch(name, sortBy, people) {
  let low = 0;
  let high = people.length - 1;
  const isAsc = sortBy === "asc";
  let index = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isAsc) {
      if (name.localeCompare(people[mid].name) <= 0) {
        index = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (name.localeCompare(people[mid].name) === 1) {
        index = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return index ?? people.length;
}
