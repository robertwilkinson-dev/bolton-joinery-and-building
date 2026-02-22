import {FC} from "react";

const BuildingAndJoineryPage: FC = () => (
  <div className="content">
    <div className="container">
      <div className="col-9">
        <h1>Building & Joinery</h1>
        <p>We offer a full range of building and joinery services, from new builds to maintenance work.</p>
        <ul>
          <li>Home extensions</li>
          <li>Refurbishments</li>
          <li>Renovations</li>
          <li>Loft Conversions</li>
          <li><a href="/garage-conversions">Garage Conversions</a></li>
          <li><a href="/composite-and-upvc">Composite doors & UPVC windows</a></li>
        </ul>
        <p><a href="/contact">Contact us</a> for a FREE estimate.</p>
      </div>
      <div className="col-3 gallery">
        <img src="/img/content/default/page-side-4.png" sizes="50vw"
             srcSet="/img/content/small/page-side-4.png 125w, /img/content/medium/page-side-4.png 250w, /img/content/large/page-side-4.png 500w"/>
        <img src="/img/content/default/page-side-5.png" sizes="50vw"
             srcSet="/img/content/small/page-side-5.png 125w, /img/content/medium/page-side-5.png 250w, /img/content/large/page-side-5.png 500w"/>
      </div>
    </div>
  </div>
)

export default BuildingAndJoineryPage
