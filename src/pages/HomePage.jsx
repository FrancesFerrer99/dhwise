import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div className="h-dvh p-[20px] bg-[#232323] text-white">
            <h1 className="text-5xl mb-[20px] text-red-A200">Homepage</h1>
            <p className="text-lg mb-[30px]">
                <a href="https://www.dhwise.com" className="text-[#87CEFA] no-underline">
                    Dhwise
                </a>
            </p>
            <ul className="p-0 list-none">
                <li className="mb-[10px]">
                    <Link to="/" className="text-[#87CEFA] no-underline">
                        Login
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/signup" className="text-[#87CEFA] no-underline">
                        Signup
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/passwordrecovery" className="text-[#87CEFA] no-underline">
                        Password Recovery
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/home1" className="text-[#87CEFA] no-underline">
                        Home 1
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/stories" className="text-[#87CEFA] no-underline">
                        Stories
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/singlestory" className="text-[#87CEFA] no-underline">
                        Single Story
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/singlepost" className="text-[#87CEFA] no-underline">
                        Single Post
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/singlevideo" className="text-[#87CEFA] no-underline">
                        Single Video
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/videofullscreen" className="text-[#87CEFA] no-underline">
                        VideoFullScreen
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/events" className="text-[#87CEFA] no-underline">
                        Events
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/singleevent" className="text-[#87CEFA] no-underline">
                        Single Event
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/searchresults" className="text-[#87CEFA] no-underline">
                        Search Results
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/notifications" className="text-[#87CEFA] no-underline">
                        Noifications
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/messages" className="text-[#87CEFA] no-underline">
                        Messages
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/directmessage" className="text-[#87CEFA] no-underline">
                        Direct Message
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/videochat" className="text-[#87CEFA] no-underline">
                        Video Chat
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/groupmessage" className="text-[#87CEFA] no-underline">
                        Group Message
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/myfriends" className="text-[#87CEFA] no-underline">
                        My Friends
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/userprofile" className="text-[#87CEFA] no-underline">
                        User Profile
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/gallery" className="text-[#87CEFA] no-underline">
                        Gallery
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/singlephoto" className="text-[#87CEFA] no-underline">
                        Single Photo
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/myprofile" className="text-[#87CEFA] no-underline">
                        Myprofile
                    </Link>
                </li>
                <li className="mb-[10px]">
                    <Link to="/settings" className="text-[#87CEFA] no-underline">
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
    )
}