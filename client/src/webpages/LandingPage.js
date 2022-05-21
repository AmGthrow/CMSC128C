import MainBanner from '../domain/MainBanner/MainBanner'
import MainFeatures from '../domain/MainFeatures/MainFeatures'
import MainCourses from '../domain/MainCourses/MainCourses'
import EmailInputField from '../domain/EmailInputField/EmailInputField'
export default function LandingPage({width, scrolled}) {
  return (
    <div>
      <MainBanner width={width}/>
      <MainFeatures/>
      <MainCourses/>
      <EmailInputField/>
    </div>
  )
}