import MainBanner from '../domain/MainBanner/MainBanner'
import MainFeatures from '../domain/MainFeatures/MainFeatures'
import Courses from '../domain/Courses/Courses'
import ReviewVideo from '../domain/ReviewVideo/ReviewVideo'
import EmailInputField from '../domain/EmailInputField/EmailInputField'
export default function LandingPage({width, scrolled}) {
  return (
    <div>
      <MainBanner width={width}/>
      <MainFeatures/>
      <Courses width={width}/>
      <ReviewVideo />
      <EmailInputField/>
    </div>
  )
}