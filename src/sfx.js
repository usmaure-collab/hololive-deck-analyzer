// SFX Module using Web Audio API for synthetic UI sounds
(function () {
  "use strict";

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  let ctx = null;
  let masterGain = null;

  function initAudio() {
    if (!ctx) {
      ctx = new AudioContext();
      masterGain = ctx.createGain();
      // Default volume
      masterGain.gain.value = 0.5;
      masterGain.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
  }

  window.SFX = {
    setVolume(val) {
      if (masterGain) {
        masterGain.gain.value = Math.max(0, Math.min(1, val));
      }
    },
    
    playClick() {
      initAudio();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(masterGain);
      
      osc.type = 'sine';
      const t = ctx.currentTime;
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
      
      gain.gain.setValueAtTime(0.5, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
      
      osc.start(t);
      osc.stop(t + 0.05);
    },

    playCardAdd() {
      initAudio();
      // Double thud simulating card hitting table
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(masterGain);
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + 0.1);
      
      gain.gain.setValueAtTime(0.6, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
      
      osc.start(t);
      osc.stop(t + 0.1);
    },

    playPackOpen() {
      initAudio();
      const t = ctx.currentTime;
      // White noise for tearing pack
      const bufferSize = ctx.sampleRate * 0.3; // 0.3 seconds
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 2000;
      
      const gain = ctx.createGain();
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      
      gain.gain.setValueAtTime(0.8, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
      
      noise.start(t);
    },

    playBoxOpen() {
      initAudio();
      const t = ctx.currentTime;
      
      // Box open thump
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(masterGain);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(100, t);
      osc.frequency.exponentialRampToValueAtTime(20, t + 0.2);
      
      gain.gain.setValueAtTime(1.0, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
      
      osc.start(t);
      osc.stop(t + 0.2);
      
      // Followed by multiple pack rips
      for(let i=0; i<3; i++) {
        setTimeout(() => this.playPackOpen(), 200 + i * 150);
      }
    },

    playCardReveal() {
      initAudio();
      // Upward sweep for reveal/flip
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(masterGain);
      
      osc.type = 'sine';
      const t = ctx.currentTime;
      osc.frequency.setValueAtTime(200, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.15);
      
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.linearRampToValueAtTime(0.6, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
      
      osc.start(t);
      osc.stop(t + 0.15);
    },

    playHit(rarity = "SR") {
      initAudio();
      const t = ctx.currentTime;
      const notes = rarity === "SEC" || rarity === "OUR" ? [523.25, 659.25, 783.99, 1046.5] : rarity === "UR" ? [440, 554.37, 659.25] : [392, 493.88, 587.33];

      notes.forEach((frequency, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = index === notes.length - 1 ? "sine" : "triangle";
        osc.connect(gain);
        gain.connect(masterGain);
        const start = t + index * 0.075;
        osc.frequency.setValueAtTime(frequency, start);
        osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, start + 0.28);
        gain.gain.setValueAtTime(0.001, start);
        gain.gain.exponentialRampToValueAtTime(0.35, start + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.38);
        osc.start(start);
        osc.stop(start + 0.4);
      });
    }
  };
})();
