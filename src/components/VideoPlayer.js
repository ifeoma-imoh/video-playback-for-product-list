import { Cloudinary } from "@cloudinary/url-gen";
import { trim } from "@cloudinary/url-gen/actions/videoEdit";
import { lazyload, AdvancedVideo } from "@cloudinary/react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "ifeomaimoh",
  },
});

const VideoPlayer = ({ videoId }) => {
  let video = cld.video(videoId).videoEdit(trim().duration(5.0));

  return (
    <AdvancedVideo
      cldVid={video}
      plugins={[lazyload("0", 0.4)]}
      controls={false}
      autoPlay={true}
      loop
      muted
    />
  );
};
export default VideoPlayer;
