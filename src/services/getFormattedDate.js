import dayjs from "dayjs";

export function getFormattedDate(date) {
  const oldDate = dayjs(date);
  const formattedDate = oldDate.format("DD/MM/YYYY");

  return formattedDate;
}
