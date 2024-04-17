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
    getStores().then(data => {
      if (data) {
        setStores(data)
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
          <div>
            <StoreCard store={store} key={store.id} />
          </div>
          <div>
          {products.filter((product) => (product.customer_id==store.owner.id)).slice(0,5).map((product) => (
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
// import { useEffect, useState } from 'react'
// import Layout from '../../components/layout'
// import Navbar from '../../components/navbar'
// import { StoreCard } from '../../components/store/card'
// import { getStores } from '../../data/stores'
// import { getProductByCustomerId, getProducts } from '../../data/products'
// import { ProductCard } from '../../components/product/card'

// export default function Stores() {
//   const [stores, setStores] = useState([])
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     getStores().then(data => {
//       if (data) {
//         setStores(data)
//       }
//     })
//   }, [])

//   useEffect(() => {
//     getProducts().then(data => {
//       if (data) {
//         setProducts(data)
//       }
//     })
//   }, [])

//   useEffect(() => {
//     // Fetch products for each store owner
//     const fetchProducts = async () => {
//       const productsForStores = await Promise.all(
//         stores.map(async store => {
//           const products = await getProductByCustomerId(store.owner.id)
//           return { storeId: store.id, products }
//         })
//       )
//       setProducts(productsForStores)
//     }
//     fetchProducts()
//   }, [stores])

//   return (
//     <>
//       <h1 className="title">Stores</h1>
//       <div className="columns is-multiline">
//         {stores.map(store => (
//           <div key={store.id}>
//             <StoreCard store={store} />
//             {products
//               .find(product => product.storeId === store.id)
//               ?.products.map(product => (
//                 <ProductCard product={product} key={product.id} />
//               ))}
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// Stores.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <Navbar />
//       {page}
//     </Layout>
//   )
// }




// import { useEffect, useState } from 'react'
// import Layout from '../../components/layout'
// import Navbar from '../../components/navbar'
// import { StoreCard } from '../../components/store/card'
// import { getStores } from '../../data/stores'
// import { getProductByCustomerId, getProducts } from '../../data/products'
// import { ProductCard } from '../../components/product/card'


// export default function Stores() {
//   const [stores, setStores] = useState([])
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     getStores().then(data => {
//       if (data) {
//         setStores(data)
//       }
//     })
//   }, [])

//   useEffect(() => {
//     getProducts().then(data => {
//       if (data) {
//         setProducts(data)
//       }
//     })
//   }, [])

//   useEffect(() => {
    
//   }, [])

//   return (
//     <>
//       <h1 className="title">Stores</h1>
//       <div className="columns is-multiline">
//       {
//         stores.map(store => (
//           <>
//           <div>
//             <StoreCard store={store} key={store.id} />
//           </div>
//           <div>
//           {getProductByCustomerId(store.owner.id).then(data => data.map((product) => (
//                   <ProductCard product={product} key={product.id} />
//                 )))}
//           </div>
//           </> 
//         ))
//       }
//       </div>
//     </>
//   )
// }

// Stores.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <Navbar />
//       {page}
//     </Layout>
//   )
// }