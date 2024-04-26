import { useEffect, useState } from "react"
import Filter from "../../components/filter"
import Layout from "../../components/layout"
import Navbar from "../../components/navbar"
import { ProductCard } from "../../components/product/card"
import { getCategories, getProducts } from "../../data/products"
import { CategoryCard } from "../../components/categories/card"

export default function Products() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState("Loading products...")
  const [locations, setLocations] = useState([])
  const [categories, setCategories] = useState([])
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (data) {
          const locationData = [
            ...new Set(data.map((product) => product.location)),
          ]
          const locationObjects = locationData.map((location) => ({
            id: location,
            name: location,
          }))

          setProducts(data)
          setIsLoading(false)
          setLocations(locationObjects)
        }
      })
      .catch((err) => {
        setLoadingMessage(
          `Unable to retrieve products. Status code ${err.message} on response.`
        )
      })
  }, [])

  useEffect(() => {
    getCategories().then((data) => {
      if (data) {
        setCategories(data)
      }
    })
  }, [])

  const getFirstFive = (c) => {
    let array = []
    let reverseProducts = products.toReversed()
    for (const p of reverseProducts) {
      if (array.length < 5) {
        if (p.category_id === c.id) {
          array.push(p)
        }
      }
    }
    return array
  }

  const searchProducts = (event) => {
    getProducts(event).then((productsData) => {
      if (productsData) {
        setProducts(productsData)
      }
    })
  }

  if (isLoading) return <p>{loadingMessage}</p>

  if (filtered == false) {
    return (
      <>
        <Filter
          productCount={products.length}
          onSearch={searchProducts}
          categories={categories}
          locations={locations}
          setFiltered={setFiltered}
          filtered={filtered}
        />
        <div>
          {categories.map((c) => (
            <div key={c.name}>
              <div key={c.id}>
                <CategoryCard Category={c.name} />
              </div>
              <div className="columns is-multiline">
                {getFirstFive(c).map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </>
    )
  }

  if (filtered == true) {
    return (
      <>
        <Filter
          productCount={products.length}
          onSearch={searchProducts}
          categories={categories}
          locations={locations}
          setFiltered={setFiltered}
          filtered={filtered}
        />
        <div>
          <CategoryCard Category={"Products Matching Filter"} />
        </div>
        <div className="columns is-multiline">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </>
    )
  }
}

Products.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
