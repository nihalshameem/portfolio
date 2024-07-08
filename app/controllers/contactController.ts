import { FormInputTypes } from "../contact/ContactEntities";
import { coreRequest } from "../utils/coreRequest";

export async function ContactMe(req: FormInputTypes) {
  const data = await coreRequest("contact-me-submit", "POST", req);
  return data;
}
