import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { FileText } from "lucide-react";

export default function Rules() {
  //   const rules = [
  //     { name: "ByLaws - 2009", link: "/" },
  //     { name: "CC&R's - 1994", link: "/" },
  //     { name: "2024 Rules & Regulations", link: "/" },
  //     { name: "2024 Schedule of Fines and Late Fees", link: "/" },
  //   ];

  const rules = [
    {
      name: "Rules",
      documents: [
        { name: "ByLaws - 2009", link: "/" },
        { name: "CC&R's - 1994", link: "/" },
        { name: "2024 Rules & Regulations", link: "/" },
        { name: "2024 Schedule of Fines and Late Fees", link: "/" },
      ],
    },
    {
      name: "For New Construction",
      documents: [
        { name: "New Home Construction Guidelines", link: "/" },
        { name: "Design Committee Construction Site Agreement", link: "/" },
      ],
    },
    {
      name: "For Property Modification",
      documents: [
        {
          name: "Owners Property Modification Agreement & Guidelines",
          link: "",
        },
        { name: "Owner Design Committee Application", link: "" },
      ],
    },
  ];
  return (
    <MaxWidthWrapper>
      <div className="py-20">
        <h1 className="text-5xl">Rules and Regulations</h1>
      </div>
      <div className="py-10 flex flex-col gap-2">
        {rules.map((document) => (
          <div>
            <h3 className="text-xl font-bold">{document.documents[0].name}</h3>
            {document.documents.map((thing) => (
              <div className="flex items-center gap-2 underline text-blue-600 hover:text-blue-800">
                <Link href={thing.link}>{thing.name}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
