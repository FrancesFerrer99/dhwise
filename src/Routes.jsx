import { useRoutes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DirectMessagePage from "./pages/DirectMessagePage"
import EventsPage from "./pages/EventsPage"
import GalleryPage from "./pages/GalleryPage"
import GroupMessagePage from "./pages/GroupMessagePage"
import Home1Page from "./pages/Home1Page"
import LoginPage from "./pages/LoginPage"
import MessagesPage from "./pages/MessagesPage"
import MyFriendsPage from "./pages/MyFriendsPage"
import MyProfilePage from "./pages/MyProfilePage"
import NotFoundPage from "./pages/NotFoundPage"
import NotificationsPage from "./pages/NotificationsPage"
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage"
import SearchResultsPage from "./pages/SearchResultsPage"
import SettingsPage from "./pages/SettingsPage"
import SignupPage from "./pages/SignupPage"
import SingleEventPage from "./pages/SingleEventPage"
import SinglePhotoPage from "./pages/SinglePhotoPage"
import SinglePostPage from "./pages/SinglePostPage"
import SingleStoryPage from "./pages/SingleStoryPage"
import SingleVideoPage from "./pages/SingleVideoPage"
import StoriesPage from "./pages/StoriesPage"
import UserProfilePage from "./pages/UserProfilePage"
import VideoChatPage from "./pages/VideoChatPage"
import VideoFullScreenPage from "./pages/VideoFullScreenPage"
import Home from "./pages/HomePage"

export default function Routes(){
    let element = useRoutes(
        [
            {
                path: "dhwise dashboard", element: <HomePage />
            },
            {
                path: "*", element: <NotFoundPage />
            },
            {
                path: "/", element: <LoginPage />
            },
            {
                path: "signup", element: <SignupPage />
            },
            {
                path: "passwordrecovery", element: <PasswordRecoveryPage />
            },
            {
                path: "home1", element: <Home1Page />
            },
            {
                path: "stories", element: <StoriesPage />
            },
            {
                path: "singlestory", element: <SingleStoryPage />
            },
            {
                path: "singlepost", element: <SinglePostPage />
            },
            {
                path: "singlevideo", element: <SingleVideoPage />
            },
            {
                path: "videofullscreen", element: <VideoFullScreenPage />
            },
            {
                path: "events", element: <EventsPage />
            },
            {
                path: "singleevent", element: <SingleEventPage />
            },
            {
                path: "searchresults", element: <SearchResultsPage />
            },
            {
                path: "notifications", element: <NotificationsPage />
            },
            {
                path: "messages", element: <MessagesPage />
            },
            {
                path: "directmessage", element: <DirectMessagePage />
            },
            {
                path: "videochat", element: <VideoChatPage />
            },
            {
                path: "groupmessage", element: <GroupMessagePage />
            },
            {
                path: "myfriends", element: <MyFriendsPage />
            },
            {
                path: "userprofile", element: <UserProfilePage />
            },
            {
                path: "gallery", element: <GalleryPage />
            },
            {
                path: "singlephoto", element: <SinglePhotoPage />
            },
            {
                path: "myprofile", element: <MyProfilePage />
            },
            {
                path: "settings", element: <SettingsPage />
            }
        ]
    )
    return element
}