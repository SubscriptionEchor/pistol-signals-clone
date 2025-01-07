
'use client'
import StaticFooter from '@/components/staticFooter';
import StaticHeader from '@/components/StaticHeader';
import React, { useEffect, useState } from 'react';
import './pricing.scss';


export default function PricingPage({ selectedPriceId, onClick }) {
    const [selectedPlan, setSelectedPlan] = useState(0);
    const [pricingData, setPricingData] = useState([])
    const data = [
        {
            id: 1,
            title: 'Monthly',
            currency: '$',
            amount: '17',
            period: 'per month',
            description: 'Best for beginners to check our service. Can access to daily trading indicators.',
            features: [
                'Daily Signals',
                'Risk-Based Signals',
                'Basic Email Support'
            ]
        },
        {
            id: 2,
            title: 'Quarterly',
            currency: '$',
            amount: '179',
            period: 'per 4 months',
            saving: '$179',
            bestValue: true,
            bestValueContent: '8% off fidelity discount',
            description: 'Best for beginners to check our service. Can access to daily trading indicators.',
            features: [
                'Daily Signals',
                'Risk-Based Signals',
                'Priority Support',
                'Enhanced Signal Accuracy'
            ]
        },
        {
            id: 3,
            title: 'Yearly',
            currency: '$',
            amount: '179',
            period: 'per 4 months',
            saving: '$179',
            bestValue: true,
            bestValueContent: '8% off fidelity discount',
            description: 'Best for beginners to check our service. Can access to daily trading indicators.',
            features: [
                'Daily Signals',
                'Risk-Based Signals',
                'Priority Support',
                'Higher Signal Accuracy',
                'Priority Support'
            ]
        }
    ]
    useEffect(() => {
        if (!selectedPriceId) {
            setPricingData(data)
            return
        }
        setPricingData(data.filter((_, index) => _?.id == selectedPriceId))
    }, [selectedPriceId])

    const onSelect = (id) => {
        setSelectedPlan(id)
        if (onClick) {
            onClick(id)
        }
    }

    return (

        <div className={`row g-0 ${selectedPriceId ? 'pb-0 align-items-center justify-content-center' : 'pb-5 '}`}>
            {pricingData.map((plan, index) => (
                <div className={`col-12  ${selectedPriceId ? 'col-sm-6 col-lg-5' : 'col-sm-4'} mb-2 mb-sm-0`} key={index}>
                    <div className={`pricing-card p-4 p-lg-5 ${selectedPlan === plan?.id ? 'selected' : ''} 
                ${(index !== pricingData.length - 1) && (selectedPlan - 1 !== plan?.id) ? 'with-border' : ''}`}>
                        <div className='plan-details'>
                            <h3>{plan.title}</h3>
                            <div className="price-wrapper mt-3 ">
                                <span className="currency">{plan.currency}</span>
                                <span className="amount mx-1">{plan.amount}</span>
                                <span className="period">{plan.period}</span>
                            </div>
                            <div className='d-flex align-items-center savings-card'>
                                {plan.saving && <div className="saving">{plan.saving}</div>}
                                {plan?.bestValue && <span className="ms-2 best-value p-1 px-2 text-nowrap text-center rounded">{plan?.bestValueContent}</span>}
                            </div>
                            <p className="description mt-4">{plan.description}</p>
                            <ul className="features mt-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <button onClick={() => onSelect(plan?.id)} className="get-started-btn mt-5">Get Started</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
