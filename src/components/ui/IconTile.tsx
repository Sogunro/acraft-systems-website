import { cn } from '@/lib/utils';

// Accepts any icon component that takes className/strokeWidth — Lucide icons
// satisfy this, as do the looser ComponentType signatures used by page configs.
export type TileIcon = React.ComponentType<{ className?: string; strokeWidth?: string | number }>;

export type IconTileTone = 'neutral' | 'brand' | 'accent';

// The icon should nearly fill its tile — roughly a 3:5 icon-to-tile ratio.
// Anything smaller and the icon reads as lost in dead padding.
const sizes = {
  sm: { tile: 'h-12 w-12 rounded-xl', icon: 'h-7 w-7' },
  md: { tile: 'h-14 w-14 rounded-2xl', icon: 'h-9 w-9' },
} as const;

// Resting state stays quiet — a soft neutral tile with a dark icon. The colour
// only arrives on hover, which is what keeps a grid of these from reading as a
// wall of identical coloured chips.
const tones: Record<IconTileTone, string> = {
  neutral: 'bg-navy-50 text-navy-800 ring-line group-hover:bg-navy-900 group-hover:text-white group-hover:ring-navy-900',
  brand: 'bg-brand/[0.07] text-brand ring-brand/15 group-hover:bg-brand group-hover:text-white group-hover:ring-brand',
  accent: 'bg-accent/[0.08] text-accent ring-accent/20 group-hover:bg-accent group-hover:text-white group-hover:ring-accent',
};

/**
 * Icon in a rounded tile. Expects a `group` ancestor — the hover transition is
 * driven by the card around it, not by the tile itself, so hovering anywhere on
 * the card lights the icon.
 */
export function IconTile({
  icon: Icon,
  tone = 'neutral',
  size = 'md',
  filled = false,
  className,
}: {
  icon: TileIcon;
  tone?: IconTileTone;
  size?: keyof typeof sizes;
  /** Fills the glyph body with the current colour — reads heavier and more solid. */
  filled?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center ring-1 transition-colors duration-300 ease-out',
        sizes[size].tile,
        tones[tone],
        className,
      )}
    >
      <Icon
        className={cn(sizes[size].icon, filled && 'fill-current [&>*]:stroke-[1.5]')}
        strokeWidth={2.25}
      />
    </div>
  );
}
