import { ContactMe } from "../controllers/contactController";

export const coreUri: string | undefined = process.env.CORE_URI;

export const clientencryptionStatus: string | undefined =
  process.env.NEXT_PUBLIC_ENCRYPTION;

export const clientEncKey: string | undefined =
  process.env.NEXT_PUBLIC_ENCRYPTION_SECRET_KEY;

export const controllerMapping: Record<string, (data: any) => Promise<any>> = {
  "contact-me": ContactMe,
};
