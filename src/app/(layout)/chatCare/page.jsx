import ChatCareMain from "@/pages/careChatSection/careChatMain";
import Footer from "@/pages/homepageSection/footer";
import NavBar from "@/pages/homepageSection/navbar";

export default function ChatCare () {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <NavBar />
            <ChatCareMain />
            <Footer />
        </div>
    )
}