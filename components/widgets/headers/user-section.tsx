import { ProjectsGrid } from "ui"
import FeedBack from "../feedback"
import NotificationsWrapper from "./notifications"
import User from "./user-circle"

const UserSection = () => {
  return (
    <div className='flex items-center gap-3'>
      <FeedBack />
      <NotificationsWrapper />
      <ProjectsGrid />
      <User />
    </div>
  )
}

export default UserSection