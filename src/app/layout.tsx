import { FC, PropsWithChildren } from 'react'
import { Header, Footer } from '../components'

import '../css/style.scss'

const Root: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body>
      <Header />

      {children}

      <Footer />
    </body>
  </html>
)

export default Root