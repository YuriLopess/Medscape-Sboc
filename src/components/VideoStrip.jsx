import { ArrowRight, Play } from './Icons.jsx';
import { useContent } from '../i18n.jsx';

export default function VideoStrip() {
  const { featuredVideos, finalVideos, ui } = useContent();
  return (
    <div className="video-strip">
      <div className="container video-strip-inner">
        <span className="video-strip-icon" aria-hidden="true"><Play /></span>
        <strong className="video-strip-count">{ui.videosCount(featuredVideos.length + finalVideos.length)}</strong>
        <span className="video-strip-divider" aria-hidden="true" />
        <span className="video-strip-note">{ui.atYourPace}</span>
        <a className="video-strip-link" href="#destaques">{ui.seeAll} <ArrowRight /></a>
      </div>
    </div>
  );
}
