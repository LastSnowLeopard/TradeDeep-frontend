// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
// Sample data for the list
export const getItems = () =>
  [
    {
      id: "1",
      image: "https://cdn.discordapp.com/attachments/924956482200567859/1142092655401111562/image.png",
      url: "https://www.ig.com/",
      rating: 4,
      name: "IG.com"
    },
    {
      id: "2",
      image: "https://cdn.discordapp.com/attachments/924956482200567859/1142092526560493718/image.png",
      url: "https://www.darwinex.com/",
      rating: 4,
      name: "Darwinex"
    },
    {
      id: "3",
      image: "https://cdn.discordapp.com/attachments/924956482200567859/1142092287564853299/image.png",
      url: "https://app.deriv.com/",
      rating: 4,
      name: "Deriv"
    },
  ]
