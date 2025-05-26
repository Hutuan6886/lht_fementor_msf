import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, { message: "Phone number must contain 10 digits" })
    .length(10, "Phone number is required"),
});

export const SelectPlanSchema = z.object({
  selectedPlan: z.enum(["arcade", "advanced", "pro"], {
    message: "Please select a plan",
  }),
  isYearly: z.boolean(),
});
