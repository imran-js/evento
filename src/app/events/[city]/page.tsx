import H1 from "@/components/H1";
import { TEventProps } from "@/lib/types";

type TEventsPageProps = {
  params: {
    city: string;
  };
};

async function EventsPage({ params: { city } }: TEventsPageProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const data: TEventProps[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {" "}
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in  ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      {data.map((event) => (
        <section key={event.id}>{event.city}</section>
      ))}
    </main>
  );
}

export default EventsPage;
