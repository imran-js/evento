import EventList from "@/components/EventList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/utils/utils";
import { Metadata } from "next";
import { z } from "zod";

type TEventsPageProps = {
  params: {
    city: string;
  };
};

export type PaginationData = TEventsPageProps & {
  searchParams: { [key: string]: string | string[] | undefined };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export function generateMetadata({ params }: TEventsPageProps): Metadata {
  const { city } = params;

  const EventCity = capitalize(city);
  return {
    title: EventCity === "All" ? "All Events" : `Events In ${EventCity} `,
  };
}

async function EventsPage({ params, searchParams }: PaginationData) {
  const { city } = params;
  const ParsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!ParsedPage.success) {
    throw new Error("invalid Page Number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {" "}
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in  ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense key={city + ParsedPage.data} fallback={<Loading />}>
        <EventList city={city} page={ParsedPage.data} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
