import {FC} from "react";

export const KitchensandbathroomsPage: FC = () => (
  <div className="content">
    <div className="container">
      <div className="col-9">
        <h1>Kitchens & Bathrooms</h1>
        <p>At Bolton Joinery & Building, we specialise in kitchens and bathrooms.</p>
        <p>Over the years we have fitted thousands of kitchens and bathrooms as this is the main bulk of work that
          we do.
        </p><p>We can supply and fit, or just fit. We offer a full service from the design stage to the final finish.
        With excellent quality of work, we aim to be completed in a timely fashion to enable you to enjoy your
        new kitchen or bathroom as soon as possible.
      </p><p><a href="contact">Contact us</a> for a FREE estimate.</p>
      </div>
      <div className="col-3 gallery">
        <img src="img/content/default/page-side-1.png" sizes="50vw" srcSet="img/content/small/page-side-1.png 125w, img/content/medium/page-side-1.png 250w, img/content/large/page-side-1.png 500w"/>
      </div>
    </div>
  </div>
)

export default KitchensandbathroomsPage
