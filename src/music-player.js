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
    const volSlider = document.getElementById('music-volume-slider');
    const volPct = document.getElementById('volume-pct');
    
    let vol = 50;
    if (savedVol !== null) {
      vol = Number(savedVol);
    }
    
    ytPlayer.setVolume(vol);
    if (volSlider) {
      volSlider.value = vol;
      updateSliderBg(vol);
    }
    if (volPct) volPct.textContent = `${vol}%`;
  }

  function updateSliderBg(val) {
    const volSlider = document.getElementById('music-volume-slider');
    if (!volSlider) return;
    volSlider.style.background = `linear-gradient(to right, #ff3366 0%, #ff3366 ${val}%, #334155 ${val}%, #334155 100%)`;
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
      const volPct = document.getElementById('volume-pct');
      if (volPct) volPct.textContent = `${vol}%`;
      updateSliderBg(vol);
    },
    
    toggleMinimize() {
      const widget = document.getElementById('music-widget');
      if (!widget) return;
      
      const toggleBtn = widget.querySelector('.music-widget-toggle');
      
      widget.classList.toggle('minimized');
      
      if (widget.classList.contains('minimized')) {
        if (toggleBtn) toggleBtn.title = 'Expandir Música';
      } else {
        if (toggleBtn) toggleBtn.title = 'Minimizar Música';
      }

      // Reposition if docked
      if (widget.classList.contains('docked-left') || widget.classList.contains('docked-right')) {
        setTimeout(() => handleEdgeDetection(widget), 350);
      }
    }
  };

  // Draggable widget logic
  let isDragging = false;
  let startX = 0, startY = 0;
  let initialLeft = 0, initialTop = 0;

  function initDrag() {
    const widget = document.getElementById('music-widget');
    if (!widget) return;

    // Load saved position
    const savedLeft = localStorage.getItem('hocg_music_pos_left');
    const savedTop = localStorage.getItem('hocg_music_pos_top');
    if (savedLeft !== null && savedTop !== null) {
      widget.style.left = savedLeft;
      widget.style.top = savedTop;
      widget.style.right = 'auto';
      // Detect if it was docked
      setTimeout(() => handleEdgeDetection(widget), 100);
    }

    widget.addEventListener('mousedown', (e) => {
      if (e.target.closest('button') || e.target.closest('input')) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = widget.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
      widget.style.transition = 'none';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;

      const rect = widget.getBoundingClientRect();
      const margin = 15;
      const minLeft = margin - rect.width;
      const maxLeft = window.innerWidth - margin;
      const minTop = 0;
      const maxTop = window.innerHeight - rect.height;

      newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
      newTop = Math.max(minTop, Math.min(newTop, maxTop));

      widget.style.left = `${newLeft}px`;
      widget.style.top = `${newTop}px`;
      widget.style.right = 'auto';
    });

    document.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      widget.style.transition = '';
      handleEdgeDetection(widget);
    });

    // Touch
    widget.addEventListener('touchstart', (e) => {
      if (e.target.closest('button') || e.target.closest('input')) return;
      const touch = e.touches[0];
      isDragging = true;
      startX = touch.clientX;
      startY = touch.clientY;
      const rect = widget.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
      widget.style.transition = 'none';
    });

    document.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;

      const rect = widget.getBoundingClientRect();
      const margin = 15;
      const minLeft = margin - rect.width;
      const maxLeft = window.innerWidth - margin;
      const minTop = 0;
      const maxTop = window.innerHeight - rect.height;

      newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
      newTop = Math.max(minTop, Math.min(newTop, maxTop));

      widget.style.left = `${newLeft}px`;
      widget.style.top = `${newTop}px`;
      widget.style.right = 'auto';
    });

    document.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      widget.style.transition = '';
      handleEdgeDetection(widget);
    });
  }

  function handleEdgeDetection(widget) {
    const rect = widget.getBoundingClientRect();
    const width = rect.width;
    const left = rect.left;
    const threshold = 30;

    if (left < threshold) {
      widget.classList.add('docked-left');
      widget.classList.remove('docked-right');
      widget.style.left = `-${width - 15}px`;
    } else if (left + width > window.innerWidth - threshold) {
      widget.classList.add('docked-right');
      widget.classList.remove('docked-left');
      widget.style.left = `${window.innerWidth - 15}px`;
    } else {
      widget.classList.remove('docked-left', 'docked-right');
    }
    localStorage.setItem('hocg_music_pos_left', widget.style.left);
    localStorage.setItem('hocg_music_pos_top', widget.style.top);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDrag);
  } else {
    initDrag();
  }
})();
