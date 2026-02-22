import {FC} from "react";
import Script from "next/script";

const ContactPage: FC = () => (
  <>
    <div className="content">
    <br />
    <div className="container">
      <div className="col-12" style={{ marginBottom: 20 }}>
        <div
          className="map"
          id="map"
          style={{
            width: '100%',
            height: 400,
            background: '#b3b3b3',
            position: 'relative',
          }}
        >
          <p
            style={{
              position: 'absolute',
              top: 170,
              left: 20,
              color: 'white',
            }}
          >
            You need javascript to view this map.
          </p>
        </div>
      </div>

      <div className="col-6">
        <h1>Contact Us</h1>

        <p>
          Bolton Joinery &amp; Building offers you high-quality building solutions at prices
          that won&apos;t break the bank. Take your first step towards a beautiful home with
          our building solutions and we promise you&apos;ll come back.
        </p>

        <div className="attention">
          <p>
            Are you looking for quality building solutions for your residential property in
            Bolton? Get in touch with the experts! Contact us on
          </p>

          <h1>
            <i className="demo-icon icon-phone-circled" />{' '}
            <a href="tel:07921121454">07921 121 454</a>
          </h1>

          <h1>
            <i className="demo-icon icon-mail-circled" />{' '}
            <a href="mailto:boltonjoineryandbuilding@gmail.com">
              boltonjoineryandbuilding@gmail.com
            </a>
          </h1>

          <h1>
            <i className="demo-icon icon-globe" />{' '}
            <a href="https://boltonjoineryandbuilding.co.uk/">boltonjoineryandbuilding.co.uk</a>
          </h1>
        </div>

        <div className="container">
          <div className="col-2 details">
            <p>
              <strong>Address</strong>
            </p>
            <p>Bolton Joinery &amp; Building Services</p>
            <p>4A Wilderswoood Ave</p>
            <p>Horwich, Bolton</p>
            <p>BL6 7ES</p>
          </div>
        </div>
      </div>

      <div className="col-6">
        <form method="post">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" defaultValue="" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" defaultValue="" />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="text" defaultValue="" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} wrap="hard" defaultValue="" />

          <input name="submit" type="submit" value="Send" disabled />
        </form>
      </div>
    </div>
  </div>

    <Script
      id="google-maps-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            function initMap() {
              var location = { lat: 53.603076, lng: -2.539411 };

              var map = new google.maps.Map(
                document.getElementById('map'),
                {
                  zoom: 20,
                  center: location
                }
              );

              new google.maps.Marker({
                position: location,
                map: map
              });
            }
          `,
      }}
    />

    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&callback=initMap`}
        strategy="afterInteractive"
      />
  </>
)

export default ContactPage
