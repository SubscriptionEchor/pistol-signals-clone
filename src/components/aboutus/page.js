import StaticHeader from '@/components/StaticHeader';
import React from 'react';
import './about.scss'
import StaticFooter from '@/components/staticFooter';

const AboutPage = () => {
    return (
        <div className="container-fluid about-page px-0" >
            <StaticHeader />
            <div className="container pb-5">
                <div className="py-5 row mx-0">
                    <h1 className="mb-0 hero-text col-sm-7 col-xl-6 ">
                        AI-Powered Signals,<br />
                        <span className=''>Simplifying Trading</span>
                    </h1>
                    <div className="mt-3 d-flex  align-items-end  mt-sm-0 hero-caption col-sm-5 ">
                        <p className='p-0 m-0' >
                            Let AI handle the complexity of technical analysis—receive tailored signals.
                        </p>
                    </div>
                </div>

                {/* Notification Cards */}
                <div className="row mb-5 mx-0 ">
                    {[1, 2, 3].map((index) => (
                        <div className={`col-sm-4 notifications-card-${index}`} key={index}>
                            <div className={`p-md-4 p-xl-5 p-5  notifications-card  d-flex flex-column align-items-center justify-content-center`}>
                                <h3 className="mb-4 notifications-heading text-wrap" >Instant Notifications</h3>
                                <p className='notifications-text  '>
                                    Stay ahead of the market with real-time updates
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* How we started */}
                <div className=" row started-container pb-3">
                    <h2 className="about-details mb-3 col-sm-6 ">How we started?</h2>
                    <p className='about-details-content  col-sm-6'>
                        Let AI handle the complexity of technical analysis—receive tailored signals.
                        Let AI handle the complexity of technical analysis—receive tailored signals.
                    </p>
                </div>

                {/* Our Mission */}
                <div className="row mission-container pb-3">
                    <h2 className="about-details mb-3 col-sm-6 ">Our Mission</h2>
                    <p className="about-details-content col-sm-6">
                        Let AI handle the complexity of technical analysis—receive tailored signals.
                        Let AI handle the complexity of technical analysis—receive tailored signals.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="row mt-5">
                    <div className='col-12 col-md-6 col-xl-7 px-0'>
                        <h2 className="boost-text px-0" >
                            Lets boost your<br />
                            profits with<br />
                            AI trading signals
                        </h2>
                    </div>
                    <img
                        src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_52683-26979.jpg"
                        alt="Trading Illustration"
                        className="mt-4 rounded-4 col-12 col-md-6 col-xl-5 px-0 bg-danger"
                    />
                </div>
            </div>
            <StaticFooter />
        </div >
    );
};

export default AboutPage;