import { z } from "zod";
export const loginFormSchema = z.object({
  login: z.string().regex(new RegExp("[a-z, A-Z]{6,}"), {
    message: "Login must consist min 6 letters",
  }),
  password: z.string().regex(new RegExp("[0-9, a-z, A-Z]{6,}"), {
    message: "Password must consist min 6 number or letters",
  }),
});
