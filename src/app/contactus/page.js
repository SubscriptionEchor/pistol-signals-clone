import ContactUsPage from "@/components/contactus/page";
import StaticFooter from "@/components/staticFooter";
import StaticHeader from "@/components/StaticHeader";


export default function ContacUs() {
    return (
        <div className="w-100 max-vh-100 d-flex flex-column">
            <StaticHeader />
            <ContactUsPage />
            <StaticFooter />
        </div>
    )
}