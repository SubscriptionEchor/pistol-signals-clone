import "./page.scss";
import Insights from "../insight/page";
import NotificationsAndServices from "../notifictaionsAndSupport/page";
import Testimonials from "../testimonials/page";
import PricingPage from "../pricing/page";
import Faq from "../faq/page";

export default function HomePage() {
    const data = {
        buttonText1: 'AI for trading',
        buttonText2: 'Join the revolution',
        heroTitle: 'AI-Powered Signals, Simplifying Trading Decisions',
        heroText: 'Let AI handle the complexity of technical analysis—receive tailored signals.',
        pricingAndPlans: 'See Pricing & Plans',
        offer: 'Grab your December offer 40% for limited time.',
        tradeSmarterTitle: 'Trade smarter, not harder.',
        tradeSmarterText: 'Your one-stop solution for daily crypto signals.',
        section3Tite: 'Get intelligent market insights'

    }


    return (
        <div className="home-page">
            <div className="video-container">
                <div className="container-fluid">
                    <div className="container">
                        <div className="content  pt-sm-0" >
                            <div className="gradient-btn p-2 rounded-pill d-flex align-items-center">
                                <p className="btn-text btn1 m-0 px-2">{data?.buttonText1}</p>
                                <p className="btn-text btn2 m-0 px-2">{data?.buttonText2}</p>
                            </div>
                            <p className="hero-title mt-3">{data?.heroTitle}</p>
                            <p className="hero-text">{data?.heroText}</p>
                            <a href="#pricing" className="pricing-planing rounded mt-4">
                                <p className="m-0 p-2 ">{data?.pricingAndPlans}</p>
                            </a>
                            <p className="mt-4 offer-text">{data?.offer}</p>
                        </div>
                        <div className="background-gradient"></div>
                        <video className="video" autoPlay muted loop>
                            <source src="./video/video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>
            <div className="insights-bg ">
                <div className="container-fluid">
                    <div className="container py-5 section-2">
                        <p className="text-center title m-0">{data?.tradeSmarterTitle}</p>
                        <p className="text-center text m-0 mt-2">{data?.tradeSmarterText}</p>
                        <video className="video rounded-3  mt-3 mt-sm-5" autoPlay muted loop>
                            <source src="./video/section2-video.mp4" type="video/mp4" />
                        </video>
                    </div>

                </div>
            </div>
            <div className="insights-container ">
                <Insights title={data?.section3Tite} />
                <NotificationsAndServices />
                <Testimonials />
            </div>
            <div id="pricing" className="pricing-container">
                <PricingPage />
            </div>
            <div className="insights-container ">
                <Faq />
            </div>
        </div>
    );
}
