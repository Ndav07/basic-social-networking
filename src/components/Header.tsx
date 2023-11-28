interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="absolute left-0 top-0 z-20 inline-flex w-full items-center justify-center bg-white/30 bg-opacity-50 py-3.5 pl-[129px] pr-32 backdrop-blur-sm">
      <div className="inline-flex items-center justify-center rounded-[9px] bg-zinc-800 bg-opacity-40 px-12 pb-3 pt-2">
        <p className="font-['Be Vietnam'] text-center text-base font-normal leading-[18px] text-white">
          {title}
        </p>
      </div>
    </div>
  );
}
