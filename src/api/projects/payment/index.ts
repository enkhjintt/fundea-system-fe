import { api } from "@/api/api";

export type PaymentResponse = {
  id: number;
  dun: number;
  tusul_id: number;
  dans_id: number;
  tulbur_helber_id: number;
};

export function CreatePayment(data: PaymentResponse) {
  return api({ url: "/sanhuujilt/create", method: "POST", data });
}

export function UpdatePayment(id: number, data: PaymentResponse) {
  return api({ url: `/sanhuujilt/update/${id}`, method: "PUT", data });
}

export function DeletePayment(id: number | undefined) {
  return api({
    url: `/sanhuujilt/delete/${id}`,
    method: "DELETE",
  });
}
