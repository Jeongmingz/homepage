import { YearsData } from "@/types/mongo";

export function telFormatter(tel: string) {
  return "+82 10-" + tel.substring(3, 7) + "-" + tel.substring(7, tel.length);
}

export function mailtoFormatter(email: string) {
  return `mailto:${email}?body=안녕하세요.메일본문입니다.%0A%0A%0A%0A%0A-------------------------------------%0AAA에서 작성된 메일입니다.`;
}

export function calculateTotalCareer(careerYear: YearsData[]) {
  const totalMonths = careerYear.reduce(
    (acc, cur) => acc + cur.years.year * 12 + cur.years.month,
    0
  );

  // 연/월 변환
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
}

export function dateFormatter(date: string) {
  if (date == "재직중" || date == "진행중") {
    return date;
  }
  return `${date.split("-")[0]}년 ${date.split("-")[1]}월`;
}

// export function returnUserCompanyYear(date: {
//   start: Date;
//   end: Date | string;
// }) {
//   let isWorking = true;
//   let end,
//     start = undefined;
//   if (typeof date.end == "string") {
//     end = new Date(date.end);

//     if (end.toString() == "Invalid Date") {
//       console.log("inv");
//       end = new Date();
//       isWorking = false;
//     }
//   }

//   if (typeof date.start == "string") {
//     start = new Date(date.start);
//   }
//   if (end && start) {
//     const startYear = start.getFullYear();
//     const startMonth = start.getMonth();

//     const endYear = end.getFullYear();
//     const endMonth = end.getMonth();
//     let diffYear = endYear - startYear;
//     let diffMonth = endMonth - startMonth;
//     if (diffMonth < 0) {
//       diffYear--;
//       diffMonth += 12;
//     }

//     return { years: diffYear, months: diffMonth, isWorking: isWorking };
//   }
// }
