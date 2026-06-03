import Image from 'next/image'

export default function Logo({ className = '' }) {
  return (
    <Image
      src="/tamesh.svg"
      alt="Logo"
      width={50}
      height={50}
      className={className}
      priority
    />
  )
} 