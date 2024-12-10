import { ApiResponse, api } from "@/api/api";
import { ProjectClassResponse } from "@/api/ref/project-class";
import { ProjectFeeResponse } from "@/api/ref/project-fee";
import { ProjectStatusResponse } from "@/api/ref/project-status";
import { ProjectTypeResponse } from "@/api/ref/project-type";
import { CityResponse, DistrictResponse } from "../address";
import { UserResponse } from "../user";

export type ProjectResponse = {
  id: number;
  garchig: string;
  ded_garchig: string;
  sanhuujiltiin_dun: number;
  ersdel: string;
  tuuh: string;
  delgerengui: string;
  zurag: string;
  cover_zurag: string;
  hereglegch_id: number;
  tusul_turul_id: number;
  tusul_angilal_id: number;
  aimag_code: string;
  sum_code: string;
  horoo_code: string;
  uilchilgeenii_huraamj_id: number;
  created_by_id: number;
  created_at: string;
  updated_by_id: number;
  updated_at: string;
  tusul_tuluv_id: number;
  Hereglegch: null | any;
  TusulTurul: null | ProjectTypeResponse;
  TusulAngilal: null | ProjectClassResponse;
  AimagHot: null | any;
  SumDuureg: null | any;
  Horoo: null | any;
  TusulTuluv: null | ProjectStatusResponse;
  UilchilgeeniiHuraamj: null | ProjectFeeResponse;
  SumSanhuujiltDun: number | 0
};
export type ProjectSuccessResponse = {
  tusul_id:{
    id: number;
  garchig: string;
  ded_garchig: string;
  sanhuujiltiin_dun: number;
  ersdel: string;
  tuuh: string;
  delgerengui: string;
  zurag: string;
  cover_zurag: string;
  hereglegch_id: number;
  tusul_turul_id: number;
  tusul_angilal_id: number;
  aimag_code: string;
  sum_code: string;
  horoo_code: string;
  uilchilgeenii_huraamj_id: number;
  created_by_id: number;
  created_at: string;
  updated_by_id: number;
  updated_at: string;
  tusul_tuluv_id: number;
  Hereglegch: null | any;
  TusulTurul: null | ProjectTypeResponse;
  TusulAngilal: null | ProjectClassResponse;
  AimagHot: null | any;
  SumDuureg: null | any;
  Horoo: null | any;
  TusulTuluv: null | ProjectStatusResponse;
  UilchilgeeniiHuraamj: null | ProjectFeeResponse;
  SumSanhuujiltDun: number | 0
  }
  
};

export type Funding = {
  sanhuujilt_dun: number;
  hereglegch_ner: string;
};
export type ProjectDetailResponse = {
  id: number;
  garchig: string;
  ded_garchig: string;
  sanhuujiltiin_dun: number;
  ersdel: string;
  tuuh: string;
  delgerengui: string;
  zurag: string;
  cover_zurag: string;
  hereglegch_id: number;
  tusul_turul_id: number;
  tusul_angilal_id: number;
  aimag_code: string;
  sum_code: string;
  horoo_code: string;
  uilchilgeenii_huraamj_id: number | null;
  created_by_id: number;
  created_at: string;
  updated_by_id: number;
  updated_at: string;
  tusul_tuluv_id: number;
  Hereglegch: UserResponse;
  TusulTurul: ProjectTypeResponse;
  TusulAngilal: ProjectClassResponse;
  AimagHot: CityResponse | null;
  SumDuureg: DistrictResponse | null;
  Horoo:  null;
  TusulTuluv: ProjectStatusResponse;
  UilchilgeeniiHuraamj: ProjectFeeResponse | null;
  sum_sanhuujilt_dun: number;
  sanhuujilt_list: Funding[];

}



// export function CreateProject(data: FormData) {
//   return api({
//     url: `/tusul/create`,
//     method: "POST",
//     data,
//     config: {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     },
//   });
// }
// export type CreateProjectResponse = {
//   success: boolean;
//   data: ProjectResponse; 
// };
export type CreateProjectResponse = ApiResponse<ProjectSuccessResponse>;

export function CreateProject(data: FormData): Promise<CreateProjectResponse> {
  return api({
    url: `/tusul/create`,
    method: "POST",
    data,
    config: {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  });
}



export function UpdateProject(id: number, data: ProjectResponse) {
  return api({ url: `/tusul/update/${id}`, method: "PUT", data });
}

export function DeleteProject(id: number | undefined) {
  return api({
    url: `/tusul/delete/${id}`,
    method: "DELETE",
  });
}
