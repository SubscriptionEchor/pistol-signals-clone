'use clinet'
import Image from 'next/image'
import './dashboard.scss'
import Speedometer from '../speedometer/page'
import StylishLineChart from '../linechart/page'
import SignalsOverview from '../signalsoverview/page'

export default function DashBoardComponent() {

    const staticContent = {
        welcomeText: 'Welcome,',
        text: 'Discover daily trading signals and stay ahead in the market with expertly AI curated data.',
        gainers: 'Gainers',
        losers: 'Losers',
        marketCap: 'Total Market Cap',
        signalsOverview: 'Signals Overview'
    }
    const marketData = {
        marketCap: '2.80 T',
        percentage: 4.17,
    }
    const tradesData = Array(10).fill({
        coin: "BTC",
        price: "$ 1234585",
        percentage: 8.54,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
    }).map((item, ind) => ({ ...item, isProfitable: ind % 2 == 0, icon: ind % 2 == 0 ? '/svg/profit.svg' : '/svg/loss.svg' }))

    // const getRandomBoolean = () => ; // Returns true or false randomly

    return (
        <div>
            <p className="welcome-text mb-1 px-2">{staticContent?.welcomeText} LUCA</p>
            <p className="welcome-text-content px-2 m-0">{staticContent?.text}</p>
            <div className='row py-4 px-2 trading-cards-data position-relative'>
                <div className='gradient-shadow'></div>
                <div className='cards'>
                    <div className='gainers-loosers-card px-4 pt-4 pb-1 h-100  '>
                        <p className='heading pb-3'>{staticContent?.gainers}</p>
                        {tradesData.filter(item => item?.isProfitable)?.map((item, index) => {
                            return (
                                <div key={index} className='d-flex mb-2 lign-items-center justify-content-between '>
                                    <div className='d-flex align-items-center '>
                                        <p className='m-0 index'>{index + 1}.</p>
                                        <Image className='mx-2' src={item?.image} alt="coin" width={20} height={20} />
                                        <p className='m-0 coin-name'>{item?.coin}</p>

                                    </div>
                                    <div className=' d-flex flex-column align-items-end'>
                                        <p className='m-0 price '>{item?.price}</p>
                                        <div className='d-flex align-items-end mt-1'>
                                            <Image className='mx-2 pb-1 ' src={item?.icon} alt="coin" width={15} height={15} />
                                            <p className='m-0 p-0 profit-percentage'>{item?.percentage}%</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='mt-3 mt-sm-0 ps-sm-0 cards' >
                    <div className='gainers-loosers-card px-4 pt-4  pb-1 h-100 '>
                        <p className='heading pb-3'>{staticContent?.losers}</p>
                        <div className='d-flex flex-column justify-content-between'>
                            {tradesData.filter(item => !item?.isProfitable)?.map((item, index) => {
                                return (
                                    <div key={index} className='d-flex mb-2 lign-items-center justify-content-between'>
                                        <div className='d-flex align-items-center'>
                                            <p className='m-0 index'>{index + 1}.</p>
                                            <Image className='mx-2' src={item?.image} alt="coin" width={20} height={20} />
                                            <p className='m-0 coin-name'>{item?.coin}</p>

                                        </div>
                                        <div className=' d-flex flex-column align-items-end'>
                                            <p className='m-0 price '>{item?.price}</p>
                                            <div className='d-flex align-items-start mt-1'>
                                                <Image className='mx-2 pt-1' src={item?.icon} alt="coin" width={15} height={15} />
                                                <p className='m-0 p-0 loss-percentage'>{item?.percentage}%</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='mt-3 mt-sm-0 ps-sm-0  card-2'>
                    <div className='market-cap p-3 px-4 pt-4 gainers-loosers-card '>
                        <p className='marketcap-text m-0'>{staticContent?.marketCap}</p>
                        <p className='marketcap-value m-0'>$ {marketData?.marketCap}</p>

                        <div className='d-flex align-items-center mt-1'>
                            <Image width={20} height={20} alt="chart" src={'/svg/trendup.svg'} />
                            <p className={`ms-2 m-0 p-0 ${marketData?.percentage > 0 ? 'market-percentage-positive' : 'market-percentage-negative'}`}> {marketData?.percentage > 0 ? `+` : ''}{marketData?.percentage}</p>
                        </div>
                        <StylishLineChart />
                    </div>
                    <div className=' mt-3 gainers-loosers-card mt-sm-2 '>
                        <Speedometer />
                    </div>
                </div>

            </div>
            <SignalsOverview staticContent={staticContent} />
        </div >
    )
}