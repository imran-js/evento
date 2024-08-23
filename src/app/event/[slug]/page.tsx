import H1 from "@/components/H1";
import { TEventProps } from "@/lib/types";
import Image from "next/image";

type TevetProps = {
  params: {
    slug: string;
  };
};

async function EventPage({ params: { slug } }: TevetProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event: TEventProps = await response.json();

  return (
    <main>
      <section className=" flex justify-center items-center  z-0 relative overflow-hidden lg:h-[361px]">
        <Image
          className="object-cover blur-3xl"
          src={event.imageUrl}
          alt="event Image"
          fill
          quality={50}
          priority
          sizes="(max-width: 1280px) 100vw , 1280px"
        />

        <div className="flex flex-col lg:flex-row  gap-6 lg:gap-16 z-1 relative">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt="event Image"
            width={300}
            height={201}
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1
              className="mb-2 mt-1 whitespace-nowrap lg:text-5xl"
              children={event.name}
            />
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized By <span className="italic">{event.organizerName}</span>
            </p>
            <button className=" state-effects bg-blur bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16 ">
        <section>
          <h2 className="text-2xl mb-2">About Event</h2>
          <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
            {" "}
            {event.description}
          </p>
        </section>
        <section>
          <section className="mt-12">
            <h2 className="text-2xl mb-2">Event Location </h2>
            <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
              {" "}
              {event.location}
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}

export default EventPage;
