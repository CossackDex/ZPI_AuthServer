import serverConnect from "../apis/serverConnect";

export const getData = async () => {
  const response = await serverConnect.get("/");

  return {
    type: "GET_DATA",
    payload: response,
  };
};
