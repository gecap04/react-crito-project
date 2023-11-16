import React from 'react'

const MapSection = () => {
  return (
    <section className="map">
        <div className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.8382178757493!2d18.06049557729759!3d59.335654810514235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d677db5cd83%3A0x29b9512f31f935a0!2sSveav%C3%A4gen%2021%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1695908650549!5m2!1ssv!2sse" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default MapSection