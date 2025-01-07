'use client'
import { useState } from 'react'
import './signalsoverview.scss'
import moment from 'moment'
import Image from 'next/image'
import { formatDateTime } from '@/utils/utils'

export default function SignalsOverview({ staticContent }) {
    const [filterOptions, setFilterOptions] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('All')

    const signalsOverView = Array.from({ length: 10 }, () => ({
        isActive: Math.random() < 0.5,
        isSpot: Math.random() < 0.5,
        type: 'Short',
        coin: "BTC",
        time: 1733443200,
        leverage: '4x',
        isStopLoss: Math.random() < 0.5,
        peakProfitPercentage: 30,
        profitPercentage: 8.54,
        stopLoss: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
        entry: ["\$ 1234585", "\$ 1234585", "\$ 1234585"],
        exit: ["\$ 1234585", "\$ 1234585", "\$ 1234585"],
    }));

    const options = ['All', 'Active trades', 'Spot', 'Futures']

    return (
        <div className='signals-overview px-2 py-4'>
            <div className='d-flex justify-content-between mb-3'>
                <p className='signals-overviewText m-0'>{staticContent?.signalsOverview}:</p>
                <div onClick={() => setFilterOptions(!filterOptions)} className='d-flex rounded-3 p-2 filter-container position-relative'>
                    <p className='filters-text m-0 me-2 text-nowrap'>{selectedFilter}</p>
                    <Image src={'./svg/fadershorizontal.svg'} height={20} width={20} alt="image" />
                    {filterOptions && <div onClick={(e) => { e?.stopPropagation() }} className='position-absolute filters-section p-3 rounded-3 border-light'>
                        {options?.map((item, index) => {
                            return (
                                <div onClick={(e) => {
                                    e?.stopPropagation()
                                    setSelectedFilter(item)
                                    setFilterOptions(false)
                                }} key={index} className='filters p-2 rounded text-center '>
                                    <p className='m-0'>{item}</p>
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </div>
            <div className='row  pt-2'>
                {signalsOverView?.map((item, index) => {
                    return (
                        <div className='rounded-3 col-sm-6 col-lg-4 mb-4' key={index}>
                            <div className='signals-overview-card position-relative' >
                                {!item?.isActive ? <div className='gradient-bottom-shadow'></div> : null}
                                {item?.isActive && <p className='p-1 px-3 m-0  active-card position-absolute' style={{ top: 0, left: 0 }}>Active</p>}
                                {!item?.isActive && <p className='p-1 px-3 m-0 position-absolute profit-loss-card' style={{ bottom: 0, left: 0, right: 0 }}>{item?.isStopLoss ? `SL-${item?.stopLoss}` : `Peak profit ${item?.peakProfitPercentage}`}%</p>}
                                <div className='d-flex coin-details pb-3 justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <Image className='me-2' src={item?.image} alt="coin" width={40} height={40} />
                                        <div>
                                            <p className='overview-coin m-0'>{item?.coin}</p>
                                            <p className='m-0 overview-time '>{formatDateTime(item?.time)}</p>
                                        </div>
                                    </div>

                                    <div className={`${item?.isSpot ? 'spot' : 'features'} mb-0 pb-0`}>
                                        <p className='m-0 spot-features-text '>{item?.isSpot ? 'Spot' : item?.type}</p>
                                    </div>
                                </div>
                                <div className='pt-4'>
                                    <div className='d-flex'>
                                        <Image src={'./svg/arrowright.svg'} height={50} width={50} alt="image" />

                                        <div className='ms-2'>
                                            <p className='m-0 entry-exit'>Entry</p>
                                            <p className='m-0 entry-exit-prices'>{item?.entry.join(' / ')}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <Image src={'./svg/arrowleft.svg'} height={50} width={50} alt="image" />
                                        <div className='ms-2'>
                                            <p className='m-0 entry-exit'>Exit</p>
                                            <p className='m-0 entry-exit-prices'>{item?.entry.join(' / ')}</p>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between mt-4'>
                                        <div className='stoploss-leverage d-flex rounded-4 px-3 py-sm-2  py-1'>
                                            <Image src={'./svg/stoploss.svg'} alt="image" height={30} width={30} />
                                            <div className='ms-1'>
                                                <p className='m-0 mb-1 stoploss-leverage-text'>Stop Loss</p>
                                                <p className='m-0 stoploss-leverage-value'>{item?.stopLoss}%</p>
                                            </div>
                                        </div>
                                        <div className='stoploss-leverage d-flex rounded-4 px-3 py-sm-2 py-1'>
                                            <Image src={'./svg/leverage.svg'} alt="image" height={30} width={30} />
                                            <div className='ms-1'>
                                                <p className='m-0 mb-1 stoploss-leverage-text'>Leverage</p>
                                                <p className='m-0 stoploss-leverage-value'>{item?.leverage}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}