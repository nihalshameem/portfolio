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
