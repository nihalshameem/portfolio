import { errMessageIns } from "./commonUtils";

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
    const response = await fetch(`/api/${url}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("API Request Error:", errMessageIns(error));
    throw error;
  }
}
