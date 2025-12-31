class NebulaEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.follower = {
            x: window.innerWidth / 2, // Start in center of screen
            y: window.innerHeight / 2,
            size: 12, // Increased from 8
            color: 'rgba(37, 99, 235, 0.95)', // Increased opacity from 0.8
            pulseSize: 0,
            pulseOpacity: 1
        };
        this.mouseX = 0;
        this.mouseY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.maxParticles = 100; // Reduced max particles

        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));

        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    handleMouseMove(e) {
        this.speedX = e.clientX - this.lastX;
        this.speedY = e.clientY - this.lastY;
        this.lastX = this.mouseX;
        this.lastY = this.mouseY;
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        // Create particles only if moving fast enough
        if (Math.abs(this.speedX) > 3 || Math.abs(this.speedY) > 3) {
            this.createParticles();
        }
    }

    createParticles() {
        // Only create particles if under max limit
        if (this.particles.length >= this.maxParticles) {
            return;
        }

        const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
        const particleCount = Math.min(3, Math.floor(speed / 5)); // Reduced particle creation

        for (let i = 0; i < particleCount; i++) {
            const particle = {
                x: this.mouseX,
                y: this.mouseY,
                size: Math.random() * 2 + 1, // Smaller particles
                speedX: (Math.random() - 0.5) * 4 + this.speedX * 0.3,
                speedY: (Math.random() - 0.5) * 4 + this.speedY * 0.3,
                life: 1,
                color: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.8)`
            };
            this.particles.push(particle);
        }
    }

    updateFollower() {
        // Smooth follower movement
        const dx = this.mouseX - this.follower.x;
        const dy = this.mouseY - this.follower.y;
        this.follower.x += dx * 0.1;
        this.follower.y += dy * 0.1;

        // Update pulse effect
        this.follower.pulseSize = this.follower.size * (1 + Math.sin(Date.now() * 0.004) * 0.3); // Pulsing size
        this.follower.pulseOpacity = 0.8 + Math.sin(Date.now() * 0.004) * 0.2; // Pulsing opacity
    }

    updateParticles() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= 0.02;
            p.x += p.speedX;
            p.y += p.speedY;
            p.speedX *= 0.96;
            p.speedY *= 0.96;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw particles behind follower
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Draw outer pulse glow
        const pulseGradient = this.ctx.createRadialGradient(
            this.follower.x, this.follower.y, 0,
            this.follower.x, this.follower.y, this.follower.pulseSize * 2
        );
        pulseGradient.addColorStop(0, `rgba(37, 99, 235, ${this.follower.pulseOpacity * 0.3})`);
        pulseGradient.addColorStop(0.5, `rgba(37, 99, 235, ${this.follower.pulseOpacity * 0.1})`);
        pulseGradient.addColorStop(1, 'rgba(37, 99, 235, 0)');

        this.ctx.beginPath();
        this.ctx.arc(this.follower.x, this.follower.y, this.follower.pulseSize * 2, 0, Math.PI * 2);
        this.ctx.fillStyle = pulseGradient;
        this.ctx.fill();

        // Draw inner glow
        const innerGradient = this.ctx.createRadialGradient(
            this.follower.x, this.follower.y, 0,
            this.follower.x, this.follower.y, this.follower.pulseSize
        );
        innerGradient.addColorStop(0, `rgba(37, 99, 235, ${this.follower.pulseOpacity})`);
        innerGradient.addColorStop(0.6, `rgba(37, 99, 235, ${this.follower.pulseOpacity * 0.5})`);
        innerGradient.addColorStop(1, 'rgba(37, 99, 235, 0)');

        // Draw main follower with pulse effect
        this.ctx.beginPath();
        this.ctx.arc(this.follower.x, this.follower.y, this.follower.pulseSize, 0, Math.PI * 2);
        this.ctx.fillStyle = innerGradient;
        this.ctx.shadowColor = 'rgba(37, 99, 235, 0.8)';
        this.ctx.shadowBlur = 15;
        this.ctx.fill();
        
        // Draw center core
        this.ctx.beginPath();
        this.ctx.arc(this.follower.x, this.follower.y, this.follower.size * 0.7, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
    }

    animate() {
        this.updateFollower();
        this.updateParticles();
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize the effect when the page loads
window.addEventListener('load', () => {
    new NebulaEffect();
});
