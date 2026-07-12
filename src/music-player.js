// Music Player using YouTube IFrame API
(function() {
  "use strict";

  const YOUTUBE_VIDEO_ID = "cBlrARl9tIQ"; // hololive music studio - lo-fi & chill mix II

  // Setup global variables
  let ytPlayer;
  let isPlaying = false;
  let hasStarted = false;
  
  // Inject YouTube API script
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('yt-player-container', {
      height: '10',
      width: '10',
      videoId: YOUTUBE_VIDEO_ID,
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'disablekb': 1,
        'fs': 0,
        'rel': 0,
        'loop': 1,
        'playlist': YOUTUBE_VIDEO_ID // Required for loop to work on single video
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  function onPlayerReady(event) {
    const savedVol = localStorage.getItem('hocg_music_volume');
    if (savedVol !== null) {
      ytPlayer.setVolume(Number(savedVol));
      const volSlider = document.getElementById('music-volume-slider');
      if (volSlider) volSlider.value = savedVol;
    } else {
      ytPlayer.setVolume(50);
    }
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      isPlaying = true;
      updateUI();
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
      isPlaying = false;
      updateUI();
    }
  }

  function updateUI() {
    const playBtn = document.getElementById('music-play-btn');
    if (playBtn) {
      if (isPlaying) {
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24"><rect x="30" y="25" width="15" height="50" fill="#38bded" rx="5"/><rect x="55" y="25" width="15" height="50" fill="#38bded" rx="5"/></svg>`;
      } else {
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24"><polygon points="35,25 85,55 35,85" fill="#38bded" stroke="#38bded" stroke-linejoin="round" stroke-width="10" /><polygon points="25,15 75,45 25,75" fill="#ffffff" stroke="#ffffff" stroke-linejoin="round" stroke-width="10" /></svg>`;
      }
    }
  }

  window.MusicPlayer = {
    toggle() {
      if (!ytPlayer || !ytPlayer.getPlayerState) return;
      
      if (isPlaying) {
        ytPlayer.pauseVideo();
      } else {
        if (!hasStarted) {
          // Seek to a random time to give a radio feel
          // Video is about 40 minutes long (2400 seconds)
          const randomStart = Math.floor(Math.random() * 2000);
          ytPlayer.seekTo(randomStart, true);
          hasStarted = true;
        }
        ytPlayer.playVideo();
      }
    },
    
    setVolume(vol) {
      if (!ytPlayer || !ytPlayer.setVolume) return;
      ytPlayer.setVolume(vol);
      localStorage.setItem('hocg_music_volume', vol);
    },
    
    toggleMinimize() {
      const widget = document.getElementById('music-widget');
      const toggleBtn = widget.querySelector('.music-widget-toggle');
      if (widget) {
        widget.classList.toggle('minimized');
        if (widget.classList.contains('minimized')) {
          toggleBtn.textContent = '🎵';
          toggleBtn.title = 'Expandir Música';
        } else {
          toggleBtn.textContent = '➖';
          toggleBtn.title = 'Minimizar Música';
        }
      }
    }
  };
})();
