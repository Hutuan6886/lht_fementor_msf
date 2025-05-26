import type z from "zod";
import type {
  PersonalInfoSchema,
  SelectPlanSchema,
} from "./form-schema/formSchema";

export type PersonalInfoFormType = z.infer<typeof PersonalInfoSchema>;

export type SelectPlanFormType = z.infer<typeof SelectPlanSchema>;
