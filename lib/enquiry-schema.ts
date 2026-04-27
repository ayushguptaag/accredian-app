import { z } from "zod";

import { deliveryModes, type EnquiryFormValues } from "@/types/site";

const deliveryModeSchema = z.enum(deliveryModes);

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(8, "Must provide contact number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  company: z.string().trim().min(2, "Company name is required"),
  courseDomain: z.string().trim().min(1, "Course domain is required"),
  candidates: z
    .number({
      error: "Number of candidates is required",
    })
    .int("Number of candidates must be a whole number")
    .positive("Number of candidates must be greater than 0"),
  mode: z
    .union([deliveryModeSchema, z.literal("")])
    .refine((value) => value !== "", "Mode of delivery is required"),
  location: z
    .string()
    .trim()
    .min(2, "Location is required")
    .refine((value) => !/^\d+$/.test(value), "Location cannot be a number"),
});

export const enquiryDefaultValues: Partial<EnquiryFormValues> = {
  name: "",
  email: "",
  phone: "",
  company: "",
  courseDomain: "",
  mode: "",
  location: "",
};
