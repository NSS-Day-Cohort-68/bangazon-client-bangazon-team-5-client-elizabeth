import Link from 'next/link'

export function IndexStoreCard({ store, width= "is-fullwidth" }) {
  return (
    <div className={`column ${width}`}>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {store.name}
          </p>
        </header>
        <div className="card-content">
          <p className="content">
            Owner: {store.owner.user.first_name} {store.owner.user.last_name}
          </p>
          <div className="content">
            {store.description}
          </div>
          <div>
            Total Products: {store.productcount}
          </div>
        </div>
        <footer className="card-footer">
          <Link href={`stores/${store.id}`}>
            <a className="card-footer-item">View Store</a>
          </Link>
        </footer>
      </div>
    </div>
  )
}