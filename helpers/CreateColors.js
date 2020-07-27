export const Color = () => {
  const arr = ['#52796f', '#87f1ff', '#6c4b5e', '#dbd4d3', '#de3c4b'];
  return arr[Math.floor(Math.random() * arr.length)];
};
