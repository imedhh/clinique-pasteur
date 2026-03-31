'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X, ChevronDown, ChevronRight, Clock, Mail, MapPin } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'La Clinique',
    href: '/la-clinique',
    children: [
      { name: 'Présentation', href: '/la-clinique' },
      { name: 'Infrastructure', href: '/la-clinique#infrastructure' },
      { name: 'Hospitalisation', href: '/hospitalisation' },
    ],
  },
  {
    name: 'Chirurgies',
    href: '/chirurgies',
    children: [
      { name: 'Cardiovasculaire et Thoracique', href: '/chirurgies/chirurgie-cardiovasculaire' },
      { name: 'Chirurgie Générale', href: '/chirurgies/chirurgie-generale' },
      { name: 'Chirurgie Bariatrique', href: '/chirurgies/chirurgie-bariatrique' },
      { name: 'Chirurgie Esthétique', href: '/chirurgies/chirurgie-esthetique' },
      { name: 'Chirurgie Orthopédique', href: '/chirurgies/chirurgie-orthopedique' },
      { name: 'Chirurgie Urologique', href: '/chirurgies/chirurgie-urologique' },
      { name: 'Neurochirurgie', href: '/chirurgies/neurochirurgie' },
      { name: 'Chirurgie ORL', href: '/chirurgies/chirurgie-orl' },
      { name: 'Gynéco-Obstétrique', href: '/chirurgies/chirurgie-gyneco-obstetrique' },
      { name: 'Électrophysiologie', href: '/chirurgies/electrophysiologie' },
      { name: 'Toutes les chirurgies', href: '/chirurgies' },
    ],
  },
  {
    name: 'Explorations',
    href: '/explorations',
    children: [
      { name: 'Explorations Cardiaques', href: '/explorations/explorations-cardiaques' },
      { name: 'Explorations Neurophysiologiques', href: '/explorations/explorations-neurophysiologiques' },
      { name: 'Explorations Ophtalmologiques', href: '/explorations/explorations-ophtalmologiques' },
      { name: 'Explorations Urodynamiques', href: '/explorations/explorations-urodynamiques' },
      { name: 'Toutes les explorations', href: '/explorations' },
    ],
  },
  {
    name: 'Centres',
    href: '/centres',
    children: [
      { name: 'Urgences 24h/24', href: '/centres/urgences' },
      { name: 'Radiologie & Imagerie', href: '/centres/radiologie' },
      { name: 'Laboratoire d\'Analyses', href: '/centres/laboratoire' },
      { name: 'Endoscopie', href: '/centres/endoscopie' },
      { name: 'Nutrition & Esthétique', href: '/centres/coaching-nutritionnel-esthetique' },
      { name: 'Tous les centres', href: '/centres' },
    ],
  },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileSubmenu(null)
  }

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenu(mobileSubmenu === name ? null : name)
  }

  return (
    <>
      {/* Top Bar - desktop only */}
      <div className="bg-clinic-dark text-white text-sm hidden lg:block">
        <div className="container-custom flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-clinic-gold" />
              Centre Urbain Nord, Tunis
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-clinic-gold" />
              contact@cliniquepasteur.com.tn
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-clinic-gold" />
              Ouvert 24h/24 - 7j/7
            </span>
            <a href="tel:+21636402076" className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded text-xs font-bold hover:bg-red-700 transition">
              <Phone className="w-3.5 h-3.5" /> Urgences: 36 402 076
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-3 lg:py-4'}`}>
        <div className="container-custom px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMobile}>
              <Image src="/images/logo.png" alt="Clinique Pasteur" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md" />
              <div>
                <span className="text-lg sm:text-xl font-heading font-bold text-clinic-darkgreen leading-tight block">
                  Clinique Pasteur
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Tunis - Centre Urbain Nord</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-clinic-green rounded-lg hover:bg-green-50 transition-all"
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-green-50 hover:text-clinic-green transition-all"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/devis" className="hidden md:inline-flex btn-primary text-sm !px-5 !py-2.5">
                Demander un Devis
              </Link>
              <a href="tel:+21636402000" className="hidden sm:flex items-center gap-2 text-clinic-green font-semibold text-sm hover:text-clinic-darkgreen transition">
                <Phone className="w-4 h-4" /> 36 402 000
              </a>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition z-50 relative"
                onClick={() => {
                  setMobileOpen(!mobileOpen)
                  if (mobileOpen) setMobileSubmenu(null)
                }}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[56px] bg-white z-40 overflow-y-auto animate-fade-in">
            {/* Urgences banner mobile */}
            <div className="bg-red-600 text-white px-4 py-3 flex items-center justify-between">
              <span className="text-sm font-semibold">Urgences 24h/24</span>
              <a href="tel:+21636402076" className="bg-white text-red-600 px-4 py-1.5 rounded-full text-sm font-bold">
                36 402 076
              </a>
            </div>

            <div className="px-4 py-2">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-100">
                  {item.children ? (
                    <>
                      {/* Parent with toggle */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="flex-grow py-4 text-gray-800 font-semibold text-base"
                          onClick={closeMobile}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="p-3 -mr-2 text-gray-500"
                          aria-label={`Ouvrir ${item.name}`}
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSubmenu === item.name ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {/* Submenu */}
                      {mobileSubmenu === item.name && (
                        <div className="pb-3 animate-fade-in">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center gap-2 py-2.5 pl-4 text-gray-600 text-sm hover:text-clinic-green transition"
                              onClick={closeMobile}
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-clinic-green" />
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-gray-800 font-semibold text-base"
                      onClick={closeMobile}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col gap-3 pb-8">
                <Link href="/devis" className="btn-primary text-center text-base" onClick={closeMobile}>
                  Demander un Devis
                </Link>
                <a href="tel:+21636402000" className="btn-secondary text-center text-base">
                  <Phone className="w-5 h-5 mr-2" /> 36 402 000
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
