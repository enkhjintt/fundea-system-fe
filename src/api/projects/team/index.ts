import { api } from "@/api/api";

export type TeamResponse = {
  id: number;
  ner: string;
  alban_tushaal: string;
  tusul_id: number;
};

export function CreateTeam(data: TeamResponse) {
  return api({ url: "/tusulbag/create", method: "POST", data });
}

export function UpdateTeam(id: number, data: TeamResponse) {
  return api({ url: `/tusulbag/update/${id}`, method: "PUT", data });
}

export function DeleteTeam(id: number | undefined) {
  return api({
    url: `/tusulbag/delete/${id}`,
    method: "DELETE",
  });
}
