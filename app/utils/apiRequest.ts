import { errMessageIns } from "./commonUtils";
import { clientencryptionStatus } from "./config";
import { clientDecrypt, clientEncrypt } from "./cryptoUtils";

// utils/apiRequest.ts
export async function apiRequest<T = any>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any
): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    let reqData: any = body ? JSON.stringify(body) : JSON.stringify({});

    if (clientencryptionStatus === "yes") {
      reqData = JSON.stringify({ enc: clientEncrypt(reqData) });
    }

    const response = await fetch(`/api/${url}`, {
      method,
      headers,
      body: reqData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }
    let resData = await response.json();
    if (resData && "enc" in resData) {
      resData = clientDecrypt(resData.enc);
    }

    return resData as T;
  } catch (error) {
    console.error("API Request Error:", errMessageIns(error));
    throw error;
  }
}
