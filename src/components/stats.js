import React from 'react'
import '../App.css'
import '../styles/stats.css'

function stats() {
  return (
    <section className="stats-section">
  <div className="stat">
      <h3>200 millions</h3>
      <p>d'utilisateurs</p>
  </div>
  <div className="stat">
      <h3>2 millions</h3>
      <p>de créateurs</p>
  </div>
  <div className="stat">
      <h3>500,000</h3>
      <p>nouveaux utilisateurs par jour</p>
  </div>
  <div className="stat">
      <h3>Le top 1%</h3>
      <p>génère 33% des revenus totaux</p>
  </div>
  <div className="stat">
      <h3>5.6 milliards</h3>
      <p>de dollars de ventes en 2022</p>
  </div>
</section>
  )
}

export default stats