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

export interface ProjectDetailsInterface {
  title: string;
  slug:string;
  mainImage:string;
  shortDesc: string;
  desc: string;
  overview: OverviewTypes;
  features: DataTypes1[];
  technical: DataTypes1[];
  challenge: DataTypes1[];
  outcome: string;
  screenshots: DataTypes2[];
  conclusion: string;
}
