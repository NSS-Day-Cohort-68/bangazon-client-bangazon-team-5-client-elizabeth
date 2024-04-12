import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { Detail } from '../../../components/product/detail'
import { Ratings } from '../../../components/rating/detail'
import { getProductById, likeProduct, unLikeProduct } from '../../../data/products'
import { getLikeByProductId } from '../../../data/like'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState({})
  const [is_liked, setIs_liked] = useState(false)
  const [isProductLoaded, setIsProductLoaded] = useState(false)
  
  const refresh = () => {
    getProductById(id).then(productData => {
      if (productData) {
        setProduct(productData)
        setIsProductLoaded(true)
      }
    })
  }

  useEffect(() => {
    if (isProductLoaded) {
      getLikeByProductId(product.id)
        .then(data => {
          setIs_liked(data.liked)
        })
        .catch(error => {
          console.error('Error fetching like status:', error)
        })
    }
  },[isProductLoaded])

  const like = () => {
    likeProduct(id).then(refresh)
    setIs_liked(true)
  }

  const unlike = () => {
    unLikeProduct(id).then(refresh)
    setIs_liked(false)
  }

  useEffect(() => {
    if (id) {
      refresh()
    }
  }, [id])

  return (
    <div className="columns is-centered">
      <div className="column">
        <Detail product={product} like={like} unlike={unlike} is_liked={is_liked}/>
        <Ratings
          refresh={refresh}
          number_purchased={product.number_sold}
          ratings={product.ratings}
          average_rating={product.average_rating}
          likes={product.likes}
          product={product}
        />
      </div>
    </div>
  )
}

ProductDetail.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
