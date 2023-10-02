import React from "react";
import styles from "./Video.module.css";
import video from "../../assets/video.mp4";

function Video() {
  return (
    <div className={styles.videocontainer}>
      <video
        className={styles.video}
        src={video}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}

export default Video;
