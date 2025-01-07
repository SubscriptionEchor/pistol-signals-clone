import Faq from "@/components/faq/page";
import PricingPage from "@/components/pricing/page";
import StaticFooter from "@/components/staticFooter";
import StaticHeader from "@/components/StaticHeader";
import './pricing.scss'


export default function Pricing() {
    const data = {
        title: "Plans & Pricing",
        text: "Get real-time, AI-powered trading signals customized to your risk profile. Whether you're just starting out or trading like a pro, we have the perfect plan to accelerate your profits.",
    }
    return (
        <div className="container-fluid pricing-page px-0">
            <StaticHeader />
            <div className="container">
                <div className="pricing-header text-center">
                    <h1 className='pricing-title'>{data?.title}</h1>
                    <p>{data?.text}</p>
                </div>
                <PricingPage />
            </div>
            <div className='faq-container px-0'>
                <Faq />
            </div>
            <StaticFooter />
        </div>
    )
}