import Image from 'next/image'
import './subscription.scss'
export default function Subscription() {

    return (
        <div className="py-4 upgrade-plan-container  ">
            <p className="current-plan">Current Plan</p>
            <div>
                <p className='plan-type my-4'>1 Month</p>
                <div className="d-flex plan-details my-3 p-3 rounded-3">
                    <Image src='svg/calendarblank.svg' width={20} height={20} alt='image' />
                    <p className="m-0 plan ms-2">Your next bill is $120 on 26 Dec, 2024.</p>
                </div>
            </div>
            <p className='mt-4 plans'>$120/month</p>
            <div className='d-flex mt-4'>
                <button className='upgrade-btn rounded me-2'>Upgrade</button>
                <button className='cancel-btn rounded'>Cancel plan</button>
            </div>
            <p className='view-pricing mt-4'>View all plans & features on the <span className='pricing-text'>Pricing</span> page.</p>

        </div>
    )
}