import "antd/dist/antd.css";
import "../styles/iranYekanFont.css";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/antCustomization.css";
import { ConfigProvider } from "antd";
import fa from "antd/lib/locale/fa_IR";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Navbar from "components/Global/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link
					rel="preload"
					href="/fonts/iranyekanwebblackfanum.woff"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/iranyekanwebboldfanum.woff"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/iranyekanwebextrablackfanum.woff"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/iranyekanwebextraboldfanum.woff"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/iranyekanweblightfanum.woff"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/iranyekanwebmediumfanum.woff"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/iranyekanwebregularfanum.woff"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/iranyekanwebthinfanum.woff"
					as="font"
					crossOrigin=""
				/>
				<link rel="icon" href="/favicon.ico" />
				{/* <meta
					name="title"
					property="og:title"
					content="فروشگاه دوران"
					key="title"
				/>
				<meta property="og:site_name" content="فروشگاه دوران" />
				<meta
					name="type"
					property="og:type"
					content="website"
					key="type"
				/>
				<meta
					name="description"
					property="og:description"
					content="بستر تخصصی خرید کفش های اسنیکرز"
					key="description"
				/>
				<meta
					name="image"
					property="og:image"
					itemProp="image"
					content="https://duran.ir/image/Logo-DURAN.jpg"
				/>
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:width" content="256" />
				<meta property="og:image:height" content="256" />
				<meta name="geo.region" content="IR-07" />
				<meta name="geo.placename" content="Tehran" />
				<meta name="DC.title" content="فروشگاه دوران" />
				<meta
					name="geo.position"
					content="35.771761;51.396307"
				/>
				<meta name="ICBM" content="35.771761, 51.396307" />
				<meta
					name="url"
					property="og:url"
					content="https://duran.ir"
					key="url"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="theme-color"
					media="(prefers-color-scheme: light)"
					content="white"
				/>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="white"
				/> */}
			</Head>
			<Provider store={store}>
				<ConfigProvider direction="rtl" locale={fa}>
					<Navbar />
					<Component {...pageProps} />
				</ConfigProvider>
			</Provider>
		</>
	);
}

export default MyApp;
