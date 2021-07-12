import { dummyJSONData } from "../dummyData";

export const getemployeeAPI = async () => {
  try {
    return { status: 200, body: dummyJSONData };
  } catch (error) {
    return { status: 500, body: "Failed to connect" };
  }
};
