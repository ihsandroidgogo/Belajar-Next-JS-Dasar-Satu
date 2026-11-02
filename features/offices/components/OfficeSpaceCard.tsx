import Image from "next/image";
import Link from "next/link";
import { OfficeSpace } from "../types/officeSpace.types";

export default function OfficeSpaceCard({ officeSpace }: { officeSpace: OfficeSpace }) {
  return (
    <Link href={`/office/${officeSpace.slug}`} className="card">
      <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
        <div className="thumbnail-container relative w-full h-[200px]">
          {officeSpace.tags.map((tag, index) => (
            <p
              key={`${tag}-${index}`}
              className="absolute top-5 left-5 z-10 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]"
            >
              {tag}
            </p>
          ))}

          <Image
            src={officeSpace.image[0]}
            alt={officeSpace.title}
            width={265}
            height={124}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
          <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
            {officeSpace.title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl leading-[30px]">
              Rp {officeSpace.price.toLocaleString("id-ID")}
            </p>
            <div className="flex items-center justify-end gap-[6px]">
              <p className="font-semibold">{officeSpace.duration}</p>
              <Image src="/assets/images/icons/clock.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-end gap-[6px]">
              <Image src="/assets/images/icons/location.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
              <p className="font-semibold">{officeSpace.location}</p>
            </div>
            <div className="flex items-center justify-end gap-[6px]">
              <p className="font-semibold">{officeSpace.rating}/5</p>
              <Image src="/assets/images/icons/Star 1.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-end gap-[6px]">
              <Image src="/assets/images/icons/wifi.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
              <p className="font-semibold">High Speed Wifi</p>
            </div>
            <div className="flex items-center justify-end gap-[6px]">
              <Image src="/assets/images/icons/security-user.svg" className="w-6 h-6" alt="icon" width={24} height={24} />
              <p className="font-semibold">100% Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}