import { motion } from 'framer-motion'
import { CalendarCheck, FileDown, Wifi, MessageSquareText, ShieldCheck } from 'lucide-react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const TRUST = [
  { icon: Wifi, text: '4G 免配网 · 插电即用' },
  { icon: MessageSquareText, text: '微信小程序家属端 · 免装 App' },
  { icon: ShieldCheck, text: '只传事件 · 不传原始数据' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF6EE]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 75% 20%, rgba(160,91,56,0.10) 0%, rgba(160,91,56,0) 70%), radial-gradient(40% 40% at 10% 90%, rgba(65,88,74,0.08) 0%, rgba(65,88,74,0) 70%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7DCC9] bg-[#FFFDF8] px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-[#A05B38] shadow-paper">
            居家老人安全守护 × 家庭话题引擎
          </p>
          <h1 className="font-serif text-[clamp(2.2rem,5.2vw,3.8rem)] font-bold leading-[1.25] tracking-tight text-[#3A322A]">
            知道爸妈今天
            <br />
            起没起床、<span className="text-[#A05B38]">吃没吃药</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#7C7062]">
            让每一次关心，都有话可说。一台座钟形态的守护主机、两类无感配件、
            一个微信小程序——把家里的日常，变成子女回得动手的安心。
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#A05B38] px-7 py-3.5 text-base font-medium text-[#FFFDF8] shadow-paper transition-all hover:-translate-y-0.5 hover:bg-[#7C4527]"
            >
              <CalendarCheck className="h-5 w-5" strokeWidth={1.8} />
              预约体验
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#A05B38]/40 bg-[#FFFDF8] px-7 py-3.5 text-base font-medium text-[#7C4527] transition-all hover:-translate-y-0.5 hover:border-[#A05B38]"
            >
              <FileDown className="h-5 w-5" strokeWidth={1.8} />
              留资后发送路演资料
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST.map((t) => (
              <li key={t.text} className="flex items-center gap-2 text-sm text-[#7C7062]">
                <t.icon className="h-4 w-4 text-[#41584A]" strokeWidth={1.8} />
                {t.text}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[#F0E0D2]/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E7DCC9] shadow-paper-lg">
            <img
              src="./hero-clock.jpg"
              alt="暖光台灯与座钟形态的桌面守护主机"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            className="absolute -bottom-5 left-6 rounded-2xl border border-[#E7DCC9] bg-[#FFFDF8] px-5 py-3 shadow-paper-lg"
          >
            <p className="text-xs text-[#7C7062]">今日摘要</p>
            <p className="mt-0.5 text-sm font-medium text-[#3A322A]">
              药已吃 2/3 次 · 昨夜起夜 2 次 · 设备正常
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
