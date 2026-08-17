import Image from 'next/image';

export default function UserAvatar() {
  return (
    <>
      <Image
        src="/images/logo.png"
        width={28}
        height={28}
        alt=""
        aria-hidden
        className="size-7 shrink-0 transition-transform duration-200 group-hover:-rotate-6"
      />
      <span className="font-heading text-lg font-semibold tracking-tight xs:text-xl">
        Transcribe
      </span>
    </>
  );
}
