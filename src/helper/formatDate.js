const formatDate = (date) => {
  const d = new Date(date);
  const dtl = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [{ value: Fmonth }, , { value: Fdate }, , { value: Fyear }] =
    dtl.formatToParts(d);

  return `${Fdate} ${Fmonth} ${Fyear}`;
};

export default formatDate;
