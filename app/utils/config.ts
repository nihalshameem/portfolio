import { ContactMe } from "../controllers/contactController";

export const coreUri: string | undefined = process.env.CORE_URI;

export const controllerMapping: Record<string, (data: any) => Promise<any>> = {
  "contact-me": ContactMe,
};
