
import './notifictaionsandservice.scss'

export default function NotificationsAndServices() {
    const data = [
        {
            title: 'Instant Notifications',
            text: 'Stay ahead of the market with real-time updates',
            points: ['Telegram Integrations', 'Telegram Integrations', 'Telegram Integrations']

        },
        {
            title: 'Support & Feedback',
            text: 'Stay ahead of the market with real-time updates',
            points: ['Telegram Integrations', 'Telegram Integrations']

        }
    ]
    return (
        <div className='container-fluid pt-4'>
            <div className='container'>
                <div className='row notification-service-container'>
                    {data?.map((item, index) => {
                        return (
                            <div className='col-sm-6 col-12 notification-service p-4' key={index}>
                                <p className='notification-service-title'>{item?.title}</p>
                                <p className='notification-service-text'>{item?.text}</p>
                                {item?.points.map((points, ind) => {
                                    return (
                                        <div key={ind} className='d-flex align-items-center mt-2'>
                                            <div className='dot p-1' />
                                            <p className=' ms-2 notification-service-text m-0 '>{points}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}