import { format } from "date-fns";

export function formatMatchTime(date: number) {
  return format(new Date(date), "hh:mm a");
}

export function formatMatchDate(date: number) {
  return format(new Date(date), "MMM dd");
}