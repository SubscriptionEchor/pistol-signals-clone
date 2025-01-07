import { React, useContext, useState } from "react";
import Image from "next/image";
import './header.scss'
import { useRouter } from "next/navigation";
import { PageContext } from "@/context/context";
export default function StaticHeader() {
    const { selectedPage, setSeletedPage } = useContext(PageContext)
    const router = useRouter()
    const pages = [
        {
            title: 'About us',
            page: '/about'
        },
        {
            title: 'Contact us',
            page: '/contactus'
        },
        {
            title: 'Pricing',
            page: '/pricing'
        },
        {
            title: 'Dashboard',
            page: '/dashboard'
        }
    ]

    return (
        <nav className="header container-fluid py-1 py-sm-3 px-0">
            <div className="container d-flex justify-content-between">
                <div className="d-flex align-items-center gap-4">
                    <a onClick={() => { router.push('/'); setSeletedPage('') }} className="d-flex align-items-center text-white" href="#">
                        <Image src={'/svg/logo-dark-theme.svg'} alt='alt' height={50} width={100} />
                    </a>
                    {pages?.map((item, index) => (
                        <a
                            key={index}
                            onClick={() => { router.push(item?.page); setSeletedPage(item?.page) }}
                            className={`nav-items d-none d-sm-flex ${selectedPage == item?.page ? ' selected-nav-item' : ' '}`}
                        >
                            {item?.title}
                        </a>
                    ))}
                </div>
                <div className="d-none d-md-flex ms-auto align-items-center gap-3">
                    <button onClick={() => router.push('/onboarding')} className='login'>
                        Log in
                    </button>
                    <button onClick={() => router.push('/onboarding')} className='get-started-btn'>
                        Get Started
                    </button>
                </div>

                <button className="btn p-0 d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <Image src={'/svg/hamburger.svg'} alt='alt' height={20} width={20} />
                </button>
                <div className="offcanvas-custom offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: '50%' }}>
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body-cutsom p-3">
                        {pages?.map((item, index) => (
                            <a
                                key={index}
                                onClick={() => { router.push(item?.page); setSeletedPage(item?.page) }}
                                className={`nav-items-offcanavs mb-3 ${selectedPage == item?.page ? 'selected-nav-item' : ''}`}
                            >
                                {item?.title}
                            </a>
                        ))}
                        <button onClick={() => router.push('/onboarding')} className='login nav-items-offcanavs mb-3'>
                            Log in
                        </button>
                        <button onClick={() => router.push('/onboarding')} className='get-started-btn nav-items-offcanavs'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}