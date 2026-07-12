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
      const playThud = (timeOffset) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(masterGain);
        
        osc.type = 'triangle';
        const t = ctx.currentTime + timeOffset;
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.exponentialRampToValueAtTime(40, t + 0.1);
        
        gain.gain.setValueAtTime(0.7, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
        
        osc.start(t);
        osc.stop(t + 0.1);
      };
      
      playThud(0);
      playThud(0.08); // Slight delay for second thud (rebound)
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
    }
  };
})();
