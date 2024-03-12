import { z } from "zod";
export const userInfoSchema = z.object({
    userName:z.string().min(2,{message:'Name must have min 2 character(s)'}),
    tel:z.string().min(10),
    address:z.string().min(5),
    priority:z.boolean()
});
