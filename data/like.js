import { fetchWithResponse, fetchWithoutResponse } from "./fetcher"


export function getLikeByProductId(productId) {
    return fetchWithResponse(`likes?${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
  }