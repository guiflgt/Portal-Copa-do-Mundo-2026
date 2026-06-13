import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jogos from '../../data/jogos'
import Flag from '../../components/Flag/Flag'
import styles from './Home.module.css'

function Home() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 })

  // Contagem regressiva para a Final: 19 de julho de 2026, 16:00 (horário local)
  useEffect(() => {
    const finalDate = new Date('2026-07-19T16:00:00')

    const timer = setInterval(() => {
      const agora = new Date()
      const diferenca = finalDate - agora

      if (diferenca <= 0) {
        clearInterval(timer)
        setCountdown({ dias: 0, horas: 0, minutos: 0, segundos: 0 })
        return
      }

      setCountdown({
        dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((diferenca % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const jogosEncerrados = jogos.filter(j => j.status === 'encerrado' && j.placar)
  const jogosHoje = jogos.filter(j => j.status === 'hoje')

  return (
    <div className={styles.home}>
      {/* === HERO BANNER === */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>🏆 A Copa está acontecendo!</span>
          <h1 className={styles.heroTitle}>
            Copa do Mundo<br />
            <span className={styles.heroHighlight}>FIFA 2026</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Estados Unidos • México • Canadá
          </p>
          <button
            className={styles.heroCta}
            onClick={() => navigate('/jogos')}
          >
            Ver jogos ao vivo →
          </button>
        </div>
      </section>

      {/* === CONTAGEM REGRESSIVA PARA A FINAL === */}
      <section className={styles.countdownSection}>
        <h2 className={styles.countdownTitle}>⏱️ Contagem regressiva para a Grande Final</h2>
        <p className={styles.countdownLocal}>MetLife Stadium • Nova York / Nova Jersey • 19 de julho</p>
        <div className={styles.countdownGrid}>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{countdown.dias}</span>
            <span className={styles.countdownLabel}>Dias</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{countdown.horas}</span>
            <span className={styles.countdownLabel}>Horas</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{countdown.minutos}</span>
            <span className={styles.countdownLabel}>Minutos</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{countdown.segundos}</span>
            <span className={styles.countdownLabel}>Segundos</span>
          </div>
        </div>
      </section>

      {/* === RESULTADOS RECENTES === */}
      {jogosEncerrados.length > 0 && (
        <section className={styles.resultadosSection}>
          <h2 className={styles.sectionTitle}>⚽ Resultados Recentes</h2>
          <div className={styles.resultadosGrid}>
            {jogosEncerrados.map(jogo => (
              <div key={jogo.id} className={styles.resultadoCard}>
                <span className={styles.resultadoGrupo}>Grupo {jogo.grupo}</span>
                <div className={styles.resultadoTimes}>
                  <span className={styles.time}>
                    <Flag emoji={jogo.mandanteBandeira} className={styles.bandeira} alt={jogo.mandante} />
                    {jogo.mandante}
                  </span>
                  <span className={styles.placar}>{jogo.placar}</span>
                  <span className={styles.time}>
                    {jogo.visitante}
                    <Flag emoji={jogo.visitanteBandeira} className={styles.bandeira} alt={jogo.visitante} />
                  </span>
                </div>
                <span className={styles.resultadoInfo}>{jogo.estadio} • {jogo.data}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* === JOGOS DE HOJE === */}
      {jogosHoje.length > 0 && (
        <section className={styles.hojeSection}>
          <h2 className={styles.sectionTitle}>🔴 Jogos de Hoje</h2>
          <div className={styles.resultadosGrid}>
            {jogosHoje.map(jogo => (
              <div key={jogo.id} className={`${styles.resultadoCard} ${styles.cardHoje}`}>
                <span className={styles.resultadoGrupo}>Grupo {jogo.grupo}</span>
                <div className={styles.resultadoTimes}>
                  <span className={styles.time}>
                    <Flag emoji={jogo.mandanteBandeira} className={styles.bandeira} alt={jogo.mandante} />
                    {jogo.mandante}
                  </span>
                  <span className={styles.horario}>{jogo.horario}</span>
                  <span className={styles.time}>
                    {jogo.visitante}
                    <Flag emoji={jogo.visitanteBandeira} className={styles.bandeira} alt={jogo.visitante} />
                  </span>
                </div>
                <span className={styles.resultadoInfo}>{jogo.estadio} • {jogo.cidade}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* === CARDS DE NAVEGAÇÃO === */}
      <section className={styles.cardsSection}>
        <h2 className={styles.sectionTitle}>🌎 Explore a Copa</h2>
        <div className={styles.cardsGrid}>
          <div
            className={styles.navCard}
            onClick={() => navigate('/selecoes')}
          >
            <span className={styles.navCardIcon}>🏟️</span>
            <h3 className={styles.navCardTitle}>Seleções</h3>
            <p className={styles.navCardDesc}>Conheça as 48 seleções participantes, grupos e destaques.</p>
            <span className={styles.navCardArrow}>→</span>
          </div>
          <div
            className={styles.navCard}
            onClick={() => navigate('/estadios')}
          >
            <span className={styles.navCardIcon}>🏟️</span>
            <h3 className={styles.navCardTitle}>Estádios</h3>
            <p className={styles.navCardDesc}>Os 16 estádios-sede nos EUA, México e Canadá.</p>
            <span className={styles.navCardArrow}>→</span>
          </div>
          <div
            className={styles.navCard}
            onClick={() => navigate('/jogos')}
          >
            <span className={styles.navCardIcon}>📅</span>
            <h3 className={styles.navCardTitle}>Jogos</h3>
            <p className={styles.navCardDesc}>Calendário completo, resultados e próximas partidas.</p>
            <span className={styles.navCardArrow}>→</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
