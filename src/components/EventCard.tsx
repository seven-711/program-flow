'use client';
import { ProgramEvent } from '@/data/program';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventCard({ event, isActive }: { event: ProgramEvent; isActive: boolean }) {
    // Dynamic icon loading safely
    // @ts-ignore
    const IconComponent = Icons[event.icon || 'Star'] || Icons.Star;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`event-card ${isActive ? 'active' : ''}`}
        >
            {isActive && (
                <div className="badge-now">
                    NOW HAPPENING
                </div>
            )}

            <div className="event-content">
                <div className={`icon-box ${isActive ? 'active-icon' : ''}`}>
                    <IconComponent size={24} />
                </div>

                <div className="details">
                    <div className="header">
                        <h3 className={isActive ? 'text-gold' : ''}>
                            {event.title}
                        </h3>
                        <span className="time-tag">
                            {event.time}
                        </span>
                    </div>

                    <p className="description">
                        {event.description}
                    </p>

                    {event.duration && (
                        <div className="meta">
                            <Icons.Clock size={14} />
                            <span>{event.duration}</span>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        .event-card {
          position: relative;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        .event-card.active {
          background: linear-gradient(135deg, rgba(212, 36, 38, 0.15), rgba(30, 41, 59, 0.9));
          border: 1px solid rgba(212, 36, 38, 0.5);
          box-shadow: 0 0 30px rgba(212, 36, 38, 0.15);
          transform: scale(1.02);
        }
        .badge-now {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--color-christmas-gold);
          color: var(--bg-dark);
          font-weight: 800;
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          border-bottom-left-radius: 12px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          animation: glow 2s infinite alternate;
        }
        .event-content {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }
        .icon-box {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .icon-box.active-icon {
          background: var(--color-christmas-red);
          color: white;
          box-shadow: 0 4px 12px rgba(212, 36, 38, 0.4);
        }
        .details {
          flex: 1;
        }
        .header {
          display: flex;
          flex-direction: column;
          margin-bottom: 0.5rem;
        }
        @media (min-width: 480px) {
          .header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
          color: white;
          font-weight: 700;
        }
        .text-gold {
          color: var(--color-christmas-gold);
        }
        .time-tag {
          font-family: monospace;
          background: rgba(0,0,0,0.3);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--text-muted);
          width: fit-content;
        }
        .description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }
        .meta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        @keyframes glow {
          0% { box-shadow: 0 0 5px var(--color-christmas-gold); }
          100% { box-shadow: 0 0 15px var(--color-christmas-gold), 0 0 5px white; }
        }
      `}</style>
        </motion.div>
    );
}
