import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../../components/layout"
import Navbar from "../../../components/navbar"
import { ProductCard } from "../../../components/product/card"
import Detail from "../../../components/store/detail"
import { useAppContext } from "../../../context/state"
import { deleteProduct, getProducts } from "../../../data/products"
import {
  favoriteStore,
  getStoreById,
  unfavoriteStore,
} from "../../../data/stores"

export default function StoreDetail() {
  const { profile } = useAppContext()
  const router = useRouter()
  const { id } = router.query
  const [store, setStore] = useState({})
  const [isOwner, setIsOwner] = useState(false)
  const [soldProducts, setSoldProducts] = useState([])

  useEffect(() => {
    if (id) {
      refresh()
    }
    if (isOwner) {
      const queryString = `store=${id}&number_sold=1`
      getProducts(queryString).then((filteredProducts) => {
        if (filteredProducts) {
          setSoldProducts(filteredProducts)
        }
      })
    }
    if (parseInt(id) === profile.store?.id) {
      setIsOwner(true)
    }
  }, [id, profile, isOwner])

  const refresh = () =>
    getStoreById(id).then((storeData) => {
      if (storeData) {
        setStore(storeData)
      }
    })

  const removeProduct = (productId) => {
    deleteProduct(productId).then(refresh)
  }

  const favorite = () => {
    favoriteStore(id).then(refresh)
  }

  const unfavorite = () => {
    unfavoriteStore(id).then(refresh)
  }

  return (
    <>
      <Detail
        store={store}
        isOwner={isOwner}
        favorite={favorite}
        unfavorite={unfavorite}
      />
      <div className="columns is-multiline">
        {isOwner && (
          <div className="column is-full">
            <h2 className="title">Selling</h2>
          </div>
        )}
        {store.products?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            isOwner={isOwner}
            removeProduct={removeProduct}
          />
        ))}
        {store.products?.length === 0 ? <p>There's no products yet</p> : <></>}
        {isOwner && (
          <>
            <div className="column is-full">
              <h2 className="title">Sold Items</h2>
            </div>
            {soldProducts.length === 0 ? (
              <p>You have not sold any products yet</p>
            ) : (
              soldProducts.map((product) => (
                <ProductCard
                  product={product}
                  key={`sold-${product.id}`}
                  isOwner={isOwner}
                  removeProduct={removeProduct}
                />
              ))
            )}
          </>
        )}
      </div>
    </>
  )
}

StoreDetail.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
