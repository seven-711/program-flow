'use client';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROGRAM_FLOW } from '@/data/program';
import EventCard from '@/components/EventCard';
import SnowBackground from '@/components/SnowBackground';
import { Sparkles, Snowflake, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeId, setActiveId] = useState<string>('3'); // Default to 'Dinner'

  if (!hasEntered) {
    return (
      <main className="welcome-container">
        <div className="bg-layer">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaYl9Bk52Mz3dletGk6ruCcxp0ATSHBuWITNEnNa2WTvX5YOkB3690fQzJ1Ax7ltQu7LkH9H_He-OfqcyPEbNlNxO-PVxGV9HvedlQJWsI8WJfYcePmzod7GnZB2V-9N_wq7olQCxVcGP3xkH484DX-JH07w6mTemarVJPf58a2lhRh3mSZEiRFYHktW18vUXd3Eb2CThzkdOoyiVzUacoX8yJNVS2iSWZczP6ihsfWr_RlUZV5NwiLW9Sg3fqH8qiezZNTfl1mlAL"
            alt="Snowy winter night background"
            className="bg-image"
          />
          <div className="bg-overlay"></div>
        </div>

        <SnowBackground />

        <div className="welcome-content">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
            className="logo-container"
          >
            <div className="logo-circle">
              <Snowflake size={64} className="text-gold" />
            </div>
          </motion.div>

          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="invite-text" style={{marginBottom: '3rem'}}>You are invited to the</h2>
            <h1 className="main-title">
              CSSBO <br className="md-hidden" /> Christmas <br /> <span className="text-gold">Party!</span>
            </h1>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="details-card group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="details-stack">
              <div className="detail-item">
                <Calendar className="text-gold" />
                <span>December 20, 2025</span>
              </div>
              <div className="detail-item">
                <Clock className="text-gold" />
                <span>11:00 AM - 4:00 PM</span>
              </div>
              <div className="detail-item">
                <MapPin className="text-gold" />
                <span>Roan Beach Resort</span>
              </div>
            </div>

            <div className="card-footer">
              <p className="welcome-message">Join us for a magical day of joy, laughter, and holiday spirit.</p>

              <div className="enter-btn-container">
                <button
                  onClick={() => setHasEntered(true)}
                  className="neon-btn"
                >
                  <span className="btn-text">ENTER PARTY</span>
                  <ArrowRight className="animate-bounce-x" size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <style jsx>{`
          .welcome-container {
            position: relative;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            color: white;
            overflow: hidden;
            font-family: var(--font-montserrat);
          }
          .bg-layer {
            position: absolute;
            inset: 0;
            z-index: 0;
          }
          .bg-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.6;
          }
          .bg-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, transparent, var(--bg-dark));
            opacity: 0.9;
          }
          .welcome-content {
            position: relative;
            z-index: 20;
            width: 100%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 2rem;
          }
          .logo-container {
            margin-bottom: 1rem;
          }
          .logo-circle {
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
          }
          .text-gold {
            color: #D4AF37;
          }
          .invite-text {
            font-size: 1.1rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #d1d5db; /* gray-300 */
          }
          .main-title {
            font-family: var(--font-vibes);
            font-size: 5rem;
            line-height: 0.9;
            text-shadow: 0 4px 8px rgba(0,0,0,0.5);
            margin: 0.5rem 0;
          }
          .details-card {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 1rem;
            padding: 2rem;
            width: 100%;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease;
          }
          .details-stack {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .detail-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            font-size: 1.1rem;
            font-weight: 600;
          }
          .card-footer {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 1.5rem;
          }
          .welcome-message {
            font-style: italic;
            color: #9ca3af;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }

          .enter-btn-container {
            display: flex;
            justify-content: center;
            width: 100%;
          }
        
          .neon-btn {
              position: relative;
              padding: 14px 36px;
              background: rgba(0, 20, 40, 0.85);
              border: 1px solid rgba(0, 180, 255, 0.6);
              border-radius: 999px;
              cursor: pointer;
              overflow: hidden;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
              display: flex;
              align-items: center;
              gap: 1rem;
            }

            .neon-btn::before {
              content: "";
              position: absolute;
              inset: -2px;
              border-radius: inherit;
              background: linear-gradient(
                120deg,
                transparent,
                rgba(0, 200, 255, 0.8),
                transparent
              );
              opacity: 0.6;
              filter: blur(6px);
              transition: opacity 0.3s ease;
            }

            .neon-btn:hover {
              transform: translateY(-1px);
              box-shadow:
                0 0 12px rgba(0, 180, 255, 0.6),
                0 0 28px rgba(0, 120, 255, 0.4);
            }

            .neon-btn:hover::before {
              opacity: 1;
            }

            .btn-text {
              position: relative;
              z-index: 1;
              font-weight: 600;
              letter-spacing: 0.15em;
              font-size: 0.85rem;
              color: #bdefff;
              text-shadow:
                0 0 4px rgba(0, 200, 255, 0.8),
                0 0 10px rgba(0, 140, 255, 0.6);
            }

          @keyframes gradientBorder {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .welcome-footer {
            position: absolute;
            bottom: 1.5rem;
            z-index: 20;
            width: 100%;
            text-align: center;
            color: rgba(255,255,255,0.4);
            font-size: 0.75rem;
          }
          @media (min-width: 768px) {
            .md-hidden { display: none; }
            .main-title { font-size: 7rem; }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="main-container">
      <SnowBackground />

      <div className="content">
        <header className="hero">
          <div className="badge">
            <Sparkles size={16} className="sparkle" />
            <span>Christmas 2025</span>
          </div>
          <h1 className="title">
            Christmas<br />Party Flow
          </h1>
          <p className="subtitle">
            Welcome to the celebration!
          </p>
        </header>

        <div className="timeline">
          {PROGRAM_FLOW.map((event) => (
            <div key={event.id} onClick={() => setActiveId(event.id)} style={{ cursor: 'pointer' }}>
              <EventCard
                event={event}
                isActive={activeId === event.id}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .main-container {
          min-height: 100vh;
          position: relative;
          padding-bottom: 5rem;
          font-family: var(--font-body);
        }
        .content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        .hero {
          text-align: center;
          margin-bottom: 3rem;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(212, 36, 38, 0.2);
          border: 1px solid rgba(212, 36, 38, 0.4);
          color: var(--color-christmas-red);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }
        .sparkle {
          animation: spin 3s linear infinite;
        }
        .title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          line-height: 1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #cecece);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        .footer {
          margin-top: 4rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.8rem;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); opacity: 1; }
          50% { opacity: 0.5; }
          100% { transform: rotate(360deg); opacity: 1; }
        }
        @media (max-width: 480px) {
          .title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </main>
  );
}
