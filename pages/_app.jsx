import Navbar from '@Components/Navbar'
import 'styles/globals.scss'

const TabManager = {
    '/': 0,
    '/blocks/create': 1,
    '/blocks/delete': 1,
    '/classes': 2,
    '/generate/selector': 3,
    '/generate/viewer': 3
}

function MyApp({ Component, pageProps, router }) {
    const tab = TabManager[router.pathname]

    return (
    <>
        <Navbar tab={tab} />
        <Component {...pageProps} />
    </>)
}

export default MyApp