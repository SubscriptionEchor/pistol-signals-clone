import Image from 'next/image';
import './table.scss'
import { formatDateTime } from '@/utils/utils';

export default function Table({ header, data }) {
    return (
        <div className="table-container rounded-3">
            <table className="table ">
                <thead>
                    <tr>
                        {header?.map((item, index) => {
                            return (
                                <th scope="col" key={index} className={`${index == 0 ? 'fixed-header ' : ''} px-0`}>
                                    {item?.label}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        return (
                            <tr key={index} className=''>
                                <th scope="row" className="fixed-cell px-0">
                                    <div className={`d-flex p-1 align-items-center justify-content-center rounded ${item['isStoploss'] ? 'loss' : 'profit'}`}>
                                        <Image width={30} height={30} src={item['isStoploss'] ? '/svg/arrowlefttable.svg' : '/svg/arrowrighttable.svg'} alt="image" />
                                    </div>
                                </th>
                                <td className='px-0'>
                                    <div className='d-flex align-items-center'>
                                        <Image width={30} height={30} src={item?.image} alt="image" />
                                        <div className='ms-2'>
                                            <p className='m-0 coin-name '>{item['coin']}</p>
                                            <p className='m-0 time text-nowrap'>{formatDateTime(item['time'])}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-0'>
                                    <div className='entry-exit-type d-flex align-items-center'>
                                        <p className='m-0 text-nowrap'>{item['entry'].join(' / ')}</p>
                                    </div>
                                </td>
                                <td className='px-0'>
                                    <div className='d-flex entry-exit-type align-items-center'>
                                        <p className='m-0 text-nowrap'>{item['exit'].join(' / ')}</p>
                                    </div>
                                </td>
                                <td className='px-0'>
                                    <div className='d-flex entry-exit-type  align-items-center'>
                                        {item?.isSpot ? 'SPOT' : item['type']}
                                    </div>
                                </td>
                                <td className='px-0'>
                                    <div className={`${item['pnl'] >= 0 ? 'positive-pnl' : 'negative-pnl'} d-flex  align-items-end pnl d-flex  align-items-center`}>
                                        <Image width={15} height={15} src={item['pnl'] > 0 ? '/svg/profit.svg' : '/svg/loss.svg'} alt="image" />
                                        <p className='m-0 ms-2'>{item['pnl']}%</p>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}