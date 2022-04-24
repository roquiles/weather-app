export function getLocalTime(date: Date, timezone: number) {
  const localTimezone = date.getTimezoneOffset() / 60 + timezone / 60 / 60;

  return date.getHours() + localTimezone > 24
    ? date.getHours() + localTimezone - 2
    : date.getHours() + localTimezone;
}
