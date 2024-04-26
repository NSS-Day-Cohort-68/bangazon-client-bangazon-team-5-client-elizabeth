import { useEffect, useState } from "react"
import Filter from "../../components/filter"
import Layout from "../../components/layout"
import Navbar from "../../components/navbar"
import { ProductCard } from "../../components/product/card"
import {getLikedProducts} from "../../data/like"


export default function Products() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading products...")

    useEffect(() => {
        getLikedProducts()
          .then((data) => {
            if (data) {   
              setProducts(data)
              setIsLoading(false)
            }
          })
          .catch((err) => {
            setLoadingMessage(
              `Unable to retrieve products. Status code ${err.message} on response.`
            )
          })
      }, [])

      return (
        <>
          <div className="columns is-multiline">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </>
      )
}

Products.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
    






