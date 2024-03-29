export function CategoryCard({ Category, width="is-one-quarter" }) {
    return (
      <div className={`column ${width}`}>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <a>{Category}</a>
            </p>
          </header>
        </div>
      </div>
    )
  }
  