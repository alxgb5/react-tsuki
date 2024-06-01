/**
 * Formats a given date object into a string based on the provided format.
 * @param date - The date object to be formatted.
 * @param format - The format string specifying the desired output format.
 * @returns The formatted date string.
 */
const formatDate = (date: Date, format: string): string => {
  const map: { [key: string]: string } = {
    MM: ('0' + (date.getMonth() + 1)).slice(-2),
    DD: ('0' + date.getDate()).slice(-2),
    YYYY: date.getFullYear().toString(),
    HH: ('0' + date.getHours()).slice(-2),
    mm: ('0' + date.getMinutes()).slice(-2),
    ss: ('0' + date.getSeconds()).slice(-2),
  };

  return format.replace(/MM|DD|YYYY|HH|mm|ss/g, (matched) => map[matched]);
};

export default formatDate;
