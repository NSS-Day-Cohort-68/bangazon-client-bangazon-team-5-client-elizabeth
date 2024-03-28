import { useContext, useRef } from "react"
import { Input } from "../form-elements"
import Modal from "../modal"
import { useAppContext } from "../../context/state"

export default function AddPaymentModal({ showModal, setShowModal, addNewPayment }) {
  const merchantNameInput = useRef()
  const acctNumInput = useRef()
  const expirationDateInput = useRef()
  const profile = useAppContext()
  const today = new Date()

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title="Add New Payment Method">
      <>
        <Input
          id="merchantName"
          type="text"
          label="Merchant Name"
          refEl={merchantNameInput}
        />
        <Input
          id="accNum"
          type="text"
          label="Account Number"
          refEl={acctNumInput}
        />
        <Input 
          id="expiration"
          type="text"
          label="Expiration Date"
          refEl={expirationDateInput}
        />
      </>
      <>
        <button
          className="button is-success"
          onClick={() => addNewPayment({
            account_number: acctNumInput.current.value,
            merchant_name: merchantNameInput.current.value,
            customer_id: profile.id,
            expiration_date: expirationDateInput.current.value,
            create_date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`
          })}
        >Add Payment Method</button>
        <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
      </>
    </Modal>
  )
}
