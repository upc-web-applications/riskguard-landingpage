import React, { useEffect, useRef, useState } from 'react'
import {
  Shield, Bell, FileText, ChevronRight, Menu, X,
  AlertTriangle, BarChart3, Users, ArrowRight,
  CheckCircle, Zap, Lock, TrendingUp, Factory,
  HardHat, ClipboardList, Phone, Mail, MapPin,
  ChevronDown, Star, Award, Target
} from 'lucide-react'

/* ─── Hook: intersection observer para reveal on scroll ─── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      background: scrolled ? 'rgba(6,13,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'linear-gradient(135deg, #E8460A, #FF6B35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(232,70,10,0.4)',
          }}>
            <Shield size={20} color="#fff" strokeWidth={2.5} />
          </div>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#fff',
          }}>
            RISK<span style={{ color: 'var(--accent)' }}>GUARD</span>
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          className="nav-links-desktop">
          {['Características', 'Cómo funciona', 'Segmentos', 'Estadísticas'].map(l => (
            <a key={l} href="#" style={{
              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >{l}</a>
          ))}
        </div>

        <button style={{
          background: 'var(--accent)', color: '#fff',
          border: 'none', borderRadius: 6,
          padding: '0.55rem 1.4rem', fontFamily: 'var(--font-display)',
          fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer',
          letterSpacing: '0.02em',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.background = 'var(--accent-2)'; e.target.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)' }}
        >
          Contactar
        </button>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
      background: `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(26,79,160,0.25) 0%, transparent 70%),
                   radial-gradient(ellipse 40% 40% at 20% 80%, rgba(232,70,10,0.12) 0%, transparent 60%),
                   var(--navy)`,
    }}>
      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '15%', right: '8%',
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,79,160,0.3) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,70,10,0.2) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '8rem 2rem 4rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
        alignItems: 'center', position: 'relative', zIndex: 1, width: '100%',
      }}>
        {/* Left */}
        <div>
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(232,70,10,0.12)', border: '1px solid rgba(232,70,10,0.3)',
            borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '1.5rem',
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.82rem', letterSpacing: '0.08em' }}>
              PLATAFORMA DE SEGURIDAD INDUSTRIAL
            </span>
          </div>

          <h1 className="animate-fade-up delay-100" style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem',
          }}>
            Predice los riesgos
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #E8460A, #FF9A6C)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>antes de que ocurran</span>
          </h1>

          <p className="animate-fade-up delay-200" style={{
            color: 'rgba(255,255,255,0.62)', fontFamily: 'var(--font-body)',
            fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.75,
            marginBottom: '2.5rem', maxWidth: 460,
          }}>
            RiskGuard centraliza los reportes de incidentes, analiza patrones de riesgo
            y genera alertas predictivas para proteger a los trabajadores en la industria peruana
            antes de que se produzca un accidente.
          </p>

          <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button style={{
              background: 'var(--accent)', color: '#fff', border: 'none',
              borderRadius: 8, padding: '0.85rem 2rem',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 8px 32px rgba(232,70,10,0.35)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(232,70,10,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(232,70,10,0.35)' }}
            >
              Contactar  <ArrowRight size={17} />
            </button>
            <button style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8, padding: '0.85rem 2rem',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent' }}
            >
              Ver más
            </button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up delay-400" style={{
            marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center',
          }}>
            {[
              { icon: <CheckCircle size={15} color="#22c55e" />, text: 'Ley N° 29783 compatible' },
              { icon: <CheckCircle size={15} color="#22c55e" />, text: 'Sin instalación compleja' },
              { icon: <CheckCircle size={15} color="#22c55e" />, text: 'Alertas en tiempo real' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {icon}
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dashboard mockup */}
        <div className="animate-fade-in delay-300" style={{ position: 'relative', animation: 'float 5s ease-in-out infinite' }}>
          {/* Main card */}
          <div style={{
            background: 'rgba(12,24,41,0.9)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20, padding: '1.5rem', backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
                  Panel de seguridad
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: 2 }}>
                  Planta Norte — Turno mañana
                </div>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                borderRadius: 100, padding: '4px 10px',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                <span style={{ color: '#22c55e', fontSize: '0.72rem', fontWeight: 500 }}>En vivo</span>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: '1.25rem' }}>
              {[
                { label: 'Incidentes hoy', val: '3', color: '#E8460A' },
                { label: 'Alertas activas', val: '7', color: '#f59e0b' },
                { label: 'Zonas monitoreadas', val: '12', color: '#22c55e' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{ color: s.color, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem' }}>{s.val}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Alert items */}
            {[
              { zone: 'Zona B', type: 'Ruido excesivo', level: 'Crítico', color: '#E8460A', bg: 'rgba(232,70,10,0.1)' },
              { zone: 'Zona A', type: 'Temperatura elevada', level: 'Alerta', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
              { zone: 'Zona C', type: 'Gases — normal', level: 'OK', color: '#22c55e', bg: 'rgba(34,197,94,0.08)' },
            ].map(a => (
              <div key={a.zone} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: a.bg, borderRadius: 8, padding: '0.6rem 0.9rem',
                marginBottom: 6, border: `1px solid ${a.color}22`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <AlertTriangle size={13} color={a.color} />
                  <span style={{ color: '#fff', fontSize: '0.8rem', fontFamily: 'var(--font-body)', fontWeight: 500 }}>{a.zone}</span>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem' }}>— {a.type}</span>
                </div>
                <span style={{
                  background: `${a.color}22`, color: a.color,
                  borderRadius: 100, padding: '2px 8px', fontSize: '0.68rem', fontWeight: 600,
                }}>{a.level}</span>
              </div>
            ))}
          </div>

          {/* Floating accuracy badge */}
          <div style={{
            position: 'absolute', bottom: -24, right: -20,
            background: 'linear-gradient(135deg, #0C1829, #0F2040)',
            border: '1px solid rgba(232,70,10,0.4)',
            borderRadius: 14, padding: '0.9rem 1.2rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.6rem',
              background: 'linear-gradient(90deg, #E8460A, #FF9A6C)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>99.8%</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.68rem', letterSpacing: '0.08em', fontWeight: 500 }}>
              PRECISIÓN PREDICTIVA
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        animation: 'fadeIn 1s ease 1s both',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>EXPLORAR</span>
        <ChevronDown size={16} color="rgba(255,255,255,0.35)" style={{ animation: 'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}

/* ─── Features ─── */
function Features() {
  const [ref, visible] = useReveal()
  const features = [
    {
      icon: <ClipboardList size={28} color="var(--accent)" />,
      title: 'Registro inmediato de incidentes',
      desc: 'Operarios y supervisores registran casi-accidentes y condiciones inseguras desde cualquier dispositivo en menos de 30 segundos, con soporte de fotografías y geolocalización de zona.',
      tag: 'Para operarios',
    },
    {
      icon: <Bell size={28} color="#f59e0b" />,
      title: 'Alertas predictivas inteligentes',
      desc: 'El motor de reglas analiza los datos ingresados para identificar patrones de riesgo por zona, turno y tipo de incidente, generando alertas antes de que ocurra un accidente grave.',
      tag: 'Para supervisores',
    },
    {
      icon: <FileText size={28} color="#22c55e" />,
      title: 'Reportes automáticos para SUNAFIL',
      desc: 'Genera reportes en formato PDF compatibles con la Ley N° 29783, listos para auditorías e inspecciones del SUNAFIL sin trabajo manual adicional del área de RRHH.',
      tag: 'Para RRHH',
    },
    {
      icon: <BarChart3 size={28} color="#818cf8" />,
      title: 'Dashboard ejecutivo con mapas de calor',
      desc: 'Visualiza en tiempo real las zonas de mayor riesgo de la planta mediante mapas de calor, indicadores KPI y tendencias históricas para la toma de decisiones gerenciales.',
      tag: 'Para gerentes',
    },
    {
      icon: <Target size={28} color="#06b6d4" />,
      title: 'Motor de análisis de patrones',
      desc: 'El sistema cruza variables como fallas de maquinaria, turnos con mayor incidencia, condiciones ambientales y fatiga para calcular niveles de riesgo acumulado por zona.',
      tag: 'Analítica avanzada',
    },
    {
      icon: <Lock size={28} color="#e879f9" />,
      title: 'Cumplimiento normativo integrado',
      desc: 'Diseñado desde su base para cumplir con la legislación peruana de seguridad ocupacional, con registros auditables, historial trazable y formatos oficiales integrados.',
      tag: 'Normativo',
    },
  ]

  return (
    <section ref={ref} style={{
      background: 'var(--gray-100)', padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: '4rem',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.7s ease',
        }}>
          <span style={{
            color: 'var(--accent)', fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            display: 'block', marginBottom: '0.75rem',
          }}>Capacidades principales</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#0C1829',
            letterSpacing: '-0.03em', lineHeight: 1.2,
          }}>
            Infraestructura de seguridad
            <br />de precisión industrial
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24,
        }}>
          {features.map((f, i) => (
            <div key={f.title} style={{
              background: '#fff', borderRadius: 16, padding: '2rem',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: `all 0.6s ease ${i * 0.1}s`,
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = visible ? 'translateY(0)' : 'translateY(32px)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: 'var(--gray-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                {f.icon}
              </div>
              <span style={{
                background: 'var(--gray-200)', color: 'var(--gray-600)',
                borderRadius: 100, padding: '3px 10px', fontSize: '0.72rem',
                fontWeight: 600, letterSpacing: '0.04em',
                display: 'inline-block', marginBottom: '0.75rem',
              }}>{f.tag}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem',
                color: '#0C1829', marginBottom: '0.65rem', lineHeight: 1.3,
              }}>{f.title}</h3>
              <p style={{
                color: 'var(--gray-600)', fontSize: '0.88rem', lineHeight: 1.7,
                fontFamily: 'var(--font-body)', fontWeight: 300,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ─── */
function HowItWorks() {
  const [ref, visible] = useReveal()
  const steps = [
    {
      num: '01',
      icon: <HardHat size={32} color="#fff" />,
      title: 'Operarios reportan desde la app',
      desc: 'La interfaz simplificada permite al personal de campo registrar casi-accidentes y condiciones inseguras en menos de 30 segundos, con opciones predeterminadas y soporte fotográfico.',
    },
    {
      num: '02',
      icon: <BarChart3 size={32} color="#fff" />,
      title: 'El sistema analiza los datos',
      desc: 'El motor de reglas procesa cada reporte en tiempo real, cruzando variables de zona, turno, tipo de riesgo y frecuencia para calcular el nivel de peligrosidad acumulada.',
    },
    {
      num: '03',
      icon: <Bell size={32} color="#fff" />,
      title: 'Supervisores toman acción preventiva',
      desc: 'Las alertas automáticas llegan al supervisor antes de que ocurra el accidente, con información de zona, tipo de riesgo y acciones recomendadas para intervenir de inmediato.',
    },
  ]

  return (
    <section ref={ref} style={{
      background: 'var(--navy)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(232,70,10,0.4), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: '4rem',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.7s ease',
        }}>
          <span style={{
            color: 'var(--accent)', fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: '0.8rem', letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem',
          }}>CÓMO FUNCIONA</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            letterSpacing: '-0.03em', lineHeight: 1.2,
          }}>
            Diseñado para el piso industrial
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.5)', marginTop: '1rem', fontSize: '1rem',
            fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 500, margin: '1rem auto 0',
          }}>
            Un flujo de trabajo que se integra sin fricción a las operaciones existentes de cualquier planta.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: 52, left: '16%', right: '16%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(232,70,10,0.3), rgba(232,70,10,0.3), transparent)',
            display: 'none',
          }} />

          {steps.map((s, i) => (
            <div key={s.num} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.7s ease ${i * 0.15}s`,
              textAlign: 'center',
            }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), #ff7043)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(232,70,10,0.4)',
                  margin: '0 auto',
                }}>
                  {s.icon}
                </div>
                <div style={{
                  position: 'absolute', top: -8, right: -8,
                  background: 'var(--navy-3)', border: '1px solid rgba(232,70,10,0.4)',
                  borderRadius: 8, padding: '2px 7px',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.75rem', color: 'var(--accent)',
                }}>{s.num}</div>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem',
                marginBottom: '0.75rem', letterSpacing: '-0.01em',
              }}>{s.title}</h3>
              <p style={{
                color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.75,
                fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 280, margin: '0 auto',
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */
function Stats() {
  const [ref, visible] = useReveal()
  const stats = [
    { val: '37,899', label: 'Casos de enfermedades ocupacionales en minería peruana (2011–2020)', color: 'var(--accent)' },
    { val: '50%', label: 'Reducción de accidentes cuando los casi-accidentes se reportan sistemáticamente', color: '#f59e0b' },
    { val: '83%', label: 'De trabajadores reconocen mejora cuando sus supervisores usan herramientas de seguimiento', color: '#22c55e' },
    { val: '90.7%', label: 'De las enfermedades ocupacionales corresponde a hipoacusia por ruido industrial', color: '#818cf8' },
  ]

  return (
    <section ref={ref} style={{
      background: 'linear-gradient(135deg, var(--navy-3) 0%, var(--navy-2) 100%)',
      padding: '5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: '3.5rem',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s ease',
        }}>
          <span style={{
            color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem',
          }}>DATOS QUE RESPALDAN LA NECESIDAD</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.02em',
          }}>
            La realidad de la industria peruana
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {stats.map((s, i) => (
            <div key={s.val} style={{
              borderLeft: `3px solid ${s.color}`,
              padding: '1.5rem 1.5rem 1.5rem 1.75rem',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '0 12px 12px 0',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.6s ease ${i * 0.1}s`,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: s.color,
                lineHeight: 1, marginBottom: '0.6rem',
              }}>{s.val}</div>
              <p style={{
                color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.6,
                fontFamily: 'var(--font-body)', fontWeight: 300,
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Segments ─── */
function Segments() {
  const [ref, visible] = useReveal()
  const segments = [
    {
      icon: <HardHat size={36} color="var(--accent)" />,
      title: 'Operarios de planta',
      desc: 'Acceso a reportes rápidos desde cualquier dispositivo. Interfaz simplificada que no interrumpe el flujo de trabajo. Confirmación inmediata de que su reporte fue recibido y procesado.',
      items: ['Registro en menos de 30 segundos', 'Soporte fotográfico', 'Notificación de resolución'],
    },
    {
      icon: <Shield size={36} color="#818cf8" />,
      title: 'Supervisores de seguridad',
      desc: 'Visibilidad centralizada de todos los reportes de campo. Alertas automáticas con priorización de riesgos. Mapa de calor de zonas críticas y turnos de mayor incidencia.',
      items: ['Dashboard en tiempo real', 'Alertas con nivel de severidad', 'Histórico por zona y turno'],
    },
    {
      icon: <Users size={36} color="#22c55e" />,
      title: 'RRHH y administración',
      desc: 'Reportes automáticos en formato legal para el SUNAFIL. Indicadores predictivos para justificar inversión en seguridad ante la dirección. Cumplimiento normativo sin trabajo manual.',
      items: ['Reportes PDF automáticos', 'Indicadores KPI ejecutivos', 'Cumplimiento Ley N° 29783'],
    },
  ]

  return (
    <section ref={ref} style={{ background: 'var(--gray-100)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: '4rem',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease',
        }}>
          <span style={{
            color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem',
          }}>SEGMENTOS OBJETIVO</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#0C1829', letterSpacing: '-0.03em',
          }}>
            Una herramienta unificada
            <br />para toda la jerarquía
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {segments.map((s, i) => (
            <div key={s.title} style={{
              background: '#fff', borderRadius: 20, padding: '2.25rem',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: `all 0.7s ease ${i * 0.15}s`,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 16, background: 'var(--gray-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem',
              }}>
                {s.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem',
                color: '#0C1829', marginBottom: '0.75rem',
              }}>{s.title}</h3>
              <p style={{
                color: 'var(--gray-600)', fontSize: '0.88rem', lineHeight: 1.7,
                fontFamily: 'var(--font-body)', fontWeight: 300, marginBottom: '1.25rem',
              }}>{s.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle size={14} color="#22c55e" />
                    <span style={{ color: '#4A5568', fontSize: '0.83rem', fontFamily: 'var(--font-body)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTA() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} style={{
      background: 'var(--navy)', padding: '6rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(232,70,10,0.1) 0%, transparent 70%)',
      }} />
      <div style={{
        maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1,
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s ease',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent), #ff7043)',
          boxShadow: '0 0 48px rgba(232,70,10,0.4)',
          marginBottom: '2rem',
        }}>
          <Shield size={32} color="#fff" />
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.03em',
          lineHeight: 1.15, marginBottom: '1.25rem',
        }}>
          Protege tu planta industrial hoy
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.75,
          fontFamily: 'var(--font-body)', fontWeight: 300, marginBottom: '2.5rem',
          maxWidth: 520, margin: '0 auto 2.5rem',
        }}>
          Únete a las empresas industriales del Perú que están transformando
          su cultura de seguridad con RiskGuard. Implementación en menos de un día hábil.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'var(--accent)', color: '#fff', border: 'none',
            borderRadius: 10, padding: '1rem 2.5rem',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
            cursor: 'pointer', boxShadow: '0 8px 32px rgba(232,70,10,0.4)',
            transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8,
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(232,70,10,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(232,70,10,0.4)' }}
          >
            Iniciar prueba gratuita <ArrowRight size={17} />
          </button>
          <button style={{
            background: 'transparent', color: 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 10, padding: '1rem 2.5rem',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem',
            cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent' }}
          >
            Hablar con ventas
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{
      background: 'var(--navy-2)', borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '3rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg, #E8460A, #FF6B35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Shield size={17} color="#fff" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem' }}>
                RISK<span style={{ color: 'var(--accent)' }}>GUARD</span>
              </span>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7,
              fontFamily: 'var(--font-body)', fontWeight: 300, maxWidth: 240,
            }}>
              Seguridad industrial predictiva para empresas manufactureras y logísticas del Perú.
            </p>
          </div>
          {/* Links */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.7)' }}>
              Plataforma
            </div>
            {['Características', 'Cómo funciona', 'Segmentos', 'Estadísticas', 'Solicitar demo'].map(l => (
              <div key={l} style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-body)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                >{l}</a>
              </div>
            ))}
          </div>
          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.7)' }}>
              Afiliación
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.83rem', lineHeight: 1.8, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              Universidad Peruana de Ciencias Aplicadas (UPC)<br />
              Ingeniería de Software — Aplicaciones Web<br />
              Lima, Perú — 2026
            </p>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', fontFamily: 'var(--font-body)' }}>
            2026 RiskGuard Solutions — Desarrollado por estudiantes de Ingeniería de Software, UPC.
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', fontFamily: 'var(--font-body)' }}>
            Construido para el futuro industrial del Perú.
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ─── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Segments />
      <CTA />
      <Footer />
    </>
  )
}
