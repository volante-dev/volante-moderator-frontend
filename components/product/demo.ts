export const demoPost = {
  caption: 'Un nouvel espace pour créer, au rythme du quotidien.',
  account: 'tournesol', name: 'Tournesol', time: '09:00',
  publications: 128, followers: '12,4 k', following: 642,
} as const;

export type JourneyPhase = 'ready' | 'uploading' | 'draft' | 'scheduling' | 'scheduled' | 'arranging' | 'publishing' | 'published';
export const phaseLabels: Record<JourneyPhase, string> = {
  ready: 'Une idée, puis une image.', uploading: 'L’image rejoint le brouillon.', draft: 'Le brouillon est prêt.',
  scheduling: 'Une place dans votre journée.', scheduled: 'Programmé aujourd’hui à 09:00.',
  arranging: 'Le fil fait de la place.', publishing: 'Votre publication rejoint le fil.', published: 'Votre idée a trouvé sa place.',
};
export function journeyPhase(progress: number): JourneyPhase {
  if (progress < .05) return 'ready';
  if (progress < .24) return 'uploading';
  if (progress < .34) return 'draft';
  if (progress < .47) return 'scheduling';
  if (progress < .62) return 'scheduled';
  if (progress < .72) return 'arranging';
  if (progress < .90) return 'publishing';
  return 'published';
}
const DAY = 86_400_000;
export function buildCalendar(isoDate: string) {
  const today = new Date(`${isoDate}T12:00:00Z`);
  const year = today.getUTCFullYear(), month = today.getUTCMonth();
  const first = new Date(Date.UTC(year, month, 1, 12));
  const offset = (first.getUTCDay() + 6) % 7;
  const count = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const rows = Math.ceil((offset + count) / 7);
  const captions = ['Lumière d’atelier', 'Les matières', 'Une pause', 'Détails du jour', 'En coulisses', 'Nouveaux regards', 'Au naturel'];
  return {
    label: new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(today), rows,
    days: Array.from({ length: rows * 7 }, (_, index) => {
      const date = new Date(first.getTime() + (index - offset) * DAY);
      const iso = date.toISOString().slice(0, 10);
      const day = date.getUTCDate(), outside = date.getUTCMonth() !== month;
      return { iso, day, outside, selected: iso === isoDate,
        post: !outside && iso !== isoDate && day % 4 === 2 ? { tile: Math.floor(day / 4) % 9, caption: captions[Math.floor(day / 4) % captions.length], time: day % 3 === 0 ? '18:30' : '10:00' } : null,
      };
    }),
  };
}
