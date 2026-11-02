import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "Ihsan Park Central Master Silicon Valley Star Class",
    slug: "ihsan-park-central-master-silicon-valley-star-class",
    price: 18560000,
    duration: "20 days",
    location: "Jakarta Pusat",
    rating: 4.5,
    address:
      "Jl. Jend. Sudirman No.Kav. 52-53, RT.5/RW.3, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220",
    image: ["assets/images/thumbnails/thumbnail-details-1.png"],
    images: [
      "assets/images/thumbnails/thumbnail-details-2.png",
      "assets/images/thumbnails/thumbnail-details-3.png",
    ],
    tags: ["Private Office", "Meeting Room", "Coworking Space"],
    features: [
      "Privacy",
      "Global Event",
      "Sustainability",
      "Extra Snacks",
      "Compact",
      "Free Move",
    ],
    about:
      "Ihsan Park Central Master Silicon Valley Star Class is a premium office space located in the heart of Jakarta Pusat. It offers a modern and professional environment for businesses of all sizes. With state-of-the-art facilities and amenities, it is designed to meet the needs of today's dynamic workforce.",
    isFullyBooked: false,
    salesContact: [
      {
        name: "Masayoshi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
            {
        name: "Fuji Ovina",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
  },
   {
    id: 2,
    title: "Ihsan Private Class Office Surabaya",
    slug: "ihsan-private-class-office-surabaya",
    price: 11560000,
    duration: "20 days",
    location: "Surabaya",
    rating: 4.8,
    address:
      "Jl. Jend. Sudirman No.Kav. 52-53, RT.5/RW.3, Kecamatan Surabaya, Kota Surabaya, Jawa Timur 10320",
    image: ["assets/images/thumbnails/thumbnail-details-1.png"],
    images: [
      "assets/images/thumbnails/thumbnail-details-2.png",
      "assets/images/thumbnails/thumbnail-details-3.png",
    ],
    tags: ["Private Office", "Meeting Room", "Coworking Space"],
    features: [
      "Privacy",
      "Global Event",
      "Sustainability",
      "Extra Snacks",
      "Compact",
      "Free Move",
    ],
    about:
      "Ihsan Park Central Master Silicon Valley Star Class is a premium office space located in the heart of Jakarta Pusat. It offers a modern and professional environment for businesses of all sizes. With state-of-the-art facilities and amenities, it is designed to meet the needs of today's dynamic workforce.",
    isFullyBooked: false,
    salesContact: [
      {
        name: "Ihsan",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
            {
        name: "Ayana Shahab",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
  },
];
