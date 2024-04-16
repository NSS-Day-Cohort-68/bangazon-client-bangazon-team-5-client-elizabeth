import { fetchWithResponse} from "./fetcher"


export function getLikeByProductId(productId) {
    return fetchWithResponse(`products/${productId}/like`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
  }

export function getLikedProducts() {
  return fetchWithResponse('products/liked', {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
} 