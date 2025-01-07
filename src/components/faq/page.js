'use client'
import { useState } from 'react';
import './faq.scss'
import Image from 'next/image';
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(null);
    const data = {


        faqTitle: 'Frequently asked questions',
        faqs: [
            {
                question: "What makes our crypto signals unique?",
                answer: "How often are signals updated?"
            },
            {
                question: "How often are signals updated?",
                answer: "How often are signals updated?"
            },
            {
                question: "Do I need prior trading experience to use this platform?",
                answer: "How often are signals updated?"
            },
            {
                question: "Do you only provide crypto signals?",
                answer: "How often are signals updated?"
            },
            {
                question: "Do you only provide crypto signals?",
                answer: "How often are signals updated?"
            }
        ]
    }
    return (
        <div className="faq-section container py-5 ">
            <h2>{data?.faqTitle}</h2>
            <div className="faqs mt-5">
                {data?.faqs.map((faq, index) => (
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
    )
}