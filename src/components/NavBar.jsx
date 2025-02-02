import React from 'react'

const NavBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sachin Memorial Library</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add Book</a>
        <a class="nav-link active" aria-current="page" href="/SearchBook">Search Book</a>
        <a class="nav-link active" aria-current="page"href="/DeleteBook"> Delete Book</a>

        <a class="nav-link active" aria-current="page"href="/ViewAll">View All</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar