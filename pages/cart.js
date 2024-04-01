import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import CardLayout from "../components/card-layout"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import CartDetail from "../components/order/detail"
import CompleteFormModal from "../components/order/form-modal"
import { completeCurrentOrder, getCart } from "../data/orders"
import { getPaymentTypes } from "../data/payment-types"
import { removeProductFromOrder } from "../data/products"
import { useAppContext } from "../context/state"

export default function Cart() {
  const [cart, setCart] = useState({})
  const [paymentTypes, setPaymentTypes] = useState([])
  const [showCompleteForm, setShowCompleteForm] = useState(false)
  const router = useRouter()
  const { profile } = useAppContext()

  const refresh = () => {
    getCart().then((cartData) => {
      if (cartData) {
        setCart(cartData)
      } else {
        setCart({})
      }
    })
  }

  useEffect(() => {
    refresh()
    if (profile && profile.id) {
      getPaymentTypes(profile.id).then((paymentData) => {
        if (paymentData) {
          setPaymentTypes(paymentData)
        }
      })
    }
  }, [profile])

  const completeOrder = (paymentTypeId) => {
    completeCurrentOrder(cart.id, paymentTypeId).then(() => {
      setCart({})
      router.push("/my-orders")
    })
  }

  const removeProduct = (productId) => {
    removeProductFromOrder(productId).then(refresh)
  }

  return (
    <>
      <CompleteFormModal
        showModal={showCompleteForm}
        setShowModal={setShowCompleteForm}
        paymentTypes={paymentTypes}
        completeOrder={completeOrder}
      />
      <CardLayout title="Your Current Order">
        <CartDetail cart={cart} removeProduct={removeProduct} />
        <>
          <a
            className="card-footer-item"
            onClick={() => setShowCompleteForm(true)}
          >
            Complete Order
          </a>
          <a className="card-footer-item">Delete Order</a>
        </>
      </CardLayout>
    </>
  )
}

Cart.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <section className="container">{page}</section>
    </Layout>
  )
}
