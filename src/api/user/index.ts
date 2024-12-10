export type UserResponse = {
    id: number;
    ner: string;
    phone: string;
    register: string;
    email: string;
    password: string;
    hayg_delgerengui: string;
    mergejil: string;
    alban_tushaal: string;
    company: string;
    dans_id: number;
    hereglegch_erh_id: number;
    created_by_id: number;
    created_at: string;
    updated_by_id: number;
    updated_at: string;
    aimag_code: string;
    sum_code: string;
    horoo_code: string;
    AimagHot: string | null;
    SumDuureg: string | null;
    Horoo: string | null;
    Dans: string | null;
    HereglegchErh: {
      id: number;
      bank_turul_ner: string;
      created_by_id: number;
      created_at: string;
      updated_by_id: number;
      updated_at: string;
    };
    Tusuls: any | null; // Replace `any` with a specific type if Tusuls has a defined structure.
  };
  