export function CategoryCard({ Category}) {
    return (
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <a>{Category}</a>
            </p>
          </header>
        </div>
    )
  }
  