import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="py-20">
        <div className="py-10">
          <h1 className="text-5xl">Welcome to Knolls Estates</h1>
          <p className="pt-5 text-lg">PO Box 1498, Sutherlin OR 97479</p>
        </div>
        <div className="py-20">
          <div>
            <h4 className="font-bold text-lg underline underline-offset-2 decoration-green-800">
              Next board meeting
            </h4>
            <p>
              January 15, 2025 6:00pm <span className="font-bold">at</span> 2092
              Culver Loop Sutherlin, OR 97479
            </p>
          </div>
          <h3 className="pt-5 text-3xl ">About Knolls Estates</h3>
          <p className="pt-2">
            Knolls Estates was incorporated in 1994. Building began in 1998. The
            community is designed to accommodate single family owner occupant
            dwellings and lot sizes range from 1/5 to 1/4 of an acre. Common
            areas flow through the subdivision to provide ample space for
            biking, walking and recreation. The Homeowners Association was
            granted control of the subdivision in 2006, and Knolls Estates has a
            very active group of owners. There are a total of 161 building sites
            in Knolls Estates and homes have been built on approximately 70% of
            these lots. The community is a diverse mixture of young families,
            retirees, and single professionals, all of whom have found this to
            be a safe and friendly place to call home. Knolls Estates enjoys
            convenient access to Interstate 5 and the cities of Sutherlin,
            Roseburg and Eugene Oregon. We are one hour from the Pacific Ocean,
            nestled in a valley between the Cascade and Coastal Mountain Ranges.
            The topography consists of rolling, green hills and views of
            mountains covered with Oak and Pine. Knolls Estates borders the
            Umpqua Golf Resort and about half of the homes are golf course lots.
            For those who do not play golf, the course provides a beautiful
            backdrop for a home. Wildlife is abundant. It is common to see a row
            of quail walking down the street, hummingbirds feeding on your
            flowers and finches at your birdbath. We are in close proximity to a
            number of National, County and State parks, so fishing, hunting,
            camping and hiking opportunities abound. We also are home to
            multiple vegetable and berry farms and local wineries, with prize
            winning vintages.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 py-20">
          <div className="relative h-56">
            <Image
              src="/entrance.jpg"
              fill={true}
              alt="Knolls Estate Entrance"
              sizes="50vw"
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="">
            <h4 className="text-xl">Other Knolls Estates Information</h4>
            <Link
              href="/"
              className="underline text-blue-600 hover:text-blue-800 block"
            >
              Disaster preperation information
            </Link>
            <Link
              href="/"
              className="underline text-blue-600 hover:text-blue-800 block"
            >
              Community newsletter
            </Link>
            <Link
              href="/"
              className="underline text-blue-600 hover:text-blue-800 block"
            >
              2024 Due's increase
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
