import { TEventProps } from "@/lib/types";
import React from "react";
import EventCard from "./eventCard";
import { getEvents } from "@/utils/utils";

interface Props {
  city: string;
}

async function EventList({ city }: Props) {
  const events = await getEvents(city);

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </section>
  );
}

export default EventList;
