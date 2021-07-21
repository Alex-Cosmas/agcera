import Footer from '../Footer'
import Header from '../Header'

function Layout({ children }) {
  return (
    <>
      <div className='py-5'>
        <Header />
      </div>
      <main className=''>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
