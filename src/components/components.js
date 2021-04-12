import React,{useState,useEffect} from 'react';
import Collapse from 'react-bootstrap/Collapse';
import ReactPlayer from 'react-player'

// Render a YouTube video player
export const VideoPlayer = ({children,video_url}) => {
  const [vidSrc,setVidSrc] = useState('../static/vid'+ video_url);
  const loadBuild = () => {
    setVidSrc('../vid'+ video_url);
  }
    return (
      <ReactPlayer url={video_url}
       />
    )
}


export const ImageExpand = ({children,image_url}) => {
    const [show,setShow]= useState(false);
    const [imgSrc,setImgSrc] = useState('../static/img'+ image_url);
    const loadBuild = () => {
      setImgSrc('../img'+ image_url);
    }
    return (
      <React.Fragment>

        <div style={{display:"inline-block"}} onClick={()=>setShow(!show)}>
          <a className='custom-link'>{show?'Hide Image':'View Image'}</a>
        </div>
        {show?
          <div>
            <img src={imgSrc} onError={()=>loadBuild()}/>
          </div>
          :null
        }
      </React.Fragment>
      )
}
