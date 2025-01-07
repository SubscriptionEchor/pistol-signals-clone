import Image from 'next/image'
import './testimonials.scss'

export default function Testimonials() {
    const data = {
        title: 'Trusted by 120,000+ Users Worldwide',
        text: 'Explore testimonials and success stories from our loyal community.',
        cardsData: Array(4).fill({
            text: 'Receive daily trading signals powered by advanced AI models trained on vast market data.',
            name: 'Reviewer name'
        })
    }

    return (
        <div className='testimonials-section'>
            <div className='container py-5 mt-5'>
                <div className='testimonials-header mb-5'>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
                <div className='testimonials-wrapper overflow-auto '>
                    <div className='testimonials-scroll d-flex overflow-auto ' >
                        {data?.cardsData?.map((item, index) => (
                            <div className={`testimonial-card ${index % 2 !== 0 ? 'odd' : ''}`} key={index}>
                                <p className='review-text m-0'>{item.text}</p>
                                <div className='stars my-3'>
                                    {[...Array(5)].map((_, i) => (
                                        <Image key={i} className='me-2' src='/svg/star.svg' alt='star' height={20} width={20} />
                                    ))}
                                </div>
                                <p className='reviewer-name m-0'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}