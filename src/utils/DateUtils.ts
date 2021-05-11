const parseDate = (date: Date): string => {
  const year: string = date.getFullYear().toString();
  const month: string =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString();
  const day =
    date.getDate() < 10
      ? "0" + date.getDate().toString()
      : date.getDate().toString();
  return year + "-" + month + "-" + day + "T" + "00:00:00";
};

export const getTodayDate = (): string => {
  const date: Date = new Date();
  return parseDate(date);
};

export const getNextDate = (): string => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return parseDate(tomorrow);
};
