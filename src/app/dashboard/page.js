'use client'
import { useState } from "react";
import Image from "next/image";
import './page.scss'
import DashBoardComponent from "./dashboardcomponents/dashboard/page";
import SignalsHistory from "./dashboardcomponents/history/page";
import Subscription from "./dashboardcomponents/subscription/page";
import Refer from "./dashboardcomponents/refer/page";
import SupportAndFaq from "./dashboardcomponents/support/page";
import Profile from "./dashboardcomponents/profile/page";
import AffiliationPage from "./dashboardcomponents/affiliation/page";
import DynamicHeader from "./dashboardcomponents/header/page";

export default function Home() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [currentPage, setCurrentPage] = useState('dashboard')

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    const Mainmenu = {
        title: 'Main Menu',

        items: [{
            page: 'dashboard',
            title: 'Dashboard',
            icon: (selected) => !selected ? '/svg/dashboard.svg' : '/svg/dashboardselected.svg'
        },
        {
            page: 'signals',
            title: 'Signals History',
            icon: (selected) => !selected ? '/svg/notes.svg' : '/svg/notesselected.svg'
        }
        ]
    }
    const additonaloptions = {
        title: 'Additonal Options',
        items: [
            // {
            //     page: 'subscription',
            //     title: 'Subscription Details',
            //     icon: (selected) => !selected ? '/svg/notes.svg' : '/svg/notesselected.svg'
            // },
            // {
            //     page: 'refer',
            //     title: 'Refer a Buddy',
            //     icon: (selected) => !selected ? '/svg/share.svg' : '/svg/shareselected.svg'
            // },
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
    }
    const data = {
        logo: '/svg/logo-dark-theme.svg'
    }

    const renderComponents = (currentPage) => {
        switch (currentPage) {
            case 'signals':
                return <SignalsHistory />
            case 'subscription':
                return <Subscription />
            case 'refer':
                return <Refer />
            case 'support':
                return <SupportAndFaq />
            case 'profile':
                return <Profile />
            case 'affiliation':
                return <AffiliationPage />
            default:
                return <DashBoardComponent />
        }
    }

    return (
        <div className="container-fluid d-sm-block dashboard">
            <div className="row flex-nowrap  min-vh-100">
                <div className={`d-none  vh-100 d-xl-flex pe-0  flex-column justify-content-between position-sticky top-0 col-auto dashboard-sidebar ${isExpanded ? 'col-md-3 col-xl-2' : 'col-1'}  `}>
                    <div className="d-flex  flex-column align-items-sm-start  pt-2 text-white ">
                        <div className="m-0 px-3 p-0">
                            <img src={data?.logo} alt='image' height={50} width={150} />
                        </div>
                        <button onClick={toggleSidebar} className="btn px-3 px-0 outline-none text-white mb-3">
                            {isExpanded ? 'Collapse' : 'Expand'}
                        </button>
                        <div className="w-100">
                            <p className="dashboard-title px-3">{Mainmenu?.title}</p>
                            {Mainmenu?.items.map((item, index) => {
                                let selected = currentPage == item?.page
                                return (
                                    <div onClick={() => setCurrentPage(item?.page)} key={index} className={` ms-3 mb-2 menu-item  ${selected ? 'selected' : ' '}`}>
                                        <div className={`d-flex align-items-center me-3 p-2 rounded-3 ${selected ? ' selected-bg' : ' '}`}>
                                            <Image src={item.icon(selected)} alt={item?.title} height={15} width={15} />
                                            <p className={`m-0 ms-2 dashboard-item-text ${selected ? ' selected-text' : ' '}`}>{item?.title}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-2 w-100 ">
                            <p className="dashboard-title px-3">{additonaloptions?.title}</p>
                            <div className="additional-options ms-3">
                                {additonaloptions?.items.map((item, index) => {
                                    let selected = currentPage == item?.page
                                    return (
                                        <div onClick={() => setCurrentPage(item?.page)} key={index} className={` ms-2 mb-2 menu-item  ${selected ? 'selected' : ' '}`}>
                                            <div className={`d-flex align-items-center me-3 p-2 rounded-3 ${selected ? ' selected-bg' : ' '}`}>
                                                <Image src={item.icon(selected)} alt={item?.title} height={15} width={15} />
                                                <p className={`m-0 ms-2 dashboard-item-text ${selected ? ' selected-text' : ' '}`}>{item?.title}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="px-3 d-flex align-items-center">
                        <Image color="red" src={'/svg/signout.svg'} alt={'signout'} height={20} width={20} />
                        <p className="p-0 ms-2 m-0 signout-btn">Sign out</p>
                    </div>
                    <div></div>
                </div>
                <div className="col pt-3 pb-3 components-container">
                    <div className="d-block d-xl-none mb-3">
                        <DynamicHeader onClick={(page) => setCurrentPage(page)} />
                    </div>
                    {renderComponents(currentPage)}
                </div>
            </div>
        </div>
    );
}