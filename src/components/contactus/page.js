import StaticHeader from '@/components/StaticHeader';
import React from 'react';
import './contactus.scss'
import StaticFooter from '@/components/staticFooter';
import Image from 'next/image';

const ContactUsPage = () => {
    const helpItems = [
        {
            title: 'Getting Started',
            description: 'Learn the basics and get up running quickly',
            icon: '/svg/email.svg',
            contacts: 'sales@phanikondru.com'
        },
        {
            title: 'Account Support',
            description: 'Manage your account settings ',
            contacts: 'sales@phanikondru.com',
            icon: '/svg/email.svg'
        },
        {
            title: 'Technical Help',
            description: 'Troubleshoot technical issues and get support',
            icon: '/svg/call.svg',
            contacts: '+91 1234567890'
        }
    ];
    return (

        <div className="container-fluid px-0 flex-grow-1 ">
            <div className="contact-section container overflow-auto  py-3 py-sm-5">
                <h2 className="contact-title  text-center px-0  mb-3">How can we help?</h2>
                <p className="contact-text mb-5" >Get in touch with our sales and support teams for  onboarding support, product questions.</p>
                <div className="row g-4 mb-4 mb-sm-5 mx-lg-3 px-lg-3">
                    {helpItems.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4">
                            <div className="contact-card rounded-3 p-4">
                                <div className='icon-container p-3 rounded'>
                                    <Image style={{ background: 'transparent' }} src={item?.icon} alt={item?.icon} height={30} width={30} />
                                </div>
                                <h3 className="contact-card-title mt-3">{item.title}</h3>
                                <p className="contact-card-description">{item.description}</p>
                                <a className="contact">{item?.contacts}</a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;