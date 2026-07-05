import { clinicInfo } from '@/lib/data';

/**
 * Vrais logos officiels des réseaux (couleurs de marque).
 * size="sm" pour le footer (w-10), size="md" pour les sections claires (w-12).
 */
export default function SocialLinks({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'w-10 h-10' : 'w-12 h-12';
  const icon = size === 'sm' ? 'w-6 h-6' : 'w-7 h-7';
  const wrap =
    `${box} rounded-full bg-white shadow-md ring-1 ring-black/5 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-transform`;

  return (
    <div className="flex gap-4">
      {/* Facebook */}
      <a href={clinicInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={wrap}>
        <svg viewBox="0 0 24 24" className={icon} aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#1877F2" />
          <path
            fill="#fff"
            d="M16.67 15.47l.53-3.44h-3.3V9.79c0-.94.46-1.86 1.94-1.86h1.5V5a18.3 18.3 0 0 0-2.67-.23c-2.72 0-4.5 1.65-4.5 4.64v2.62H7v3.44h3.17V24a12.6 12.6 0 0 0 3.9 0v-8.53h2.6Z"
          />
        </svg>
      </a>

      {/* Instagram */}
      <a href={clinicInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={wrap}>
        <svg viewBox="0 0 24 24" className={icon} fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="ig-gradient" cx="30%" cy="107%" r="130%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="8%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="24" height="24" rx="7" fill="url(#ig-gradient)" />
          <rect x="5.6" y="5.6" width="12.8" height="12.8" rx="4" fill="none" stroke="#fff" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.7" />
          <circle cx="16" cy="8" r="1.05" fill="#fff" />
        </svg>
      </a>

      {/* YouTube */}
      <a href={clinicInfo.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={wrap}>
        <svg viewBox="0 0 24 24" className={icon} aria-hidden="true">
          <path
            fill="#FF0000"
            d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8Z"
          />
          <path fill="#fff" d="M9.6 15.6V8.4l6.2 3.6Z" />
        </svg>
      </a>
    </div>
  );
}
