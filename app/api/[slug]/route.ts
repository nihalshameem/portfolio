import { errMessageIns } from "@/app/utils/commonUtils";
import { controllerMapping } from "@/app/utils/config";
import { NextRequest, NextResponse } from "next/server";

// Define the type of the error response data
type ErrorData = {
  status: string;
  data: any;
  message: string;
};

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  let reqData;

  try {
    reqData = await request.json();
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        data: null,
        message: "Invalid JSON format",
      } as ErrorData,
      { status: 400 }
    );
  }

  const controllerFunction = controllerMapping[slug];

  if (!controllerFunction) {
    return NextResponse.json(
      {
        status: "error",
        data: null,
        message: "Controller not found",
      } as ErrorData,
      { status: 404 }
    );
  }

  try {
    const responseData = await controllerFunction(reqData);

    // Check if the response indicates an error
    if (responseData.status === "error") {
      // Map specific error messages to appropriate HTTP status codes
      const statusCode = responseData.message.includes("required") ? 422 : 400;
      return NextResponse.json(responseData, { status: statusCode });
    }

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    // Handle the error with type checking
    return NextResponse.json(
      {
        status: "error",
        data: null,
        message: errMessageIns(error),
      } as ErrorData,
      { status: 500 }
    );
  }
}
