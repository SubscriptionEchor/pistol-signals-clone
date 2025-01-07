'use client'
import { React, useContext, useState } from "react";
import Image from "next/image";
import './header.scss'
import { useRouter } from "next/navigation";
import { PageContext } from "@/context/context";
export default function DynamicHeader({ onClick }) {
    const { selectedPage, setSeletedPage } = useContext(PageContext)
    const router = useRouter()
    const pages = [{
        page: 'dashboard',
        title: 'Dashboard',
        icon: (selected) => !selected ? '/svg/dashboard.svg' : '/svg/dashboardselected.svg'
    },
    {
        page: 'signals',
        title: 'Signals History',
        icon: (selected) => !selected ? '/svg/notes.svg' : '/svg/notesselected.svg'
    },
    {
        page: 'support',
        title: 'Support & FAQs',
        icon: (selected) => !selected ? '/svg/support.svg' : '/svg/support.svg'
    },
    {
        page: 'profile',
        title: 'User Profile',
        icon: (selected) => !selected ? '/svg/user.svg' : '/svg/user.svg'
    },
    {
        page: 'affiliation',
        title: 'Affiliation',
        icon: (selected) => !selected ? '/svg/user.svg' : '/svg/user.svg'
    },
    ]

    return (
        <nav className="header mx-0  ">
            <div className=" d-flex justify-content-between">
                <a onClick={() => { router.push('/dashboard'); setSeletedPage('/dashboard') }} className="d-flex align-items-center text-white" href="#">
                    <Image src={'/svg/logo-dark-theme.svg'} alt='alt' height={50} width={100} />
                </a>
                <button className="btn p-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <Image src={'/svg/hamburger.svg'} alt='alt' height={20} width={20} />
                </button>
                <div className=" offcanvas-custom offcanvas offcanvas-end " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: '50%' }}>
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close  text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body-cutsom p-3 ">
                        {pages?.map((item, index) => <p key={index} onClick={() => { onClick(item?.page); setSeletedPage(item?.page) }} className={`text-start nav-items-offcanavs mb-3 ${selectedPage == item?.page ? ' selected-nav-item' : ''}`}>{item?.title}</p>)}
                    </div>
                </div>
            </div>
        </nav>
    )
}