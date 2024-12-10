import { api } from "@/api/api";

export type BonusResponse = {
  id: number;
  ner: string;
  dun: number;
  too: number;
  tailbar: string;
  tusul_id: number;
  tusul_ner: string;
};

// Type for the "items" array (wrapper)
export type BonusListResponse = {
  tusul_id: number;
  tusul_ner: string;
  created_at: string;
  total_count: number;
  items: BonusResponse[]; // Array of bonus items
};

export function CreateBonus(data: BonusResponse) {
  return api({ url: "/uramshuulal/create", method: "POST", data });
}

export function UpdateBonus(id: number, data: BonusResponse) {
  return api({ url: `/uramshuulal/update/${id}`, method: "PUT", data });
}

export function DeleteBonus(id: number | undefined) {
  return api({
    url: `/uramshuulal/delete/${id}`,
    method: "DELETE",
  });
}
