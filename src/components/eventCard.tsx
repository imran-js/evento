import { TEventProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  event: TEventProps;
};

function EventCard({ event }: Props) {
  return (
    <Link
      className=" flex-1 basis-80 h-[380px] max-w-[500px]"
      href={`/event/${event.slug}`}
    >
      <section
        className=" w-full h-full relative flex flex-col 0 overflow-hidden  bg-white/[3%] rounded-xl
      hover:scale-105
      active:scale-[1.02] transition
    "
      >
        <Image
          className="h-[60%] object-fit"
          src={event.imageUrl}
          alt="event-image"
          width={500}
          height={280}
        />
        <div className="flex flex-1 flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50% mt-4">By {event.location}</p>
        </div>
        <section className=" flex flex-col justify-center items-center absolute left-[12px] top-[12px] bg-black/30 h-[45px] w-[45px] rounded-sm">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-sm uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}

export default EventCard;
