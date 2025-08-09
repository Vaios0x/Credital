type Props = { width?: number | string; height?: number | string; radius?: number }

export function Skeleton({ width = '100%', height = 16, radius = 8 }: Props) {
  return <div className="skeleton" style={{ width, height, borderRadius: radius }} />
}

export default Skeleton


