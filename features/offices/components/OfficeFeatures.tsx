import Image from "next/image";

const FEATURES_MAP = [
  {
    label: "Global Event",
    description: "Startup Contest",
    icon: "/assets/images/icons/cup.svg"
  },
  {
    label: "Privacy",
    description: "For Yourself",
    icon: "/assets/images/icons/security-user.svg"
  },
  {
    label: "Sustainability",
    description: "Long-term Goals",
    icon: "/assets/images/icons/home-trend-up.svg"
  },
  {
    label: "Extra Snacks",
    description: "Work-Life Balance",
    icon: "/assets/images/icons/coffee.svg"
  },
  {
    label: "Compact",
    description: "Good for Focus",
    icon: "/assets/images/icons/3dcube.svg"
  },
  {
    label: "Free Move",
    description: "Anytime 24/7",
    icon: "/assets/images/icons/group.svg"
  }
];

export default function OfficeFeatures({ features }: { features: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
      {features.map((feature) => {
        const featureData = FEATURES_MAP.find((f) => f.label === feature);
        if (!featureData) return null;

        return (
          <div className="flex items-center gap-4" key={feature}>
            <Image
              src={featureData.icon}
              className="w-[34px] h-[34px]"
              alt={featureData.label}
              width={34}
              height={34}
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg leading-[24px]">{featureData.label}</p>
              <p className="text-sm leading-[21px]">{featureData.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}