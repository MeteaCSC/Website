const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function gen(calDate: Date): String {
  const year = calDate.getFullYear();
  const month = calDate.getMonth();

  let startDay = new Date(year, month, 1).getDay();
  let lastDay = new Date(year, month + 1, 0).getDate();

  let genHTML = "<tr>";
  // Alignment
  for (let i = 0; i < startDay; i++) {
    genHTML += "<td></td>";
  }
  // Create dates with id that can populate events later
  for (let i = 1; i < lastDay + 1; i++) {
    genHTML += `<td id="${i}">${i}</td>`;
    if ((i + startDay) % 7 == 0) {
      genHTML += "</tr><tr>";
    }
  }
  genHTML += "</tr>";
  return genHTML;
}
