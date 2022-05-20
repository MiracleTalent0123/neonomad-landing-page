const VideoPlayer = ({ source }: { source: any }) => {
  return (
    <div className="w-100 video-wrapper">
      <video className="video-player w-100" autoPlay muted loop>
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
