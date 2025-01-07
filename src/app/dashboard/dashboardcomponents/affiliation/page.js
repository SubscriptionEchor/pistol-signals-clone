'use client'
import Image from "next/image"
import './affiliation.scss'
import Faq from "@/components/faq/page"
import { useState } from "react";

export default function AffiliationPage() {
    const [openFaq, setOpenFaq] = useState(null);
    const staticContent = {
        title: 'Affiliation Program',
        subtitle: 'Make 30% from each sale by becoming our partner',
        description: 'Our AI will create trading signals, you make money! Join our affiliate program today and earn 30% of each successful subscription you refer to us.',
        whyJoinTitle: 'Why join us?',
        whyJoinText: 'Because, you become our partner. We handle the trading signals, support and everything. You earn passive money by promoting us.',
        faqTitle: 'Frequently asked questions'
    }

    const benefits = [{
        title: '30% of each sale you get',
        text: 'Get 30% of each sale you refer to us. That’s  more than industry average. Earn up to $40 on each sale!',
        icon: 'svg/wallet.svg'
    }, {
        title: '30 days of Tracking Length',
        text: 'Every user you refer will be valid for 30 days. If anyone buys within this timeframe, you get commission.',
        icon: 'svg/calendar.svg'
    }]

    const tags = ['Best Service Quality', 'Best Support', 'Best Product Quality', 'Very Highest Rate']

    const faqs = [{
        question: 'Do you offer custom request?',
        answer: 'Yes, we offer custom solutions tailored to your needs.'
    }, {
        question: 'Are there any limit to number of tracked backlinks under my account?',
        answer: 'No, there are no limits on the number of tracked backlinks.'
    }, {
        question: 'Can I upgrade or downgrade my plan later?',
        answer: 'Yes, you can modify your plan at any time.'
    }]

    return (
        <div className="p-2 position-relative">
            <div className='gradient-shadow'></div>
            <div className=" d-flex flex-column align-items-center affiliation-header text-center">
                <p className="affiliation-title mb-4">{staticContent.title}</p>
                <p className="affiliation-subtitle mb-3">{staticContent.subtitle}</p>
                <p className="affiliation-description text-center mb-4">{staticContent.description}</p>
                <button className="primary-btn px-5">Become a Affiliate</button>
            </div>

            <div className="row mt-5">
                {benefits.map((benefit, index) => (
                    <div key={index} className="col-sm-6 mb-4">
                        <div className="benefit-card d-flex">
                            <div className="icon-wrapper">
                                <Image src={benefit.icon} alt="icon" width={50} height={50} />
                            </div>
                            <div className="ms-2">
                                <p className="benefit-title text-start mb-2">{benefit.title}</p>
                                <p className="benefit-text text-start m-0">{benefit.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="why-join-section d-flex flex-column align-items-center text-center mt-5">
                <p className="why-join-title mb-2">{staticContent.whyJoinTitle}</p>
                <p className="why-join-text mb-4">{staticContent.whyJoinText}</p>
                <div className="tags-wrapper">
                    {tags.map((tag, index) => (
                        <div key={index} className="d-flex p-2 align-items-center tag-container">
                            <div className='dot p-1' />
                            <span className="tag ms-2">{tag}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="affiliation-faq-section px-0 container py-5 ">
                <h2 className="heading text-center">Frequently asked questions</h2>
                <div className="faqs mt-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item mb-3 ${openFaq === index ? 'active' : ''}`}
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                <Image style={{ background: 'transparent', transform: `rotate(${openFaq === index ? 180 : 0}deg )`, transition: 'transform 0.3s ease 0.2s', }} src='svg/caret.svg' alt={"caret"} height={15} width={15} />
                            </div>
                            {openFaq === index && (
                                <div className="faq-answer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div >
        </div>
    )
}