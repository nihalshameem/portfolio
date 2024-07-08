// utils/coreRequest.ts
import { errMessageIns } from "./commonUtils";
import { coreUri } from "./config";

export async function coreRequest<T = any>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any
): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`${coreUri}/${url}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      // Parse the error response to get more details
      const errorData = await response.json();
      const errorMessage = errorData.message || "An error occurred";
      throw new Error(errorMessage);
    }

    // Return the successful response
    return (await response.json()) as T;
  } catch (error) {
    console.error("core API Request Error:", errMessageIns(error));
    throw error;
  }
}
