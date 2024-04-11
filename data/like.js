import { fetchWithResponse} from "./fetcher"


export function getLikeByProductId(productId) {
    return fetchWithResponse(`products/${productId}/like`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data)
    })
  }