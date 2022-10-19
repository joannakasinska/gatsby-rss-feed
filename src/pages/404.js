import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main style={{
      fontFamily: "Helvetica, sans-serif",
      margin: "auto",
      maxWidth: "550px",
      padding: "1rem 2rem",
    }}>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn’t find what you were looking for.
      </p>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
