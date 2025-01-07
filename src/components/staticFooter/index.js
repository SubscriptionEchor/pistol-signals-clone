import Image from "next/image";
import './footer.scss'


export default function StaticFooter() {
    const footerItems = [{
        name: "Privacy policy",
        route: "/privacy"
    },
    {
        name: "Terms of service",
        route: "/service"
    },
    {
        name: "Contact",
        route: "/contact"
    }]
    return (
        <div className="container-fluid px-0 footer-container">
            <div className="container">
                <div className="row ">
                    <div className="col-sm-6 ">
                        <Image src={'/svg/logo-dark-theme.svg'} alt='alt' height={50} width={100} />
                    </div>
                    <div className="col-sm-6 mt-4 mt-sm-0 ">
                        <div className="d-sm-flex align-items-center  h-100 justify-content-sm-end gap-4">
                            {footerItems?.map((item, index) => {
                                return (
                                    <p className="footer-items m-0 p-0 " key={index}>{item?.name}</p>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}