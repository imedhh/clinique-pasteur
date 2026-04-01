'use client'
import { useEffect, useRef, useState } from 'react'
import { Heart, Bed, Stethoscope, Building2, Shield, Users } from 'lucide-react'

const stats = [
  { icon: Shield, value: 15, suffix: '+', label: 'Spécialités' },
  { icon: Bed, value: 79, suffix: '', label: 'Chambres' },
  { icon: Stethoscope, value: 10, suffix: '', label: 'Blocs opératoires' },
  { icon: Building2, value: 11, suffix: '', label: 'Niveaux' },
  { icon: Heart, value: 29, suffix: '', label: 'Lits de réanimation' },
  { icon: Users, value: 30, suffix: '', label: 'Cabinets médicaux' },
]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const step = end / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  )
}

export default function CounterSection() {
  return (
    <section className="gradient-green py-16">
      <div className="container-custom px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-8 h-8 text-clinic-gold mx-auto mb-3" />
              <Counter end={value} suffix={suffix} />
              <p className="text-green-100 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
