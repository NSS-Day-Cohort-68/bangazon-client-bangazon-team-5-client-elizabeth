import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { StoreCard } from '../../components/store/card'
import { getStores } from '../../data/stores'
import { getProductByCustomerId, getProducts } from '../../data/products'
import { ProductCard } from '../../components/product/card'


export default function Stores() {
  const [stores, setStores] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    let activeStores = []
    getStores().then(stores => {
      if (stores) {
        for (let store of stores) {
          getProductByCustomerId(store.owner.id).then(data => {
            if (data.length != 0)
            activeStores.push(store)
          })
        }
        setStores(activeStores)
      }
    })
  }, [])

  useEffect(() => {
    getProducts().then(data => {
      if (data) {
        setProducts(data)
      }
    })
  }, [])

  return (
    <>
      <h1 className="title">Stores</h1>
      <div>
      {
        stores.map(store => (
          <>
          <div className="columns is multi-line">
            <StoreCard store={store} key={store.id} />
          </div>
          <div className="columns is multi-line">
          {products.filter((product) => (product.customer_id==store.owner.id)).slice(0,4).map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
          </div>
          </> 
        ))
      }
      </div>
    </>
  )
}

Stores.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
