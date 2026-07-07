'use client'
import { useState } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

export default function DevisForm({ locale = 'fr' }: { locale?: string } = {}) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-clinic-green mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Demande envoyée avec succès !</h3>
        <p className="text-gray-600 mb-6">
          Notre équipe commerciale vous répondra sous 24-48h avec un devis personnalisé.
        </p>
        <button onClick={() => { setSubmitted(false); setError('') }} className="btn-secondary text-sm">
          Envoyer une autre demande
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        // Convert files to base64 (par chunks pour éviter le dépassement de pile sur gros fichiers)
        const files: { name: string; content: string; type: string }[] = []
        const fileInput = formData.getAll('fichiers') as File[]
        let totalBytes = 0
        for (const file of fileInput) {
          if (file && file.size > 0) {
            totalBytes += file.size
            if (file.size > 10 * 1024 * 1024) {
              setError(`Le fichier « ${file.name} » dépasse 10 Mo.`)
              setLoading(false)
              return
            }
            if (totalBytes > 15 * 1024 * 1024) {
              setError('Les pièces jointes dépassent 15 Mo au total.')
              setLoading(false)
              return
            }
            const bytes = new Uint8Array(await file.arrayBuffer())
            let binary = ''
            const CHUNK = 0x8000
            for (let i = 0; i < bytes.length; i += CHUNK) {
              binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK))
            }
            files.push({ name: file.name, content: btoa(binary), type: file.type })
          }
        }

        const data = {
          nom: formData.get('nom'),
          prenom: formData.get('prenom'),
          email: formData.get('email'),
          telephone: formData.get('telephone'),
          pays: formData.get('pays'),
          age: formData.get('age'),
          specialite: formData.get('specialite'),
          typeChambre: formData.get('typeChambre'),
          message: formData.get('message'),
          date: formData.get('date'),
          website: formData.get('website'), // honeypot anti-spam
          fichiers: files,
        }
        try {
          const res = await fetch('/api/devis', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          if (res.ok) {
            setSubmitted(true)
          } else {
            setError('Une erreur est survenue. Veuillez réessayer ou appeler le +216 36 402 000.')
          }
        } catch {
          setError('Une erreur est survenue. Veuillez réessayer ou appeler le +216 36 402 000.')
        } finally {
          setLoading(false)
        }
      }}
      className="space-y-6"
    >
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      {/* Honeypot anti-spam : champ caché, invisible pour les humains */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />


      {/* Informations personnelles */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Informations Personnelles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="devis-nom" className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
            <input id="devis-nom" name="nom" type="text" required autoComplete="family-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre nom" />
          </div>
          <div>
            <label htmlFor="devis-prenom" className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
            <input id="devis-prenom" name="prenom" type="text" required autoComplete="given-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre prénom" />
          </div>
          <div>
            <label htmlFor="devis-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input id="devis-email" name="email" type="email" required autoComplete="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="votre@email.com" />
          </div>
          <div>
            <label htmlFor="devis-telephone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
            <input id="devis-telephone" name="telephone" type="tel" required autoComplete="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="+216 XX XXX XXX" />
          </div>
          <div>
            <label htmlFor="devis-pays" className="block text-sm font-medium text-gray-700 mb-1">Pays de résidence *</label>
            <select id="devis-pays" name="pays" required autoComplete="country-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Sélectionnez votre pays</option>
              <option value="Tunisie">Tunisie</option>
              <option value="France">France</option>
              <option value="Belgique">Belgique</option>
              <option value="Suisse">Suisse</option>
              <option value="Canada">Canada</option>
              <option value="Allemagne">Allemagne</option>
              <option value="Royaume-Uni">Royaume-Uni</option>
              <option value="Italie">Italie</option>
              <option value="Algérie">Algérie</option>
              <option value="Maroc">Maroc</option>
              <option value="Libye">Libye</option>
              <option value="Arabie Saoudite">Arabie Saoudite</option>
              <option value="Émirats Arabes Unis">Émirats Arabes Unis</option>
              <option value="Qatar">Qatar</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div>
            <label htmlFor="devis-age" className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
            <input id="devis-age" name="age" type="number" min="0" max="120" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" placeholder="Votre âge" />
          </div>
        </div>
      </div>

      {/* Informations médicales */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Informations Médicales</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="devis-specialite" className="block text-sm font-medium text-gray-700 mb-1">Service souhaité *</label>
            <select id="devis-specialite" name="specialite" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Sélectionnez un service</option>

              <optgroup label="Consultations médicales">
                <option value="Consultation cardiologie">Consultation cardiologie</option>
                <option value="Consultation pneumologie">Consultation pneumologie</option>
                <option value="Consultation gastro-entérologie">Consultation gastro-entérologie</option>
                <option value="Consultation neurologie">Consultation neurologie</option>
                <option value="Consultation urologie">Consultation urologie</option>
                <option value="Consultation gynécologie">Consultation gynécologie</option>
                <option value="Consultation ORL">Consultation ORL</option>
                <option value="Consultation orthopédie">Consultation orthopédie</option>
                <option value="Consultation dermatologie">Consultation dermatologie</option>
                <option value="Consultation endocrinologie">Consultation endocrinologie</option>
                <option value="Consultation rhumatologie">Consultation rhumatologie</option>
                <option value="Consultation médecine interne">Consultation médecine interne</option>
                <option value="Consultation pédiatrie">Consultation pédiatrie</option>
                <option value="Consultation nutrition / diététique">Consultation nutrition / diététique</option>
              </optgroup>

              <optgroup label="Explorations & Examens">
                <option value="Explorations cardiaques (ECG, Holter, écho)">Explorations cardiaques (ECG, Holter, échographie)</option>
                <option value="Explorations neurophysiologiques (EEG, EMG)">Explorations neurophysiologiques (EEG, EMG)</option>
                <option value="Explorations urodynamiques">Explorations urodynamiques</option>
                <option value="Endoscopie (FOGD, coloscopie)">Endoscopie (fibroscopie, coloscopie)</option>
                <option value="Bilan de santé complet">Bilan de santé complet</option>
                <option value="Bilan pré-opératoire">Bilan pré-opératoire</option>
              </optgroup>

              <optgroup label="Imagerie médicale">
                <option value="IRM">IRM (Imagerie par Résonance Magnétique)</option>
                <option value="Scanner">Scanner</option>
                <option value="Mammographie">Mammographie</option>
                <option value="Échographie">Échographie</option>
                <option value="Radiologie conventionnelle">Radiologie conventionnelle</option>
                <option value="Ostéodensitométrie">Ostéodensitométrie</option>
                <option value="Panoramique dentaire">Panoramique dentaire</option>
              </optgroup>

              <optgroup label="Chirurgies">
                <option value="Chirurgie cardiovasculaire et thoracique">Chirurgie cardiovasculaire et thoracique</option>
                <option value="Chirurgie générale">Chirurgie générale</option>
                <option value="Chirurgie bariatrique (obésité)">Chirurgie bariatrique (sleeve, bypass)</option>
                <option value="Chirurgie esthétique et réparatrice">Chirurgie esthétique et réparatrice</option>
                <option value="Chirurgie orthopédique">Chirurgie orthopédique</option>
                <option value="Chirurgie urologique">Chirurgie urologique</option>
                <option value="Chirurgie ORL">Chirurgie ORL</option>
                <option value="Neurochirurgie">Neurochirurgie</option>
                <option value="Chirurgie pédiatrique">Chirurgie pédiatrique</option>
                <option value="Chirurgie gynéco-obstétrique">Chirurgie gynéco-obstétrique</option>
                <option value="Chirurgie carcinologique (cancers)">Chirurgie carcinologique (cancers)</option>
                <option value="Chirurgie endoscopique">Chirurgie endoscopique</option>
                <option value="Chirurgie cœlioscopique">Chirurgie cœlioscopique (laparoscopie)</option>
                <option value="Électrophysiologie cardiaque">Électrophysiologie cardiaque</option>
              </optgroup>

              <optgroup label="Maternité & Obstétrique">
                <option value="Suivi de grossesse">Suivi de grossesse</option>
                <option value="Accouchement">Accouchement</option>
                <option value="Césarienne">Césarienne</option>
              </optgroup>

              <optgroup label="Autres services">
                <option value="Urgences">Urgences</option>
                <option value="Hospitalisation">Hospitalisation</option>
                <option value="Coaching nutritionnel">Coaching nutritionnel</option>
                <option value="Soins esthétiques (non chirurgicaux)">Soins esthétiques (non chirurgicaux)</option>
                <option value="Médecine esthétique (injections, peelings)">Médecine esthétique (injections, peelings)</option>
                <option value="Rééducation / Kinésithérapie">Rééducation / Kinésithérapie</option>
                <option value="Autre">Autre (préciser dans le message)</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label htmlFor="devis-typeChambre" className="block text-sm font-medium text-gray-700 mb-1">Type de chambre souhaité</label>
            <select id="devis-typeChambre" name="typeChambre" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition bg-white">
              <option value="">Pas de préférence</option>
              <option value="Individuelle">Chambre Individuelle</option>
              <option value="Confort">Chambre Confort</option>
              <option value="VIP">Suite / VIP</option>
            </select>
          </div>
          <div>
            <label htmlFor="devis-message" className="block text-sm font-medium text-gray-700 mb-1">Décrivez votre besoin médical *</label>
            <textarea
              id="devis-message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition resize-none"
              placeholder="Décrivez votre pathologie, l'intervention souhaitée, vos antécédents médicaux pertinents..."
            />
          </div>
          <div>
            <label htmlFor="devis-date" className="block text-sm font-medium text-gray-700 mb-1">Date souhaitée (approximative)</label>
            <input id="devis-date" name="date" type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition" />
          </div>
          <div>
            <label htmlFor="devis-fichiers" className="block text-sm font-medium text-gray-700 mb-1">Documents médicaux (rapports, radios, ordonnances...)</label>
            <input
              id="devis-fichiers"
              name="fichiers"
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.dicom,.dcm"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-green focus:border-transparent transition text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-clinic-green hover:file:bg-green-100 file:cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG, DOC, DICOM — Max 10 Mo par fichier</p>
          </div>
        </div>
      </div>

      {/* Consentement */}
      <div className="bg-gray-50 rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required className="mt-1 w-4 h-4 text-clinic-green border-gray-300 rounded focus:ring-clinic-green" />
          <span className="text-sm text-gray-600">
            J&apos;accepte que mes données personnelles soient traitées par la Clinique Pasteur Tunis dans le cadre de ma demande de devis. Mes données sont confidentielles et ne seront jamais partagées avec des tiers. *
          </span>
        </label>
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full text-lg justify-center">
        {loading ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send className="w-5 h-5 mr-2" /> Envoyer ma Demande de Devis</>
        )}
      </button>
    </form>
  )
}
