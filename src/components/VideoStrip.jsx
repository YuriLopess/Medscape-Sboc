import { ArrowRight, Play } from './Icons.jsx';
import { featuredVideos } from '../data/content.js';

export default function VideoStrip() {
  return (
    <div className="video-strip">
      <div className="container video-strip-inner">
        <span className="video-strip-icon" aria-hidden="true"><Play /></span>
        <strong className="video-strip-count">{featuredVideos.length} vídeos de cobertura</strong>
        <span className="video-strip-divider" aria-hidden="true" />
        <span className="video-strip-note">Explore no seu ritmo.</span>
        <a className="video-strip-link" href="#destaques">Ver todos <ArrowRight /></a>
      </div>
    </div>
  );
}
