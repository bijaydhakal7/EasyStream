import { api } from "@/lib/axios";
import { Sport } from "../types/sport";

export async function getSports() {
  const { data } = await api.get<Sport[]>("/sports");

  return data;
}