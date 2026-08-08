import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionHeader from '@/components/site/SectionHeader'
import { FadeIn } from '@/components/site/Reveal'

const FAQS = [
  {
    q: '小度、华为、小米入场怎么办？',
    a: '巨头做的是「等人唤醒」的通用入口，我们做的是「主动叫人」的垂直终端。服药确认闭环是「硬件 + 服务 + 语义运营」的脏活累活，偏离巨头主航道；巨头的账号体系决定其家属端必须是自家 App，迁微信小程序等于自我稀释。窗口期的本质是商业模式窗口，不是技术窗口——巨头下场反而教育市场、抬高品类。',
  },
  {
    q: '适老设备「闲置魔咒」怎么破？',
    a: '高闲置是多源调研的一致结论，其三大死因我们逐一免疫：①功能冗余——我们只做用药提醒、起夜守护、一键 SOS 三个场景；②交互反人类——零学习、物理大键、设备 100% 主动发起，老人「不需要会用，只需要在场」；③服务缺位——订阅含家属端闭环与异常推送。结构上，用药提醒每日 2–4 次被动触达、起夜守护每晚自动工作，高频触点是天然的防闲置结构。',
  },
  {
    q: '学生团队凭什么做成？',
    a: '早期投资本质是投人。先例已经足够多：云鲸张峻彬 26 岁学生气创业做成扫拖机器人头部；上海交大团队的馨守镯以「零学习哲学」获投；亲鹿创始团队出自小天才——「懂特定人群的产品团队」比资历重要。学生团队的真实短板是供应链与渠道，我们用成熟方案（BOM 透明、无精密结构件）、珠三角成熟代工与创业营供应链资源对冲，家属端线上渠道无需线下铺货。',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-[#FAF6EE]">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="FAQ · 常见质疑"
          title="常见质疑，正面回应"
          desc="路演中最常被问到的三个问题，我们把答案写在这里。"
        />
        <FadeIn>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-3xl border border-[#E7DCC9] bg-[#FFFDF8] px-6 shadow-paper data-[state=open]:shadow-paper-lg"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-base font-bold text-[#3A322A] hover:no-underline md:text-lg [&>svg]:text-[#A05B38]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-[#7C7062] md:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
