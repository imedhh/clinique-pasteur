'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
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
      { name: 'Cardiovasculaire', href: '/chirurgies/chirurgie-cardiovasculaire' },
      { name: 'Générale', href: '/chirurgies/chirurgie-generale' },
      { name: 'Bariatrique', href: '/chirurgies/chirurgie-bariatrique' },
      { name: 'Esthétique', href: '/chirurgies/chirurgie-esthetique' },
      { name: 'Orthopédique', href: '/chirurgies/chirurgie-orthopedique' },
      { name: 'Urologique', href: '/chirurgies/chirurgie-urologique' },
      { name: 'Neurochirurgie', href: '/chirurgies/neurochirurgie' },
      { name: 'ORL', href: '/chirurgies/chirurgie-orl' },
      { name: 'Gynéco-Obstétrique', href: '/chirurgies/chirurgie-gyneco-obstetrique' },
      { name: 'Électrophysiologie', href: '/chirurgies/electrophysiologie' },
      { name: 'Cathétérisme cardiaque', href: '/chirurgies/cardiologie-interventionnelle' },
      { name: 'Toutes les chirurgies', href: '/chirurgies' },
    ],
  },
  {
    name: 'Explorations',
    href: '/explorations',
    children: [
      { name: 'Cardiaques', href: '/explorations/explorations-cardiaques' },
      { name: 'Neurophysiologiques', href: '/explorations/explorations-neurophysiologiques' },

      { name: 'Urodynamiques', href: '/explorations/explorations-urodynamiques' },
      { name: 'Toutes les explorations', href: '/explorations' },
    ],
  },
  {
    name: 'Centres',
    href: '/centres',
    children: [
      { name: 'Urgences 24h/24', href: '/centres/urgences' },
      { name: 'Radiologie & Imagerie', href: '/centres/radiologie' },
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
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileSubmenu(null)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [mobileOpen])

  const toggleMobileSubmenu = useCallback((name: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileSubmenu(prev => prev === name ? null : name)
  }, [])

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
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-3 lg:py-4'}`}
      >
        <div className="container-custom px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image src="/images/logo-fr.png" alt="Clinique Pasteur Tunis" width={483} height={97} className="h-10 sm:h-12 w-auto" />
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
                    <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
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
              <Link href="/devis" className="hidden md:inline-flex btn-primary text-sm" style={{ padding: '10px 20px' }}>
                Demander un Devis
              </Link>
              <a href="tel:+21636402000" className="hidden sm:flex items-center gap-2 text-clinic-green font-semibold text-sm">
                <Phone className="w-4 h-4" /> 36 402 000
              </a>
              <button
                type="button"
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
                aria-expanded={mobileOpen}
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ====== MOBILE MENU - rendered OUTSIDE header ====== */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top bar with logo + close */}
          <div
            style={{
              backgroundColor: 'white',
              borderBottom: '1px solid #e5e7eb',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <Link href="/">
              <Image src="/images/logo-fr.png" alt="Clinique Pasteur" width={483} height={97} className="h-9 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              style={{ padding: 8, WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Urgences banner */}
          <div
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 14 }}>Urgences 24h/24</span>
            <a
              href="tel:+21636402076"
              style={{
                backgroundColor: 'white',
                color: '#dc2626',
                padding: '6px 16px',
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              36 402 076
            </a>
          </div>

          {/* Scrollable nav list */}
          <div
            style={{
              flexGrow: 1,
              overflowY: 'auto',
              backgroundColor: 'white',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <nav style={{ padding: '8px 0' }}>
              {navigation.map((item) => (
                <div key={item.name} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  {item.children ? (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link
                          href={item.href}
                          style={{
                            flexGrow: 1,
                            padding: '16px 16px',
                            fontSize: 16,
                            fontWeight: 600,
                            color: '#1f2937',
                            textDecoration: 'none',
                            display: 'block',
                          }}
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={(e) => toggleMobileSubmenu(item.name, e)}
                          style={{
                            padding: 16,
                            color: '#6b7280',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            WebkitTapHighlightColor: 'transparent',
                            touchAction: 'manipulation',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          aria-label={`Voir les sous-menus de ${item.name}`}
                        >
                          <ChevronDown
                            className="w-5 h-5"
                            style={{
                              transform: mobileSubmenu === item.name ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                            }}
                          />
                        </button>
                      </div>

                      {/* Submenu items */}
                      {mobileSubmenu === item.name && (
                        <div style={{ paddingBottom: 8, backgroundColor: '#f9fafb' }}>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '12px 16px 12px 24px',
                                fontSize: 14,
                                color: '#4b5563',
                                textDecoration: 'none',
                              }}
                            >
                              <ChevronRight className="w-3.5 h-3.5" style={{ color: '#2D8C4E' }} />
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: '16px 16px',
                        fontSize: 16,
                        fontWeight: 600,
                        color: '#1f2937',
                        textDecoration: 'none',
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div style={{ padding: '16px 16px 32px' }}>
              <Link
                href="/devis"
                className="btn-primary"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  width: '100%',
                  fontSize: 16,
                  marginBottom: 12,
                }}
              >
                Demander un Devis
              </Link>
              <a
                href="tel:+21636402000"
                className="btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  fontSize: 16,
                }}
              >
                <Phone className="w-5 h-5" style={{ marginRight: 8 }} /> 36 402 000
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
