'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from '@/components/I18nLink'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown, ChevronRight, Clock, Mail, MapPin } from 'lucide-react'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Header({ locale = 'fr', dict }: { locale?: string; dict?: any } = {}) {
  const HEADER_UI = {
    fr: {
      address: 'Centre Urbain Nord, Tunis',
      open247: 'Ouvert 24h/24 - 7j/7',
      emergency: 'Urgences',
      emergency247: 'Urgences 24h/24',
      requestQuote: 'Demander un Devis',
      menu: 'Menu',
      closeMenu: 'Fermer le menu',
      viewSubmenu: 'Voir les sous-menus de',
    },
    en: {
      address: 'Centre Urbain Nord, Tunis',
      open247: 'Open 24/7',
      emergency: 'Emergency',
      emergency247: 'Emergency 24/7',
      requestQuote: 'Request a Quote',
      menu: 'Menu',
      closeMenu: 'Close menu',
      viewSubmenu: 'View submenu of',
    },
    ar: {
      address: 'المركز العمراني الشمالي، تونس',
      open247: 'مفتوح 24/24 - 7/7',
      emergency: 'الطوارئ',
      emergency247: 'الطوارئ على مدار الساعة',
      requestQuote: 'اطلب عرض سعر',
      menu: 'القائمة',
      closeMenu: 'إغلاق القائمة',
      viewSubmenu: 'عرض القوائم الفرعية لـ',
    },
  }
  const t = (HEADER_UI as any)[locale] || HEADER_UI.fr
  const SUBNAV: any = {
    fr: { presentation: 'Présentation', infrastructure: 'Infrastructure', hospitalisation: 'Hospitalisation', cardiovasc: 'Cardiovasculaire', generale: 'Générale', bariatrique: 'Bariatrique', esthetique: 'Esthétique', orthopedique: 'Orthopédique', urologique: 'Urologique', neurochirurgie: 'Neurochirurgie', orl: 'ORL', gyneco: 'Gynéco-Obstétrique', explCard: 'Cardiaques', explNeuro: 'Neurophysiologiques', explUro: 'Urodynamiques', urgences: 'Urgences 24h/24', cardioInterv: 'Cardiologie interventionnelle', radiologie: 'Radiologie & Imagerie', endoscopie: 'Endoscopie', hopitalJour: 'Hôpital de jour (chimiothérapie)', nutrition: 'Nutrition & Esthétique' },
    en: { presentation: 'Overview', infrastructure: 'Facilities', hospitalisation: 'Hospitalization', cardiovasc: 'Cardiovascular', generale: 'General Surgery', bariatrique: 'Bariatric', esthetique: 'Cosmetic', orthopedique: 'Orthopedic', urologique: 'Urology', neurochirurgie: 'Neurosurgery', orl: 'ENT', gyneco: 'Gynecology & Obstetrics', explCard: 'Cardiac', explNeuro: 'Neurophysiological', explUro: 'Urodynamic', urgences: '24/7 Emergency', cardioInterv: 'Interventional Cardiology', radiologie: 'Radiology & Imaging', endoscopie: 'Endoscopy', hopitalJour: 'Day Hospital (chemotherapy)', nutrition: 'Nutrition & Aesthetics' },
    ar: { presentation: 'تقديم', infrastructure: 'البنية التحتية', hospitalisation: 'الإقامة بالمستشفى', cardiovasc: 'القلب والأوعية الدموية', generale: 'الجراحة العامة', bariatrique: 'جراحة السمنة', esthetique: 'التجميل', orthopedique: 'جراحة العظام', urologique: 'المسالك البولية', neurochirurgie: 'جراحة الأعصاب', orl: 'الأنف والأذن والحنجرة', gyneco: 'أمراض النساء والتوليد', explCard: 'القلبية', explNeuro: 'الفيزيولوجية العصبية', explUro: 'ديناميكا البول', urgences: 'الطوارئ على مدار الساعة', cardioInterv: 'أمراض القلب التداخلية', radiologie: 'الأشعة والتصوير', endoscopie: 'التنظير', hopitalJour: 'الاستشفاء النهاري (العلاج الكيميائي)', nutrition: 'التغذية والتجميل' },
  }
  const sn = SUBNAV[locale] || SUBNAV.fr
  const navigation = [
    { name: dict?.nav?.home || 'Accueil', href: '/' },
    {
      name: dict?.nav?.clinic || 'La Clinique',
      href: '/la-clinique',
      children: [
        { name: sn.presentation, href: '/la-clinique' },
        { name: sn.infrastructure, href: '/la-clinique#infrastructure' },
        { name: sn.hospitalisation, href: '/hospitalisation' },
      ],
    },
    {
      name: dict?.nav?.surgeries || 'Chirurgies',
      href: '/chirurgies',
      children: [
        { name: sn.cardiovasc, href: '/chirurgies/chirurgie-cardiovasculaire' },
        { name: sn.generale, href: '/chirurgies/chirurgie-generale' },
        { name: sn.bariatrique, href: '/chirurgies/chirurgie-bariatrique' },
        { name: sn.esthetique, href: '/chirurgies/chirurgie-esthetique' },
        { name: sn.orthopedique, href: '/chirurgies/chirurgie-orthopedique' },
        { name: sn.urologique, href: '/chirurgies/chirurgie-urologique' },
        { name: sn.neurochirurgie, href: '/chirurgies/neurochirurgie' },
        { name: sn.orl, href: '/chirurgies/chirurgie-orl' },
        { name: sn.gyneco, href: '/chirurgies/chirurgie-gyneco-obstetrique' },
        { name: dict?.common?.allSurgeries || 'Toutes les chirurgies', href: '/chirurgies' },
      ],
    },
    {
      name: dict?.nav?.explorations || 'Explorations',
      href: '/explorations',
      children: [
        { name: sn.explCard, href: '/explorations/explorations-cardiaques' },
        { name: sn.explNeuro, href: '/explorations/explorations-neurophysiologiques' },

        { name: sn.explUro, href: '/explorations/explorations-urodynamiques' },
        { name: dict?.common?.allExplorations || 'Toutes les explorations', href: '/explorations' },
      ],
    },
    {
      name: dict?.nav?.centres || 'Centres',
      href: '/centres',
      children: [
        { name: sn.urgences, href: '/centres/urgences' },
        { name: sn.cardioInterv, href: '/centres/cardiologie-interventionnelle' },
        { name: sn.radiologie, href: '/centres/radiologie' },
        { name: sn.endoscopie, href: '/centres/endoscopie' },
        { name: sn.hopitalJour, href: '/centres/hospitalisation-jour' },
        { name: sn.nutrition, href: '/centres/coaching-nutritionnel-esthetique' },
        { name: dict?.common?.allCentres || 'Tous les centres', href: '/centres' },
      ],
    },
    { name: dict?.nav?.contact || 'Contact', href: '/contact' },
  ]
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
              {t.address}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-clinic-gold" />
              contact@cliniquepasteur.com.tn
            </span>
          </div>
          <div className="flex items-center gap-5">
            <LanguageSwitcher dark />
            <span className="w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-clinic-gold" />
              {t.open247}
            </span>
            <a href="tel:+21636402076" className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded text-xs font-bold hover:bg-red-700 transition">
              <Phone className="w-3.5 h-3.5" /> {t.emergency}: <span dir="ltr">36 402 076</span>
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
            <Link href="/" className="shrink-0">
              <Image src="/images/logo-fr.png" alt="Clinique Pasteur Tunis" width={483} height={97} className="h-9 sm:h-12 w-auto" priority />
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
              <LanguageSwitcher className="lg:hidden" compact />
              <Link href="/devis" className="hidden md:inline-flex btn-primary text-sm" style={{ padding: '10px 20px' }}>
                {dict?.common?.requestQuote || 'Demander un Devis'}
              </Link>
              <a href="tel:+21636402000" className="hidden sm:flex items-center gap-2 text-clinic-green font-semibold text-sm">
                <Phone className="w-4 h-4" /> <span dir="ltr">36 402 000</span>
              </a>
              <button
                type="button"
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={t.menu}
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
              aria-label={t.closeMenu}
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
