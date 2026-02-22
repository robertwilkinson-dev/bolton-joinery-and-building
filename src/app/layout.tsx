import { FC, PropsWithChildren } from 'react'
import { Header, Footer } from '@/components'
import Head from "next/head";

import '../css/style.scss'

const Root: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
  <Head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBL6hxc1rs-fmvRVsNy461RqAnbnYwXXIg&callback=initMap"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/lightgallery@1.6.4/src/css/lightgallery.css"/>
    <title>Bolton Joinery & Building</title>
  </Head>

  <body>
  <Header/>

  {children}

  <Footer/>
  </body>
  </html>
)

export default Root