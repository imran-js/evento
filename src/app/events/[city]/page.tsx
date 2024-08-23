import EventList from "@/components/EventList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/utils/utils";
import { Metadata } from "next";

type TEventsPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({
  params: { city },
}: TEventsPageProps): Metadata {
  const EventCity = capitalize(city);
  return {
    title: EventCity === "All" ? "All Events" : `Events In ${EventCity} `,
  };
}

async function EventsPage({ params: { city } }: TEventsPageProps) {
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {" "}
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in  ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
