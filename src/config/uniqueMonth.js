const MONTH_NAMES = {
  1: "Enero", 2: "Febrero", 3: "Marzo", 4: "Abril",
  5: "Mayo", 6: "Junio", 7: "Julio", 8: "Agosto",
  9: "Septiembre", 10: "Octubre", 11: "Noviembre", 12: "Diciembre"
};

export const uniqueMonth = (data) => {
  const months = data.map((item) => new Date(item.date).getMonth() + 1);
  return [...new Set(months)].map((month) => ({ value: month, label: MONTH_NAMES[month] }));
}
