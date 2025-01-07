import { PageProvider } from "@/context/context";
import '../globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardLayout({ children }) {
    return (
        <PageProvider>
            <div className="min-h-screen bg-black text-white">
                {children}
            </div>
        </PageProvider>
    );
}