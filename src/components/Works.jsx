import { useRef, useState } from 'react'

const works = [
  {
    n: '001', letter: 'G', name: 'ICAI Band',
    type: 'Music · Lead Guitar', tag: 'MUSIC',
    img: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/473755708_122190970124244421_1937239193088505976_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGlZaieVI5ojj3b9jdxOcW-PqqCjhN9tTk-qoKOE321OQic2szTn6CCmydwa_8TZ4t7NP1NS2HCrC7mkvv4lzzU&_nc_ohc=YNxXdC_ZBfIQ7kNvwEZo-t6&_nc_oc=Adm3Ment99wZ9SWpFhTTi0xd8wIjMO6v0dedvnAfhPSoEXlSAlrspD9Stvlq1yc-28s&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=7PDIR33KWniqKODm2OIZUg&_nc_ss=8&oh=00_Afybee-bqbQEke8mrO9-DVljfIoeRuqPAZGJ3ztzmngoFw&oe=69BA144A',
  },
  {
    n: '002', letter: 'D', name: 'Brand Identities',
    type: 'Graphic Design · Branding', tag: 'DESIGN',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
  },
  {
    n: '003', letter: 'V', name: 'Video Productions',
    type: 'Video Editing · Motion', tag: 'VIDEO',
    img: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/491939853_704346505601628_63709524809156232_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFQ1rr8-9zmrqV8KbspL5BTPWnJ8Cj7s4Y9acnwKPuzhs2uRkG7xCpJ8JmVykS-OGleJtcMET5PZrmrwqst8xck&_nc_ohc=MaU04oI-d1oQ7kNvwGxk-Ql&_nc_oc=AdnSvODVZCJvN5v4KK1XkOAUwUuKFpROy9o066Sxgl9__sMLVqh3OVSou1dQnkKVObE&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=zD6lGlaKuLUsdTKjWdtA8g&_nc_ss=8&oh=00_AfzurMbG_CwXrnkALiYX069fmSk9bl7BHQY-4MzH-PFaPg&oe=69BA131B',
  },
  {
    n: '004', letter: 'P', name: 'Photography',
    type: 'Portrait · Events · Editing', tag: 'PHOTO',
    img: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/475012651_642144478488498_3596377355883805845_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHvT4j59BmRIkJI5kyH5jVqnmhV37ZFPWaeaFXftkU9ZgMsQEl3FtCFNB__lP67I_DKYK0KouNNmB4JK1PLFGw-&_nc_ohc=2UlsxHO3AlIQ7kNvwF0r9m5&_nc_oc=AdmNJ6YjnGOzXrAQjY14hQTo5-G76DKIEj5Bd9LrjVZrhTy0dQP9rescKMmh6g12feA&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=i_FT39c94ScUOi_wnbOLMw&_nc_ss=8&oh=00_AfzgdbpaNu-aGFpdHp93YhnolHAAYChjI_j325DeHuSMpg&oe=69BA035C',
  },
  {
    n: '005', letter: 'W', name: 'Web Projects',
    type: 'Frontend · React · Vite', tag: 'CODE',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    n: '006', letter: 'U', name: 'UI/UX Design',
    type: 'Wireframes · Prototypes', tag: 'UX',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80',
  },
]

function WorkCard({ w }) {
  const [hovered, setHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  return (
    <div
      ref={cardRef}
      className="wcard relative overflow-hidden cursor-pointer border-[1.5px]"
      style={{ aspectRatio: '4/3', borderColor: 'var(--ink)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* IMAGE layer — slides up on hover */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: hovered ? 'translateY(0)' : 'translateY(101%)' }}
      >
        <img
          src={w.img}
          alt={w.name}
          className="w-full h-full object-cover"
          style={{
            filter: 'grayscale(100%) contrast(1.1)',
            transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 6s ease-out',
          }}
        />
        {/* ink overlay on image */}
        <div className="absolute inset-0" style={{ background: 'rgba(12,11,9,0.45)' }} />
      </div>

      {/* Ghost letter */}
      <div
        className="absolute inset-0 flex items-center justify-center font-fraktur pointer-events-none transition-all duration-300"
        style={{
          fontSize: '5rem',
          color: hovered ? 'var(--paper)' : 'var(--ink)',
          opacity: hovered ? 0.18 : 0.06,
        }}
      >
        {w.letter}
      </div>

      {/* Tag */}
      <div
        className="absolute top-3 right-3 z-10 font-bebas text-[.6rem] tracking-[3px] border-[1.5px] px-2 py-[2px] transition-all duration-300"
        style={{
          borderColor: hovered ? 'var(--paper)' : 'var(--ink)',
          color: hovered ? 'var(--paper)' : 'var(--ink)',
          background: hovered ? 'rgba(12,11,9,0.5)' : 'transparent',
        }}
      >
        {w.tag}
      </div>

      {/* Info */}
      <div
        className="absolute inset-0 p-5 flex flex-col justify-end z-10 transition-colors duration-200"
        style={{ color: hovered ? 'var(--paper)' : 'var(--ink)' }}
      >
        <p className="font-bebas text-[.6rem] tracking-[5px] mb-1" style={{ opacity: 0.5 }}>
          WORK / {w.n}
        </p>
        <p className="font-bebas text-[1.2rem] tracking-[2px] leading-tight">{w.name}</p>
        <p className="font-elite text-[.75rem] mt-1" style={{ opacity: 0.6 }}>{w.type}</p>
      </div>
    </div>
  )
}

export default function Works() {
  return (
    <section id="work" className="px-6 py-10 md:px-12 md:py-14 border-b-[4px]" style={{ borderColor: 'var(--ink)' }}>
      <div className="flex justify-between items-baseline mb-8 flex-wrap gap-4">
        <h2 className="font-fraktur" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>Selected Works</h2>
        <span className="font-bebas text-[.75rem] tracking-[4px] opacity-40">LEIMAR JESALVA</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-[3px]" style={{ borderColor: 'var(--ink)' }}>
        {works.map((w, i) => <WorkCard key={i} w={w} />)}
      </div>
    </section>
  )
}
