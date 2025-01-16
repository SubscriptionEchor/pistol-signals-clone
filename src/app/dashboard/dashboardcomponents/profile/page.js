"use client"
import Image from "next/image"
import { useState } from "react"
import './profile.scss'
import Toggle from 'react-toggle'
import Subscription from "../subscription/page"
import Refer from "../refer/page"

export default function Profile() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [toogle, setToogle] = useState(false)
    return (
        <div className="my-3 px-2">
            <p className="user-profile-text">User Profile</p>
            <p className="mt-4 name-email-text">Full name</p>
            <div className="row mx-0 align-items-center">
                <div className="col-8 py-2 py-sm-3 d-flex align-items-center  email-name-container rounded-3 col-lg-5 col-sm-7">
                    <Image src='/svg/usericon.svg' alt='iamge' height={20} width={20} />
                    <input onChange={(e) => setUsername(e?.target.value)} placeholder="name" className="profile-input col border-0 ms-2 w-100" />
                </div>
                <button className={`profile-btns  ms-3 mt-sm-0 py-2 col-3 col-sm-1  border-0  rounded-3`}>Invite</button>
            </div>
            <p className="mt-5 name-email-text">Email</p>
            <div className="row mx-0 align-items-center">
                <div className="col-8 py-2 py-sm-3 d-flex align-items-center  email-name-container  rounded col-lg-5 col-sm-7">
                    <Image src='/svg/at.svg' alt='iamge' height={20} width={20} />
                    <input onChange={(e) => setEmail(e?.target.value)} placeholder=" email address" className="profile-input col w-100 border-0 ms-2" />
                </div>
                <button className={`profile-btns  ms-3 m mt-sm-0 py-2 col-3 col-sm-1  border-0  rounded-3`}>Edit</button>
            </div>
            <p className="mt-5 name-email-text">Password</p>
            <p className="password-upadate-text col-sm-5">Update your password through the button below. You will be directed with instructions must follow the instructions.</p>
            <div className="row mx-0 mb-2 password-container pb-4 align-items-center">
                <div className="col-8 py-2 py-sm-3 d-flex align-items-center  email-name-container  rounded col-lg-5 col-sm-7">
                    <input type='password' security='true' onChange={(e) => setEmail(e?.target.value)} placeholder="password" className="profile-input w-100 col border-0 ms-2" />
                    <Image src='/svg/eye.svg' alt='iamge' height={20} width={20} />
                </div>
                <button className={`profile-btns  ms-3 mt-sm-0 py-2 col-3 col-sm-1  border-0  rounded-3`}>Update</button>
            </div>
            <Subscription />
            <Refer />
            <p className="mt-4 name-email-text">Telegram and Notifications</p>
            <div className="row mx-0 px-0 ">
                <div className="col-12 py-3 d-flex align-items-center  email-name-container  rounded col-lg-5 col-sm-7">
                    <Image src='/svg/telegramicon.svg' alt='iamge' height={20} width={20} />
                    <input type='password' readOnly security='true' onChange={(e) => setEmail(e?.target.value)} placeholder="telegram" className="profile-input w-100 col border-0 ms-2" />
                    <Image src='/svg/tick.svg' alt='image' height={25} width={25} />
                </div>

            </div>
            <div className="d-flex align-items-center  my-4 justify-content-between col-12  col-sm-7 col-lg-5">
                <p className="password-upadate-text m-0  w-75">Update your password through the button below. You will be directed with instructions must follow the instructions.</p>
                <div>
                    <Toggle
                        id='biscuit-status'
                        defaultChecked={false}
                        aria-labelledby='biscuit-label'
                        onChange={() => { }} />
                </div>
            </div>
            <p className="col-12 mt-3 col-sm-7 col-lg-5 disclaminer">AI Technical Analyst will process your data to send you information about our products and services, promotions, surveys, raffles, based on our legitimate interest. Your data will not be disclosed to third parties. They will be communicated outside the EU under the terms of the privacy policy. You can opt out of our notifications with the slider.</p>
        </div>
    )
}