import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="text-8xl font-heading font-bold text-clinic-green mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Page introuvable</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-5 h-5 mr-2" /> Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="btn-secondary">
            Nous contacter <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
