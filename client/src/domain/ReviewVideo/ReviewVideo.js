import React from 'react'
import ReactPlayer from 'react-player'
import RVCSS from './ReviewVideo.module.css'

function ReviewVideo() {
  return (
    <div className={RVCSS.container}>
      <h1 className={RVCSS.heading}>Testimonials from Our Very Students</h1>
      <div className={RVCSS.videoContainer}>
        <ReactPlayer 
          controls 
          className={RVCSS.video} 
          url="https://www.facebook.com/watch/?v=794232964578309" />
      </div>
    </div>
  )
}

export default ReviewVideo