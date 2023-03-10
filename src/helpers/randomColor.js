export const getRandomColor= () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// shorter alternative

// export const getRandomColor = () => {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
