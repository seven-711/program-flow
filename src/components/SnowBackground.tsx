'use client';
import { useEffect, useState } from 'react';

export default function SnowBackground() {
    const [snowflakes, setSnowflakes] = useState<number[]>([]);

    useEffect(() => {
        // Generate flakes on client side only to avoid hydration mismatch
        setSnowflakes(Array.from({ length: 30 }, (_, i) => i));
    }, []);

    return (
        <div className="snow-container" aria-hidden="true">
            {snowflakes.map((i) => (
                <div
                    key={i}
                    className="snowflake"
                    style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 5 + 3}px`,
                        height: `${Math.random() * 5 + 3}px`,
                        // @ts-ignore
                        '--fall-duration': `${Math.random() * 10 + 10}s`,
                        '--fall-delay': `${Math.random() * 10}s`,
                        opacity: Math.random() * 0.4 + 0.1
                    }}
                />
            ))}
            <style jsx>{`
        .snow-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .snowflake {
          position: absolute;
          top: -10px;
          background: white;
          border-radius: 50%;
          animation: fall var(--fall-duration) linear infinite;
          animation-delay: var(--fall-delay);
        }
        @keyframes fall {
          0% { transform: translateY(-10vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.5; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0; }
        }
      `}</style>
        </div>
    );
}
