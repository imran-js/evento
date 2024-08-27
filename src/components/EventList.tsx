import { TEventProps } from "@/lib/types";
import React from "react";
import EventCard from "./eventCard";
import { getEvents } from "@/utils/utils";
import PaginationControls from "./paginationControls";

interface Props {
  city: string;
  page?: number;
}

async function EventList({ city, page }: Props) {
  const { events, PageCount } = await getEvents(city, page);

  const PrevPath = page && page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const NextPath =
    page && PageCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
      <PaginationControls PrevPath={PrevPath} NextPath={NextPath} />
    </section>
  );
}

export default EventList;
