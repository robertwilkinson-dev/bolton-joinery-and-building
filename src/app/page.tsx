import { FC } from 'react'

const HomePage: FC = () => (
  <div className="content">
    <div className="container">
      <div className="col-6">
        <h1>HOME IMPROVEMENTS MADE EASY</h1>
        <p>Bolton Joinery & Building was established in 2001.</p>
        <p>We are based in Horwich, Bolton. We offer a full range of building and joinery services in and around the
        north-west.</p>
        <p>Most of our work is gained by recommendations from existing customers. Over the years we have established
        an excellent reputation for quality and service. With our clients coming back time and time again for
        repeat business.</p>
        <p>We offer a full range of building and joinery services, from a new build to maintenance work.</p>

        <h4>Why choose Bolton Joinery & Building?</h4>
        <ul>
          <li>23+ Years trading</li>
          <li>Local family run business</li>
          <li>Fully qualified & accredited</li>
          <li>All work guaranteed</li>
          <li>Fair & transparent pricing</li>
          <li>Free estimates</li>
        </ul>
      </div>
      <div className="col-6">
        <img
            style={{ maxWidth: '103%' }}
            src="/img/content/default/home.png"
            sizes="(max-width: 600px) 100vw, 50vw"
            srcSet="img/content/small/home.png 125w, img/content/medium/home.png 250w, img/content/large/home.png 500w"
        />
      </div>
    </div>

    <div className="container">
      <ul className="buttons">
        <li>
          <a href="kitchensandbathrooms">
            <img src="/img/icons/bath.png"/>
            <strong>Kitchens </strong>& Bathrooms &raquo;
          </a>
        </li>
        <li>
          <a href="contact">
            <img src="/img/icons/Email.png"/>
            <strong>Contact </strong>Us &raquo;
          </a>
        </li>
        <li>
          <a href="buildingandjoinery">
            <img src="/img/icons/building.png"/>
            <strong>Building</strong> Services &raquo;
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default HomePage
