import API from "../http-provider";
export const SHOW_SHIRTS = "SHOW_SHIRTS";

const myApi = new API({
  url: "https://node-red-nxdup.mybluemix.net/productos",
});

export function showShirts() {
  myApi.createEntity({ name: "camisa/1" });
  return (dispatch) => {
    myApi.endpoints.posts.getAll();
  };
}
