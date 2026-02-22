'use client'

export const Header = () => {
  const handleClick = () => {
    document.querySelector('.menu')?.classList.toggle('is-active')
    document.getElementById('menu')?.classList.toggle('is-active')
  }

  return (
    <div className="hero">
      <div className="title">
        <img src="/img/logo.png" alt="Bolton Joinery and Building"/>
      </div>
      <div className="menu">
        <ul>
          <li id="menu" onClick={handleClick}>
            <a>Menu</a>
          </li>
          <li><a href="index">Home</a></li>
          <li><a href="garage-conversions">Garage Conversions</a></li>
          <li><a href="kitchensandbathrooms">Kitchens &amp; Bathrooms</a></li>
          <li><a href="composite-and-upvc">Composite Doors &amp; UPVC Windows</a></li>
          <li><a href="buildingandjoinery">Building &amp; Joinery</a></li>
          <li><a href="links">Useful Links</a></li>
          <li><a href="gallery">Gallery</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </div>
      <div className="images">
        <img sizes="25vw" src="/img/hero/medium/hero.png"
             srcSet="img/hero/small/hero.png 100w, img/hero/medium/hero.png 150w, img/hero/default/hero.png 300w"/>
      </div>
      <br/>
    </div>
  )
}