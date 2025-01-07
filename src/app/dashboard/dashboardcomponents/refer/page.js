"use client"
import Image from "next/image";
import './refer.scss'
import { useState } from "react";
import { formatDateTime } from "@/utils/utils";

export default function Refer() {
    const [email, setEmail] = useState('')
    const tableHeader = [{
        label: '#',
        key: 'rank'
    }, {
        label: "Refered Uses's name",
        key: 'username'
    },
    {
        label: 'Date Referred ',
        key: 'date'
    },
    {
        label: 'Status',
        key: 'status'
    },
    {
        label: 'Earnings',
        key: 'earnings'
    }, {
        label: 'Action',
        key: 'action'
    }]
    const tableData = Array(10).fill({
        date: 1733443200,
        earnings: '$20 is approximately 15% of $150.',
    }).map((item, ind) => (
        {
            ...item,
            date: formatDateTime(item?.date),
            rank: ind + 1,
            username: 'user' + String(ind),
            status: Math.random() < 0.5 ? 'Pending' : 'Completed',
            action: Math.random() < 0.5 ? 'N/A' : 'Resend Invite'
        }))
    return (
        <div className="py-4 refer-container">
            <p className="refer-earn-text">Refer and earn</p>
            <div className="d-flex align-items-center">
                <Image src='/svg/sharenetwork.svg' alt='image' height={25} width={20} />
                <p className="ms-2 m-0 referal-description">For every succesful referal you will get 50 USD</p>
            </div>
            <div className="mt-5">
                <p>Share with a link</p>
                <div className="row align-items-center mx-0">
                    <div className="share-container rounded-3 col-12  col-lg-5 col-sm-7">
                        <p className="m-0 text-nowrap text-truncate py-3">https://creativeinvites.com/join/--abcD123xyz456</p>
                    </div>
                    <button className=" ms-0 ms-sm-3 mt-3 mt-sm-0 py-2 col-3 col-sm-1 copy-btn border-0  rounded-3">Copy</button>
                </div>
                <p className="mt-5">Send an invitation via Email</p>
                <div className="row mx-0 align-items-center">
                    <input onChange={(e) => setEmail(e?.target.value)} placeholder="Please provide your email address" className="col-12 py-3  share-container rounded border-0 col-lg-5 col-sm-7" />
                    <button disabled={!email} className={`copy-btn ${!email ? 'button-disabled' : ''}  ms-0 ms-sm-3 mt-3 mt-sm-0 py-2 col-3 col-sm-1  border-0  rounded-3`}>Invite</button>
                </div>
            </div>
            <p className="mt-5">Your Referrals</p>
            <div className="table-container pb-0 rounded-3">
                <table className="table pb-0">
                    <thead>
                        <tr>
                            {tableHeader?.map((item, index) => {
                                return (
                                    <th scope="col" key={index} className={`${index == 0 ? 'fixed-header' : ' '} px-0 text-nowrap`}>
                                        {item?.label}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.map((item, index) => {
                            return (
                                <tr key={index} className=''>
                                    {tableHeader.map((_, index) => {
                                        return (
                                            <>
                                                {index == 0 ?
                                                    <th key={index} scope="row" className={`${index == 0 ? ' fixed-cell' : ' ' + ' text-nowrap'} ${_.key} `}>
                                                        {item[_.key]}
                                                    </th> : <td className={`text-nowrap px-0 ${_.key + ' ' + item[_.key]} `}>{item[_.key]}</td>}
                                            </>)
                                    })}

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}