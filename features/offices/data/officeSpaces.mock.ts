import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "GoWork Jakarta",
    slug: "gowork-jakarta",
    price: 18560000,
    duration: "20 days",
    location: "Jakarta Pusat",
    city: "Jakarta",
    rating: 4.5,
    address:
      "Jl. Jend. Sudirman No.Kav. 52-53, RT.5/RW.3, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    tags: ["Popular"],
    features: ["Privacy", "Global Event", "Sustainability", "Extra Snacks", "Compact", "Free Move"],
    about:
      "GoWork Jakarta is a premium office space located in the heart of Jakarta Pusat. It offers a modern and professional environment for businesses of all sizes, with state-of-the-art facilities designed to meet the needs of today's dynamic workforce.",
    isFullyBooked: true,
    salesContact: [
      { name: "Muhammad Ihsan", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
      { name: "Neno Balqis", role: "Sales Manager", photo: "/assets/images/photos/photo-2.png" },
    ],
  },
  {
    id: 2,
    title: "Ihsan Private Class Office Surabaya",
    slug: "ihsan-private-class-office-surabaya",
    price: 9560000,
    duration: "10 days",
    location: "Surabaya",
    city: "Surabaya",
    rating: 4.8,
    address:
      "Jl. Jend. Sudirman No.Kav. 52-53, RT.5/RW.3, Kecamatan Surabaya, Kota Surabaya, Jawa Timur 10320",
    image: "/assets/images/thumbnails/thumbnails-2.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-3.png",
      "/assets/images/thumbnails/thumbnail-details-1.png",
    ],
    tags: ["Best Price"],
    features: ["Global Event","Extra Snacks", "Compact"],
    about:
      "Ihsan Private Class Office Surabaya is a premium office space located in Surabaya. It offers a modern and professional environment for businesses of all sizes, with state-of-the-art facilities designed to meet the needs of today's dynamic workforce.",
    isFullyBooked: false,
    salesContact: [
      { name: "Ihsan", role: "Sales Manager", photo: "/assets/images/photos/photo-1.png" },
      { name: "Ayana Shahab", role: "Sales Manager", photo: "/assets/images/photos/photo-2.png" },
      { name: "Mona Nabilah", role: "Sales Manager", photo: "/assets/images/photos/photo-2.png" },
    ],
  },
];