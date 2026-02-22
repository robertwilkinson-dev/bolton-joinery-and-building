'use client'

import Script from 'next/script'
import {FC} from "react";

declare global {
  interface Window {
    __initLG?: () => void
    jQuery?: any
  }
}

const GalleryScripts: FC = () => {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          console.log('[Gallery] jQuery loaded', !!window.jQuery)
          window.__initLG?.()
        }}
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/lightgallery@1.6.4/dist/js/lightgallery.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          console.log('[Gallery] lightGallery loaded', !!window.jQuery?.fn?.lightGallery)
          window.__initLG?.()
        }}
      />

      <Script id="gallery-init" strategy="afterInteractive">
        {`
(function() {
  window.__initLG = function initLG() {
    if (!window.jQuery || !window.jQuery.fn) return;
    if (!window.jQuery.fn.lightGallery) return;

    console.log('[Gallery] initLG running ✅');

    function bind(id, dynamicEl) {
      var $tile = window.jQuery('#' + id);
      if (!$tile.length) {
        console.warn('[Gallery] tile not found:', id);
        return;
      }

      // Bind on the <a> so navigation is definitely prevented
      var $a = $tile.find('a').first();
      if (!$a.length) {
        console.warn('[Gallery] anchor not found inside:', id);
        return;
      }

      $a.off('click.__lg').on('click.__lg', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('[Gallery] opening:', id);

        // Open gallery using the tile as the element (matches your old code)
        $tile.lightGallery({
          dynamic: true,
          dynamicEl: dynamicEl
        });

        return false;
      });

      console.log('[Gallery] bound:', id);
    }

      // Kitchen 1
  bind('kitchen-1', [
    { src: '/img/gallery/kitchen-1/kitchen%20(1).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(2).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(3).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(4).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(5).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(6).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(7).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(8).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(9).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(10).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(11).jpg' },
    { src: '/img/gallery/kitchen-1/kitchen%20(12).jpg' }
  ]);

  // Kitchen 2
  bind('kitchen-2', [
    { src: '/img/gallery/kitchen-2/kitchen%20(1).jpg' },
    { src: '/img/gallery/kitchen-2/kitchen%20(2).jpg' },
    { src: '/img/gallery/kitchen-2/kitchen%20(3).jpg' },
    { src: '/img/gallery/kitchen-2/kitchen%20(4).jpg' },
    { src: '/img/gallery/kitchen-2/kitchen%20(5).jpg' },
    { src: '/img/gallery/kitchen-2/kitchen%20(6).jpg' }
  ]);

  // Kitchen 3
  bind('kitchen-3', [
    { src: '/img/gallery/kitchen-3/kitchen%20(1).jpg' },
    { src: '/img/gallery/kitchen-3/kitchen%20(2).jpg' },
    { src: '/img/gallery/kitchen-3/kitchen%20(3).jpg' },
    { src: '/img/gallery/kitchen-3/kitchen%20(4).jpg' },
    { src: '/img/gallery/kitchen-3/kitchen%20(5).jpg' },
    { src: '/img/gallery/kitchen-3/kitchen%20(6).jpg' }
  ]);

  // Kitchen 4
  bind('kitchen-4', [
    { src: '/img/gallery/kitchen-4/kitchen%20(1).jpg' },
    { src: '/img/gallery/kitchen-4/kitchen%20(2).jpg' },
    { src: '/img/gallery/kitchen-4/kitchen%20(3).jpg' }
  ]);

  // Bathroom 1
  bind('bathroom-1', [
    { src: '/img/gallery/bathroom-1/bathroom%20(1).jpg' },
    { src: '/img/gallery/bathroom-1/bathroom%20(2).jpg' },
    { src: '/img/gallery/bathroom-1/bathroom%20(3).jpg' },
    { src: '/img/gallery/bathroom-1/bathroom%20(4).jpg' },
    { src: '/img/gallery/bathroom-1/bathroom%20(5).jpg' }
  ]);

  // Bathroom 2
  bind('bathroom-2', [
    { src: '/img/gallery/bathroom-2/bathroom%20(1).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(2).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(3).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(4).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(5).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(6).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(7).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(8).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(9).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(10).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(11).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(12).jpg' },
    { src: '/img/gallery/bathroom-2/bathroom%20(13).jpg' }
  ]);

  // Bathroom 3
  bind('bathroom-3', [
    { src: '/img/gallery/bathroom-3/bathroom%20(1).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(2).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(3).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(4).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(5).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(6).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(7).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(8).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(9).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(10).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(11).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(12).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(13).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(14).jpg' },
    { src: '/img/gallery/bathroom-3/bathroom%20(15).jpg' }
  ]);

  // Bathroom 4
  bind('bathroom-4', [
    { src: '/img/gallery/bathroom-4/thumb.png' },
    { src: '/img/gallery/bathroom-4/bathroom%20(1).jpg' },
    { src: '/img/gallery/bathroom-4/bathroom%20(2).jpg' },
    { src: '/img/gallery/bathroom-4/bathroom%20(3).jpg' },
    { src: '/img/gallery/bathroom-4/bathroom%20(4).jpg' },
    { src: '/img/gallery/bathroom-4/bathroom%20(5).jpg' },
    { src: '/img/gallery/bathroom-4/bathroom%20(6).jpg' }
  ]);

  // Conservatory
  bind('conservatory', [
    { src: '/img/gallery/conservatory/thumb.png' },
    { src: '/img/gallery/conservatory/conservatory (1).jpg' },
    { src: '/img/gallery/conservatory/conservatory (2).jpg' },
    { src: '/img/gallery/conservatory/conservatory (3).jpg' },
    { src: '/img/gallery/conservatory/conservatory (4).jpg' },
    { src: '/img/gallery/conservatory/conservatory (5).jpg' }
  ]);

  // Doors
  bind('doors', [
    { src: '/img/gallery/doors/thumb.png' },
    { src: '/img/gallery/doors/Doors%20(1).jpg' },
    { src: '/img/gallery/doors/Doors%20(2).jpg' },
    { src: '/img/gallery/doors/Doors%20(3).jpg' },
    { src: '/img/gallery/doors/Doors%20(4).jpg' },
    { src: '/img/gallery/doors/Doors%20(5).jpg' },
    { src: '/img/gallery/doors/Doors%20(6).jpg' },
    { src: '/img/gallery/doors/Doors%20(7).jpg' },
    { src: '/img/gallery/doors/Doors%20(8).jpg' },
    { src: '/img/gallery/doors/Doors%20(9).jpg' },
    { src: '/img/gallery/doors/Doors%20(10).jpg' },
    { src: '/img/gallery/doors/Doors%20(11).jpg' },
    { src: '/img/gallery/doors/Doors%20(12).jpg' },
    { src: '/img/gallery/doors/Doors%20(13).jpg' },
    { src: '/img/gallery/doors/Doors%20(14).jpg' },
    { src: '/img/gallery/doors/Doors%20(15).jpg' },
    { src: '/img/gallery/doors/Doors%20(16).jpg' },
    { src: '/img/gallery/doors/Doors%20(17).jpg' },
    { src: '/img/gallery/doors/Doors%20(18).jpg' },
    { src: '/img/gallery/doors/Doors%20(19).jpg' },
    { src: '/img/gallery/doors/Doors%20(20).jpg' },
    { src: '/img/gallery/doors/Doors%20(21).jpg' },
    { src: '/img/gallery/doors/Doors%20(22).jpg' },
    { src: '/img/gallery/doors/Doors%20(23).jpg' },
    { src: '/img/gallery/doors/Doors%20(24).jpg' }
  ]);

  // Gates
  bind('gates', [
    { src: '/img/gallery/gates/thumb.png' },
    { src: '/img/gallery/gates/gates%20(1).jpg' },
    { src: '/img/gallery/gates/gates%20(2).jpg' },
    { src: '/img/gallery/gates/gates%20(3).jpg' },
    { src: '/img/gallery/gates/gates%20(4).jpg' },
    { src: '/img/gallery/gates/gates%20(5).jpg' },
    { src: '/img/gallery/gates/gates%20(6).jpg' },
    { src: '/img/gallery/gates/gates%20(7).jpg' },
    { src: '/img/gallery/gates/gates%20(8).jpg' },
    { src: '/img/gallery/gates/gates%20(9).jpg' },
    { src: '/img/gallery/gates/gates%20(10).jpg' },
    { src: '/img/gallery/gates/gates%20(11).jpg' },
    { src: '/img/gallery/gates/gates%20(12).jpg' },
    { src: '/img/gallery/gates/gates%20(13).jpg' },
    { src: '/img/gallery/gates/gates%20(14).jpg' },
    { src: '/img/gallery/gates/gates%20(15).jpg' },
    { src: '/img/gallery/gates/gates%20(16).jpg' },
    { src: '/img/gallery/gates/gates%20(17).jpg' },
    { src: '/img/gallery/gates/gates%20(18).jpg' },
    { src: '/img/gallery/gates/gates%20(19).jpg' },
    { src: '/img/gallery/gates/gates%20(20).jpg' },
    { src: '/img/gallery/gates/gates%20(21).jpg' },
    { src: '/img/gallery/gates/gates%20(22).jpg' },
    { src: '/img/gallery/gates/gates%20(23).jpg' },
    { src: '/img/gallery/gates/gates%20(24).jpg' },
    { src: '/img/gallery/gates/gates%20(25).jpg' },
    { src: '/img/gallery/gates/gates%20(26).jpg' },
    { src: '/img/gallery/gates/gates%20(27).jpg' },
    { src: '/img/gallery/gates/gates%20(28).jpg' },
    { src: '/img/gallery/gates/gates%20(29).jpg' },
    { src: '/img/gallery/gates/gates%20(30).jpg' },
    { src: '/img/gallery/gates/gates%20(31).jpg' },
    { src: '/img/gallery/gates/gates%20(32).jpg' }
  ]);

  // Office
  bind('office', [
    { src: '/img/gallery/office/thumb.png' },
    { src: '/img/gallery/office/office%20(1).jpg' },
    { src: '/img/gallery/office/office%20(2).jpg' },
    { src: '/img/gallery/office/office%20(3).jpg' },
    { src: '/img/gallery/office/office%20(4).jpg' },
    { src: '/img/gallery/office/office%20(5).jpg' },
    { src: '/img/gallery/office/office%20(6).jpg' },
    { src: '/img/gallery/office/office%20(7).jpg' },
    { src: '/img/gallery/office/office%20(8).jpg' },
    { src: '/img/gallery/office/office%20(9).jpg' },
    { src: '/img/gallery/office/office%20(10).jpg' },
    { src: '/img/gallery/office/office%20(11).jpg' },
    { src: '/img/gallery/office/office%20(12).jpg' },
    { src: '/img/gallery/office/office%20(13).jpg' },
    { src: '/img/gallery/office/office%20(14).jpg' },
    { src: '/img/gallery/office/office%20(15).jpg' },
    { src: '/img/gallery/office/office%20(16).jpg' },
    { src: '/img/gallery/office/office%20(17).jpg' },
    { src: '/img/gallery/office/office%20(18).jpg' },
    { src: '/img/gallery/office/office%20(19).jpg' }
  ]);

  // Patio
  bind('patio', [
    { src: '/img/gallery/patio/thumb.png' },
    { src: '/img/gallery/patio/patio%20(1).jpg' },
    { src: '/img/gallery/patio/patio%20(2).jpg' },
    { src: '/img/gallery/patio/patio%20(3).jpg' },
    { src: '/img/gallery/patio/patio%20(4).jpg' },
    { src: '/img/gallery/patio/patio%20(5).jpg' },
    { src: '/img/gallery/patio/patio%20(6).jpg' },
    { src: '/img/gallery/patio/patio%20(7).jpg' },
    { src: '/img/gallery/patio/patio%20(8).jpg' },
    { src: '/img/gallery/patio/patio%20(9).jpg' },
    { src: '/img/gallery/patio/patio%20(10).jpg' },
    { src: '/img/gallery/patio/patio%20(11).jpg' },
    { src: '/img/gallery/patio/patio%20(12).jpg' },
    { src: '/img/gallery/patio/patio%20(13).jpg' },
    { src: '/img/gallery/patio/patio%20(14).jpg' },
    { src: '/img/gallery/patio/patio%20(15).jpg' },
    { src: '/img/gallery/patio/patio%20(16).jpg' },
    { src: '/img/gallery/patio/patio%20(17).jpg' }
  ]);

  // Garage
  bind('garage', [
    { src: '/img/gallery/garage/thumb.jpg' },
    { src: '/img/gallery/garage/garage%20(1).png' },
    { src: '/img/gallery/garage/garage%20(2).png' },
    { src: '/img/gallery/garage/garage%20(3).png' },
    { src: '/img/gallery/garage/garage%20(4).png' },
    { src: '/img/gallery/garage/garage%20(5).png' },
    { src: '/img/gallery/garage/garage%20(6).png' },
    { src: '/img/gallery/garage/garage%20(7).png' },
    { src: '/img/gallery/garage/garage%20(8).png' },
    { src: '/img/gallery/garage/garage%20(9).png' },
    { src: '/img/gallery/garage/garage%20(1).jpg' },
    { src: '/img/gallery/garage/garage%20(2).jpg' },
    { src: '/img/gallery/garage/garage%20(3).jpg' },
    { src: '/img/gallery/garage/garage%20(4).jpg' },
    { src: '/img/gallery/garage/garage%20(5).jpg' },
    { src: '/img/gallery/garage/garage%20(6).jpg' },
    { src: '/img/gallery/garage/garage%20(7).jpg' },
    { src: '/img/gallery/garage/garage%20(8).jpg' },
    { src: '/img/gallery/garage/garage%20(9).jpg' },
    { src: '/img/gallery/garage/garage%20(10).jpg' },
    { src: '/img/gallery/garage/garage(11).jpg' },
    { src: '/img/gallery/garage/garage(12).jpg' },
    { src: '/img/gallery/garage/garage(13).jpg' },
    { src: '/img/gallery/garage/garage(14).jpg' },
    { src: '/img/gallery/garage/garage(15).jpg' },
    { src: '/img/gallery/garage/garage(16).jpg' },
    { src: '/img/gallery/garage/garage(17).jpg' },
    { src: '/img/gallery/garage/garage(18).jpg' }
  ]);

  // Porch
  bind('porch', [
    { src: '/img/gallery/porch/thumb.jpg' },
    { src: '/img/gallery/porch/porch%20(1).jpg' },
    { src: '/img/gallery/porch/porch%20(2).jpg' },
    { src: '/img/gallery/porch/porch%20(3).jpg' },
    { src: '/img/gallery/porch/porch%20(4).jpg' },
    { src: '/img/gallery/porch/porch%20(5).jpg' },
    { src: '/img/gallery/porch/porch%20(6).jpg' },
    { src: '/img/gallery/porch/porch%20(7).jpg' },
    { src: '/img/gallery/porch/porch%20(8).jpg' },
    { src: '/img/gallery/porch/porch%20(9).jpg' }
  ]);

  // Misc
  bind('misc', [
    { src: '/img/gallery/misc/thumb.png' },
    { src: '/img/gallery/misc/misc%20(1).jpg' },
    { src: '/img/gallery/misc/misc%20(2).jpg' },
    { src: '/img/gallery/misc/misc%20(3).jpg' },
    { src: '/img/gallery/misc/misc%20(4).jpg' },
    { src: '/img/gallery/misc/misc%20(5).jpg' },
    { src: '/img/gallery/misc/misc%20(6).jpg' },
    { src: '/img/gallery/misc/misc%20(7).jpg' },
    { src: '/img/gallery/misc/misc%20(8).jpg' },
    { src: '/img/gallery/misc/misc%20(9).jpg' },
    { src: '/img/gallery/misc/misc%20(10).jpg' },
    { src: '/img/gallery/misc/misc%20(11).jpg' }
  ]);

  // Composite
  bind('composite', [
    { src: '/img/gallery/upvc/blue-door.png' },
    { src: '/img/gallery/upvc/green-door.png' },
    { src: '/img/gallery/upvc/red-door.png' }
  ]);
  };

  // Try once immediately too (in case scripts are already cached)
  window.__initLG();
})();
        `}
      </Script>
    </>
  )
}

const GalleryPage: FC = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="col-8">
            <h2>Bolton Joinery and Building Service&apos;s previous projects.</h2>
            <p>
              Are you looking to revamp your home? Bolton Joinery &amp; Building Services offers you a
              host of affordable home improvement services ranging from kitchen and bathroom
              installations to window and door fitting in and around Bolton. If you would like to
              discuss your requirements with us, <a href="/contact">contact us</a> today.
            </p>

            <div className="gallery">
              <div className="slider-gallery" id="kitchen-1">
                <a href="/img/gallery/kitchen-1/kitchen%20(1).jpg">
                  <img
                    src="/img/gallery/kitchen-1/thumb/kitchen%20(1).png"
                    alt="Picture of finalized modern kitchen replacement."
                  />
                  <p>Kitchen 1</p>
                </a>
              </div>

              <div className="slider-gallery" id="kitchen-2">
                <a href="/img/gallery/kitchen-2/kitchen%20(1).jpg">
                  <img
                    src="/img/gallery/kitchen-2/thumb/kitchen%20(1).jpg"
                    alt="Picture of finalized kitchen replacement."
                  />
                  <p>Kitchen 2</p>
                </a>
              </div>

              <div className="slider-gallery" id="kitchen-3">
                <a href="/img/gallery/kitchen-3/kitchen%20(1).jpg">
                  <img
                    src="/img/gallery/kitchen-3/thumb/kitchen%20(1).jpg"
                    alt="Picture of finalized kitchen replacement."
                  />
                  <p>Kitchen 3</p>
                </a>
              </div>

              <div className="slider-gallery" id="kitchen-4">
                <a href="/img/gallery/kitchen-4/kitchen%20(1).jpg">
                  <img
                    src="/img/gallery/kitchen-4/thumb/kitchen%20(1).jpg"
                    alt="Picture of finalized kitchen replacement."
                  />
                  <p>Kitchen 4</p>
                </a>
              </div>

              <div className="slider-gallery" id="bathroom-1">
                <a href="/img/gallery/bathroom-1/bathroom%20(1).jpg">
                  <img
                    src="/img/gallery/bathroom-1/thumb/bathroom%20(1).jpg"
                    alt="Picture of finished bathroom."
                  />
                  <p>Bathroom 1</p>
                </a>
              </div>

              <div className="slider-gallery" id="bathroom-2">
                <a href="/img/gallery/bathroom-2/bathroom%20(1).jpg">
                  <img
                    src="/img/gallery/bathroom-2/thumb/bathroom%20(1).jpg"
                    alt="Picture of finished bathroom."
                  />
                  <p>Bathroom 2</p>
                </a>
              </div>

              <div className="slider-gallery" id="bathroom-3">
                <a href="/img/gallery/bathroom-3/bathroom%20(1).jpg">
                  <img
                    src="/img/gallery/bathroom-3/thumb/bathroom%20(1).jpg"
                    alt="Picture of finished bathroom."
                  />
                  <p>Bathroom 3</p>
                </a>
              </div>

              <div className="slider-gallery" id="bathroom-4">
                <a href="/img/gallery/bathroom-4/thumb.png">
                  <img
                    src="/img/gallery/bathroom-4/thumbsmall.png"
                    alt="Picture of finished bathroom."
                  />
                  <p>Bathroom 4</p>
                </a>
              </div>

              <div className="slider-gallery" id="composite">
                <a href="/img/gallery/upvc/blue-door.png">
                  <img src="/img/gallery/upvc/thumbs/upvc.png" alt="Picture of a blue upvc door" />
                  <p>Composite Doors</p>
                </a>
              </div>

              <div className="slider-gallery" id="garage">
                <a href="/img/gallery/garage/thumb.jpg">
                  <img
                    src="/img/gallery/garage/thumbsmall.jpg"
                    alt="Picture of a finished garage conversion with porch."
                  />
                  <p>Garage Conversions</p>
                </a>
              </div>

              <div className="slider-gallery" id="conservatory">
                <a href="/img/gallery/conservatory/thumb.png">
                  <img
                    src="/img/gallery/conservatory/thumbsmall.png"
                    alt="Picture of finished conservatory."
                  />
                  <p>Conservatory</p>
                </a>
              </div>

              <div className="slider-gallery" id="doors">
                <a href="/img/gallery/doors/thumb.png">
                  <img src="/img/gallery/doors/thumbsmall.png" alt="Picture of a door." />
                  <p>Doors</p>
                </a>
              </div>

              <div className="slider-gallery" id="gates">
                <a href="/img/gallery/gates/thumb.png">
                  <img src="/img/gallery/gates/thumbsmall.png" alt="Picture of a gate." />
                  <p>Gates</p>
                </a>
              </div>

              <div className="slider-gallery" id="office">
                <a href="/img/gallery/office/thumb.png">
                  <img
                    src="/img/gallery/office/thumbsmall.png"
                    alt="Picture of an office with shelves and plug sockets."
                  />
                  <p>Office</p>
                </a>
              </div>

              <div className="slider-gallery" id="patio">
                <a href="/img/gallery/patio/thumb.png">
                  <img
                    src="/img/gallery/patio/thumbsmall.png"
                    alt="Picture of a finished patio with tools in the corner"
                  />
                  <p>Patio</p>
                </a>
              </div>

              <div className="slider-gallery" id="porch">
                <a href="/img/gallery/garage/thumb.jpg">
                  <img src="/img/gallery/porch/thumbsmall.jpg" alt="Picture of a finished porch" />
                  <p>Porch</p>
                </a>
              </div>

              <div className="slider-gallery" id="misc">
                <a href="/img/gallery/misc/thumb.png">
                  <img
                    src="/img/gallery/misc/thumbsmall.png"
                    alt="Picture of a hand railing"
                  />
                  <p>Miscellaneous Jobs</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/lightgallery@1.6.4/dist/css/lightgallery.min.css"
      />
      <GalleryScripts />
    </>
  )
}

export default GalleryPage
