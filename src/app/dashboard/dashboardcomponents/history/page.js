import Image from "next/image"
import './history.scss'
import Table from "../table/page"


export default function SignalsHistory() {
    const staticContent = {
        signlasHistory: 'Signals History',
        text: 'Discover daily trading signals and stay ahead in the market with expertly AI curated data.',
        allSignals: 'All signals',
        signalsText: 'Discover daily trading signals and stay ahead in the market with expertly AI curated data.'
    }
    const history = {
        overallTrades: 1235,
        overallProfit: '12,355',
        monthlyTrades: 129,
        winRate: 82.5,
        profitPercentage: 50,
        profitableTrades: 82,
        lossPercentage: 50,
        lossTrades: 82,
        currentMonthProfitPercentage: 75,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'

    }
    const tableHeader = [{
        label: 'Trade',
        key: 'isStoploss'
    }, {
        label: 'Coin name',
        key: 'coin'
    },
    {
        label: 'Entry ',
        key: 'entry'
    },
    {
        label: 'Exit',
        key: 'exit'
    }, {
        label: 'Type',
        key: 'type'
    },
    {
        label: 'P/L',
        key: 'pnl'
    }]
    const tableData = Array(10).fill({
        coinName: 'Uniswap',
        isSpot: false,
        type: 'Short',
        coin: "BTC",
        time: 1733443200,
        pnl: 8.54,
        isStoploss: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
        entry: ["\$1234585", "\$1234585", "\$1234585"],
        exit: ["\$ 234585", "\$1234585", "\$1234585"],
    }).map((item, ind) => (
        {
            ...item,
            type: Math.random() < 0.5 ? 'SHORT' : 'LONG',
            pnl: Math.random() < 0.5 ? item.pnl : -item?.pnl,
            isSpot: Math.random() < 0.5,
            isStoploss: Math.random() < 0.5
        }))
    return (
        <div className="p-2">
            <p className="signals-history-heading mb-2">{staticContent?.signlasHistory}</p>
            <p className="signals-history-text mb-4">{staticContent?.text}</p>
            <div className="row">
                <div className="col-sm-5 col-lg-4">
                    <div className="summary-card">
                        <p className="summary-text m-0 mb-3">Summary</p>
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <p className="overall-trades-profit-text mb-2">Overall Trades</p>
                                <p className="overall-trades-value m-0">{history.overallTrades}</p>
                            </div>
                            <div>
                                <p className="overall-trades-profit-text mb-2">Overall Profit</p>
                                <div className="d-flex">
                                    <Image src='/svg/profit.svg' alt='icon' width={15} height={15} />
                                    <p className="overall-profit-value m-0 ms-2">${history.overallProfit}</p>
                                </div>
                            </div>

                        </div>
                        <p className="overall-trades-profit-text mb-2 mt-4">Market Risk</p>
                        <p className="risk-text">Favourable risk-adjusted returns</p>
                        <div>
                            <p className="overall-trades-profit-text mb-2 mt-4">Most profitable coins</p>
                            {Array(5).fill({}).map((_, ind) => <Image key={ind} style={{ marginLeft: ind > 0 ? -10 : 0 }} src={history.image} width={40} height={40} alt="image" />)}
                        </div>
                    </div>

                </div>
                <div className="col-sm-3 mt-3 mt-sm-0 col-lg-4">
                    <div className="total-trades">
                        <p className="m-0 mb-3 total-trades-text">Total Trades</p>
                        <p className="m-0 total-trades-value mb-3">{history.monthlyTrades}</p>
                        <p className="m-0 this-month-text">This month</p>
                    </div>
                    <div className="win-rate">
                        <p className="m-0 mb-3 total-trades-text">Win rate</p>
                        <p className="m-0 mb-3 total-trades-value">{history.winRate}%</p>
                        <p className="m-0 this-month-text">This month</p>
                    </div>
                </div>
                <div className="col-sm-4  mt-3 mt-sm-0  col-lg-4">
                    <div className="total-trades">
                        <p className="m-0 mb-3 total-trades-text">Trade Ratio</p>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="m-0 profit-loss-percentage mb-3">{history.profitPercentage}%</p>
                                <p className="m-0 profit-loss-trades">{history.profitableTrades} profit</p>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <p className="m-0 profit-loss-percentage mb-3">{history.lossPercentage}%</p>
                                <p className="m-0 profit-loss-trades">{history.lossTrades} loss</p>
                            </div>
                        </div>
                    </div>
                    <div className="win-rate">
                        <p className="m-0  current-month-profit-loss">Profit (Current month)</p>
                        <div className="d-flex py-4">
                            <Image src='/svg/profit.svg' alt='image' height={20} width={20} />
                            <p className="m-0 ms-2   current-month-profit-loss-percentage ">{history.currentMonthProfitPercentage}% Total Return</p>
                        </div>
                        {/* <p className="m-0 this-month-text">This month</p> */}
                    </div>

                </div>
            </div>
            <div className="py-5">
                <p className="all-signals-heading mb-2">{staticContent?.allSignals}</p>
                <p className="signals-history-text mb-4">{staticContent?.signalsText}</p>
                <Table header={tableHeader} data={tableData} />
                <div className="row align-items-center justify-content-between mt-4">
                    <p className="results col-12 col-sm-6 m-0">showing 1-10 of 29 trades</p>
                    <div className="col-sm-6 d-flex mt-sm-0 mt-3  justify-content-sm-end" >
                        <button className="btns rounded">
                            <Image className='me-2' src='/svg/previous.svg' alt="image" width={20} height={20} />
                            Previous
                        </button>
                        <button className="btns ms-3 rounded">
                            Next
                            <Image className='ms-2' src='/svg/next.svg' alt="image" width={20} height={20} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}