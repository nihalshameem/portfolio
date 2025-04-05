export const errMessageIns = (error: any) => {
  let errorMessage = "Internal server error";

  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else if (error && typeof (error as any).message === "string") {
    errorMessage = (error as any).message;
  }
  return errorMessage;
};

interface DataTypes1 {
  title: string;
  desc: string;
}

interface DataTypes2 {
  title: string;
  desc: string;
  path: string[];
}

interface OverviewTypes {
  name: string;
  tech: string;
  duration: string;
  role: string;
}

interface ReferenceTypes {
  text: string;
  link: string;
}

export interface ProjectDetailsInterface {
  title: string;
  slug: string;
  mainImage: string;
  shortDesc: string;
  desc: string;
  overview: OverviewTypes;
  features: DataTypes1[];
  technical: DataTypes1[];
  challenge: DataTypes1[];
  outcome: string;
  screenshots: DataTypes2[];
  conclusion: string;
  reference: ReferenceTypes[];
}

export interface CertificateDetailsInterface {
  title: string;
  slug: string;
  desc: string;
  image_path: string;
  file_path: string;
  earned_on: string;
  expiry_date: string;
  issuer: string;
  certificate_link: string;
  certificate_link_text: string;
}
