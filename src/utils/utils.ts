import prisma from "@/lib/db";

import { notFound } from "next/navigation";

/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

export const replaceDashesWithSpace = (str: string) => str.replace(/-/g, " ");

export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const getEvents = async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let PageCount;
  if (city === "all") {
    PageCount = await prisma.eventoEvent.count();
  } else {
    PageCount = await prisma.eventoEvent.count({
      where: { city },
    });
  }

  if (!events) {
    return notFound();
  }

  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );

  // const events: TEventProps[] = await response.json();
  return { events, PageCount };
};

export const getEvent = async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    return notFound();
  }

  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const event: TEventProps = await response.json();

  return event;
};
