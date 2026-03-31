# Site Clinique Pasteur Tunis

## Contexte
Site web professionnel pour la Clinique Pasteur de Tunis, clinique pluridisciplinaire au Centre Urbain Nord.
Client : la direction de la clinique via Imed.

## Stack technique
- **Framework** : Next.js 14 (App Router, SSG)
- **CSS** : Tailwind CSS v4 avec @tailwindcss/postcss
- **Langage** : TypeScript
- **Icons** : lucide-react
- **Images** : locales dans public/images/ (téléchargées depuis le site actuel + stock photos)

## Déploiement
- **URL** : https://pasteur.imedhh.com
- **Port** : 3010
- **Service** : systemd clinique-pasteur.service
- **Reverse proxy** : Caddy (SSL auto Let's Encrypt)
- **DNS** : pasteur.imedhh.com → 46.225.213.126 (OVH)
- **GitHub** : https://github.com/imedhh/clinique-pasteur

## Commandes
```bash
npm run build    # Build SSG (115 pages)
npm run dev      # Dev server
systemctl restart clinique-pasteur  # Redémarrer en prod
```

## Architecture des données
- `src/lib/data.ts` : données principales (clinicInfo, chirurgies, centres, niveaux, explorations)
- `src/lib/examens-*.ts` : données détaillées pour chaque examen (7 fichiers)
- `src/lib/examens-index.ts` : index central qui regroupe tout

## Structure des pages
- `/` : Accueil (hero images, stats, explorations, chirurgies, pôles, hospitalisation, centres, CTA, FAQ)
- `/la-clinique` : Présentation + infrastructure 11 niveaux
- `/chirurgies` : Liste des 14 chirurgies
- `/chirurgies/[slug]` : Détail chirurgie (prestations, équipements, avantages)
- `/explorations` : Liste des 4 explorations
- `/explorations/[slug]` : Détail exploration avec services cliquables
- `/explorations/[slug]/[exam]` : Page détaillée d'un examen (description, indications, préparation, déroulement, durée, résultats, risques)
- `/centres` : Liste des 9 centres
- `/centres/[slug]` : Détail centre avec services cliquables (radiologie, endoscopie, labo)
- `/centres/[slug]/[exam]` : Page détaillée d'un examen de centre
- `/hospitalisation` : Types de chambres + maternité
- `/devis` : Formulaire complet de demande de devis
- `/contact` : Infos, carte, formulaire

## Règles
- Images de bloc opératoire : utiliser des champs BLEUS jetables (pas verts)
- Menu mobile : overlay plein écran avec accordéons, rendu HORS du header sticky
- Toujours rebuild + systemctl restart après modification
- Git push après chaque commit
