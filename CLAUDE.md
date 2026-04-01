# Site Clinique Pasteur Tunis

## Contexte
Site web professionnel pour la Clinique Pasteur de Tunis, clinique pluridisciplinaire au Centre Urbain Nord.
Client : la direction de la clinique via Imed.

## Stack technique
- **Framework** : Next.js 14 (App Router, SSG)
- **CSS** : Tailwind CSS v4 avec @tailwindcss/postcss
- **Langage** : TypeScript
- **Icons** : lucide-react
- **Fonts** : next/font (Inter + Playfair Display)
- **Chatbot IA** : AI SDK + Claude Haiku 4.5 (concierge informatif)
- **Images** : locales dans public/images/ (photos clinique + stock)

## Déploiement
- **URL** : https://pasteur.imedhh.com
- **Port** : 3010
- **Service** : systemctl clinique-pasteur.service (EnvironmentFile .env)
- **Reverse proxy** : Caddy (SSL auto + gzip/zstd)
- **DNS** : pasteur.imedhh.com → 46.225.213.126 (OVH)
- **GitHub** : https://github.com/imedhh/clinique-pasteur

## Commandes
```bash
npm run build                        # Build SSG (93 pages)
npm run dev                          # Dev server
systemctl restart clinique-pasteur   # Redémarrer en prod
systemctl daemon-reload              # Après modif du .service
```

## Architecture des données
- `src/lib/data.ts` : données principales (clinicInfo, chirurgies, centres, niveaux, explorations)
- `src/lib/examens-*.ts` : données détaillées pour chaque examen (5 fichiers)
- `src/lib/examens-index.ts` : index central (examsByExploration + examsByCentre)
- `src/lib/chatbot-system.ts` : system prompt du chatbot IA

## Structure des pages (93 pages)
- `/` : Accueil (hero logo + photo, services rapides, explorations, chirurgies, pôles, hospitalisation, centres, CTA, FAQ)
- `/la-clinique` : Présentation + infrastructure 8 niveaux + points forts
- `/chirurgies` : Liste des 14 chirurgies
- `/chirurgies/[slug]` : Détail chirurgie (prestations, équipements, avantages)
- `/explorations` : Liste des 3 explorations (cardiaques, neurophysio, urodynamiques)
- `/explorations/[slug]` : Détail exploration avec examens cliquables
- `/explorations/[slug]/[exam]` : Page détaillée d'un examen
- `/centres` : Liste des 8 centres
- `/centres/[slug]` : Détail centre avec services cliquables (radiologie, endoscopie)
- `/centres/[slug]/[exam]` : Page détaillée d'un examen de centre
- `/hospitalisation` : Types de chambres + maternité
- `/devis` : Formulaire complet de demande de devis
- `/contact` : Infos, carte, formulaire
- `/api/chat` : API route chatbot IA

## Structure du bâtiment (validée par le client)
- 7ème : 6 salles d'op + réanimation post chirurgie cardiaque (11 lits)
- 6ème : 4 salles d'op + réanimation polyvalente (13 lits)
- 5ème : cathétérisme + USIC (8 lits) + chambres hospitalisation
- 4ème-1er : chambres d'hospitalisation uniquement
- Mezzanine : 2 box accouchement + salle césarienne + chambres
- RDC : urgences + explorations cardiaques + radiologie
- -1 : neurophysiologie + urodynamique + endoscopie
- -2 : hôpital de jour

## RÈGLES STRICTES
- **AUCUN CHIFFRE** sur le site (pas de nombre de chambres, blocs, spécialités, lits, cabinets)
- **PAS d'ophtalmologie** — service supprimé de la clinique
- **PAS de laboratoire** — loué à un prestataire, ne fait pas partie de la clinique
- **Champs opératoires BLEUS** jetables uniquement (JAMAIS verts)
- **Images = contexte** — chaque image doit correspondre au titre de la section
- **Logo officiel** : public/images/logo-fr.png (extrait du .ai, version française uniquement)
- **Menu mobile** : overlay plein écran rendu HORS du header sticky, avec accordéons
- **Chatbot IA** : concierge informatif UNIQUEMENT — PAS de diagnostic, PAS de prix/devis, PAS d'avis médical
- Toujours `npm run build && systemctl restart clinique-pasteur` après modification
- Git push automatique après chaque commit
