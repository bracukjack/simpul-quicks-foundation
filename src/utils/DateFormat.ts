export function formatDayDate(dateString: string): string {
  const date: Date = new Date(dateString);
  const currentDate: Date = new Date();

  if (date.toDateString() === currentDate.toDateString()) {
    const month: string = date.toLocaleString("default", { month: "long" });
    const day: number = date.getDate();
    const year: number = date.getFullYear();
    return `Today, ${month} ${day}, ${year}`;
  } else {
    const days: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const month: string = date.toLocaleString("default", { month: "long" });
    const dayOfWeek: string = days[date.getDay()];
    const day: number = date.getDate();
    const year: number = date.getFullYear();
    return `${dayOfWeek} ${month} ${day}, ${year}`;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
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

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hour: number | string = date.getHours();
  let minute: number | string = date.getMinutes();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  return `${month} ${day},${year} ${hour}:${minute}`;
}

export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  let hour: number | string = date.getHours();
  let minute: number | string = date.getMinutes();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  return `${hour}:${minute}`;
}

export function calculateDaysDiff(taskDate: string): string | null {
  const currentDate = new Date();
  const parsedTaskDate = new Date(taskDate);

  const diffInMs = parsedTaskDate.getTime() - currentDate.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays > 0) {
    if (diffInDays === 1) {
      return "1 day left";
    } else {
      return `${diffInDays} days left`;
    }
  } else {
    return null;
  }
}
