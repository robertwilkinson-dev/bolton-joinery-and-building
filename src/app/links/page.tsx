import {FC} from "react";

const LinksPage: FC = () => (
  <div className="content">
    <div className="container">
      <div className="col-9">
        <h1>Useful Links</h1>
        <p><a href="http://planningportal.co.uk/">www.planningportal.co.uk</a> - Infomation about planning permission
          for extensions/conversions.</p>
        <p><a href="http://howdens.com/">www.howdens.com</a> - Trade supplier of kitchens and internal and external
          doors.</p>
        <h2>Useful Brochures</h2>
        <p><a href="/downloads/composite_doors.pdf">Composite Doors.pdf</a> - Composite door brochure</p>
        <p><a href="/downloads/upvc_doors.pdf">UPVC Doors.pdf</a> - UPVC door brochure</p>
        <p><a href="/downloads/upvc_windows.pdf">UPVC Windows.pdf</a> - UPVC window brochure</p>
        <p><a href="/downloads/glass.pdf">Glass.pdf</a> - Glass brochure</p>
        <p><a href="/downloads/terms_and_conditions-BJB-2024.pdf">Terms & Conditons (2024).pdf</a> - T&C Terms &
          Conditions (Contract)</p>
      </div>
      <div className="col-3 gallery hide-on-small">
        <img src="/img/content/default/page-side-6.png" sizes="50vw"
             srcSet="/img/content/small/page-side-6.png 125w, /img/content/medium/page-side-6.png 250w, /img/content/large/page-side-6.png 500w"/>
        <img src="/img/content/default/page-side-7.png" sizes="50vw"
             srcSet="/img/content/small/page-side-7.png 125w, /img/content/medium/page-side-7.png 250w, /img/content/large/page-side-7.png 500w"/>
      </div>
    </div>
  </div>
)

export default LinksPage
