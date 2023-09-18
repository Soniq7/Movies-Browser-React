export const formatDate = (date) => {
  const dateToFormat = new Date(date);
  const day = dateToFormat.getDate();
  const month = dateToFormat.getMonth() + 1;
  const year = dateToFormat.getFullYear();
  const formattedDate = day + "." + month + "." + year;
  return formattedDate;
};
