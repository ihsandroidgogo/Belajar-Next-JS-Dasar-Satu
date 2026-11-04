import { officeSpaces } from "@/features/offices/data/officeSpaces.mock";
import { City } from "../types/city.types";

const cityNames = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Bali",
  "Medan",
  "Makassar",
  "Semarang",
  "Palembang",
  "Balikpapan",
];

export const cities: City[] = cityNames.map((name, i) => {
  const officeCount = officeSpaces.filter((office) =>
    office.location?.toLowerCase().includes(name.toLowerCase())
  ).length;

  return {
    id: i + 1,
    name,
    officeCount,
    image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
    slug: name.toLowerCase().replace(/ /g, "-"),
  };
});