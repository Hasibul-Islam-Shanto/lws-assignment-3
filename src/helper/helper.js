export const getNextId = () => {
  return Math.floor(Math.random() * 1000000 + 1);
};

export const formattedDate = (date) => {
  const convertedDate = new Date(date);
  const formattedDate = convertedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const [day, month, year] = formattedDate.split(" ");
  return `${month} ${day}, ${year}`;
};
