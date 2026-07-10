import React from 'react';
import Home from '@/app/page';

const VertexEdgePage = () => {
  // Data array for the 6 premium cards
  const cardsData = [
    {
      id: 1,
      title: "Proven Engineering Excellence",
      description: "Our battle-tested methodologies ensure clean, maintainable code architectures engineered for high reliability and zero downtime.",
      image: "path/to/engineering-excellence.jpg", 
    },
    {
      id: 2,
      title: "Innovation Never Stops",
      description: "Continuous integration of cutting-edge technologies keeps your digital products ahead of market trends and technological shifts.",
      image: "path/to/innovation.jpg",
    },
    {
      id: 3,
      title: "Scale Without Limits",
      description: "Cloud-native infrastructure designed to handle traffic surges seamlessly, ensuring peak performance under heavy operational loads.",
      image: "path/to/scale.jpg",
    },
    {
      id: 4,
      title: "Accelerated Time to Market",
      description: "Optimized agile workflows and rapid prototyping pipelines deliver high-value product iterations without compromising quality.",
      image: "path/to/time-to-market.jpg",
    },
    {
      id: 5,
      title: "Growth Ready Architecture",
      description: "Modular, decoupled systems built to expand smoothly as your business model evolves and your user base expands globally.",
      image: "path/to/architecture.jpg",
    },
    {
      id: 6,
      title: "Human Excellence. AI Amplified.",
      description: "Synergizing elite human engineering with advanced artificial intelligence to automate complexity and drive hyper-efficiency.",
      image: "path/to/ai-amplified.jpg",
    },
  ];

  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '6rem 2rem',
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <header style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 6rem auto'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
          background: 'linear-gradient(180deg, #ffffff 0%, #a3a3a3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          The Vertex Edge
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#a3a3a3',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          Why Leading Companies Choose Vertex.
        </p>
      </header>

      {/* Cards Container */}
      <main style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem'
      }}>
        {cardsData.map((card, index) => {
          // Alternating layout: even indices show text left / image right, odd indices reverse it
          const isEven = index % 2 === 0;

          return (
            <div 
              key={card.id}
              style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'center',
                backgroundColor: '#141414',
                borderRadius: '16px',
                border: '1px solid #262626',
                overflow: 'hidden',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Image Column */}
              <div style={{
                flex: '1',
                height: '350px',
                backgroundColor: '#1f1f1f',
                overflow: 'hidden'
              }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.85'
                  }}
                  onError={(e) => {
                    // Fallback visual placeholder if image path is not configured
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Description Column */}
              <div style={{
                flex: '1',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                  color: '#ffffff'
                }}>
                  {card.title}
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#a3a3a3',
                  lineHeight: '1.6'
                }}>
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default VertexEdgePage;