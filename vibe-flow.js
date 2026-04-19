/**
 * VibeFlow Interactive Header Logic
 * Implements a live digital clock and simulated telemetry for the portfolio header.
 */

document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('vibe-clock');
    const flowElement = document.getElementById('system-flow-rate');
    
    // Update Clock
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        if (clockElement) clockElement.textContent = timeString;
    }

    // Simulate System Flow (fluctuating percentage)
    let currentFlow = 98.4;
    function updateFlow() {
        const fluctuation = (Math.random() - 0.5) * 0.4;
        currentFlow = Math.max(92.0, Math.min(99.9, currentFlow + fluctuation));
        if (flowElement) flowElement.textContent = `${currentFlow.toFixed(1)}%`;
    }

    // Initial calls
    updateClock();
    updateFlow();

    // Intervals
    setInterval(updateClock, 1000);
    setInterval(updateFlow, 2500);
});
