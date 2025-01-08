import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import '../styles/global.css';

export default function Home() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
        src="/background.mp4"
        type="video/mp4"
      />

      {/* Header Text */}
      <div
        style={{
          position: 'absolute',
          top: '3%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '35px',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '7px 5px 4px rgba(0, 0, 0, 0.8)',
          animation: 'pulse 2s infinite',
        }}
      >
        Welcome to QuantumQuack: <br />
        Where quantum ducks lead the next crypto revolution!
      </div>

      {/* Slogan */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'bold',
          fontSize: '20px',
          textAlign: 'center',
          textShadow: '3px 3px 3px rgb(0, 0, 0)',
          padding: '12px',
          backgroundColor: 'rgba(255, 0, 0, 0.05)',
          borderRadius: '10px',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        A small quack for the duck, a quantum leap for the fun!
      </div>

      {/* Purchase Text */}
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgb(255, 255, 255)',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'bold',
          fontSize: '16px',
          textAlign: 'center',
          padding: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.81)',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <a
          href="https://pump.fun/coin/2erLqw3wf3KfZJm1X55QAwYvmGyseajoSwgoFastpump"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#FFF',
            textDecoration: 'none',
          }}
        >
          Token Address: 2erLqw3wf3KfZJm1X55QAwYvmGyseajoSwgoFastpump
        </a>
      </div>

      {/* Draggable Images */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          position: 'absolute',
          bottom: '10%',
          width: '90%',
          left: '5%',
        }}
      >
        {[
          { id: 'docs', src: '/docs.png', alt: 'Docs', text: 'Docs', glow: 'rgba(255, 0, 0, 0.3)' },
          {
            id: 'pumpfun',
            src: '/pumpfun.png',
            alt: 'PumpFun',
            text: 'PumpFun',
            href: 'https://pump.fun/coin/2erLqw3wf3KfZJm1X55QAwYvmGyseajoSwgoFastpump',
            glow: 'rgba(30, 255, 0, 0.3)',
          },
          {
            id: 'x',
            src: '/x.png',
            alt: 'X',
            text: 'X',
            href: 'https://x.com/quantumquackof',
            glow: 'rgba(255, 255, 255, 0.5)',
          },
          {
            id: 'discord',
            src: '/discord.png',
            alt: 'Discord',
            text: 'Discord',
            href: 'https://discord.gg/kkqpmHRJXt',
            glow: 'rgba(0, 110, 255, 0.6)',
          },
          {
            id: 'telegram',
            src: '/telegram.png',
            alt: 'Telegram',
            text: 'Telegram',
            href: 'https://t.me/QuantumQuackof',
            glow: 'rgba(0, 110, 255, 0.6)',
          },
        ].map((item) => (
          <div key={item.id} style={{ flex: '1 1 65px', textAlign: 'center' }}>
            <a href={item.href || '#'} target="_blank" rel="noopener noreferrer">
              <Image
                id={item.id}
                src={item.src}
                alt={item.alt}
                style={{
                  width: '65px',
                  maxWidth: '100%',
                  borderRadius: '8px',
                  boxShadow: `0 0 15px 2px ${item.glow}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                  e.currentTarget.style.boxShadow = `0 0 25px 5px ${item.glow}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = `0 0 15px 2px ${item.glow}`;
                }}
              />
            </a>
            <p style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Current Time */}
      <div
        style={{
          position: 'absolute',
          bottom: '2%',
          right: '2%',
          color: '#fff',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '25px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
        }}
      >
        {time}
      </div>
    </div>
  );
}
