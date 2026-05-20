import { Text, Heading, Button, Img } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
  {
    authorRow: "Absa Diop",
    diplomaRow: "Licence ",
    statusRow: "Valider",
    submissionDateRow: "14/06/21",
    emailText: "Absa@simmmple.com",
    viewText: "Voir",
  },
  {
    authorRow: "Falmata Thiam",
    emailText: "Falmata@simmmple.com",
    diplomaRow: "Licence",
    statusRow: "Incomplet",
    submissionDateRow: "14/06/21",
    viewText: "Completer",
  },
  {
    authorRow: "Vincent Kouamé",
    emailText: "Vincent@simmmple.com",
    diplomaRow: "Master",
    statusRow: "Valider",
    submissionDateRow: "14/06/21",
    viewText: "Voir",
  },
  {
    authorRow: "Freduardo Hill",
    emailText: "freduardo@simmmple.com",
    diplomaRow: "Master",
    statusRow: "Refuser",
    submissionDateRow: "14/06/21",
    viewText: "Détails",
  },
  {
    authorRow: "Daniel Thomas",
    emailText: "daniel@simmmple.com",
    diplomaRow: "BTS",
    statusRow: "Incomplet",
    submissionDateRow: "14/06/21",
    viewText: "Completer",
  },
  {
    authorRow: "Mark Wilson",
    emailText: "mark@simmmple.com",
    diplomaRow: "Licence",
    statusRow: "Refuser",
    submissionDateRow: "14/06/21",
    viewText: "Détails",
  },
];

export default function DiplomaStatusSection() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("authorRow", {
        cell: (info) => (
          <div className="flex">
            <div className="flex w-[26%] items-center gap-3.5 lg:w-full md:w-full">
              <Img src="images/img_light_bulb.png" alt="Lightbulb Image" className="h-[40px] w-[40px] object-cover" />
              <div className="flex flex-1 flex-col items-start self-end">
                <Heading as="p">{info.getValue()}</Heading>
                <Text as="p">{info.row.original.emailText}</Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading size="headingxs" as="h5" className="mb-3 !text-gray-500">
              AUTHOR
            </Heading>
          </div>
        ),
        meta: { width: "738px" },
      }),
      tableColumnHelper.accessor("diplomaRow", {
        cell: (info) => (
          <div className="flex flex-col items-center">
            <Heading as="p" className="mb-3.5">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading size="headingxs" as="h6" className="mb-2.5 !text-gray-500">
              Dilpôme
            </Heading>
          </div>
        ),
        meta: { width: "52px" },
      }),
      tableColumnHelper.accessor("statusRow", {
        cell: (info) => (
          <div className="ml-52 flex">
            <Button className="flex h-[28px] min-w-[62px] flex-row items-center justify-center rounded-[5px] bg-green-600 px-2 text-center text-[13px] font-bold text-white-a700">
              {info.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="ml-52 flex px-3">
            <Heading size="headingxs" as="p" className="mb-3 !text-gray-500">
              STATUS
            </Heading>
          </div>
        ),
        meta: { width: "82px" },
      }),
      tableColumnHelper.accessor("submissionDateRow", {
        cell: (info) => (
          <div className="ml-[170px] flex flex-wrap items-center justify-between gap-5">
            <Heading as="p">{info.getValue()}</Heading>
            <Heading size="headings" as="p" className="mr-[72px] !text-gray-600">
              {info.row.original.viewText}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="ml-[170px] flex">
            <Heading size="headingxs" as="p" className="mb-3 !text-gray-500">
              Date de soumission
            </Heading>
          </div>
        ),
        meta: { width: "330px" },
      }),
    ];
  }, []);

  return (
    <>
      {/* diploma status section */}
      <div className="mb-1 flex justify-center">
        <div className="container-xs flex justify-center lg:px-5 md:px-5">
          <div className="flex w-full flex-col items-start">
            <div className="flex justify-end gap-5 self-stretch sm:flex-col">
              <div className="flex w-[10%] flex-col items-center justify-center gap-1 rounded-[5px] bg-white-a700 p-1 shadow-md sm:w-full">
                <div className="flex items-center justify-center gap-1 self-stretch">
                  <Img src="images/img_frame.svg" alt="Frame Image" className="h-[10px] w-[10px]" />
                  <Heading size="headingxs" as="h2" className="uppercase !text-black-900">
                    Soumettre des diplômes
                  </Heading>
                </div>
                <Img src="images/img_minwidth.png" alt="Min Width Image" className="h-px object-cover" />
              </div>
              <div className="flex w-[10%] flex-col items-center justify-center gap-1 rounded-[5px] bg-white-a700 p-1 shadow-md sm:w-full">
                <div className="flex items-center gap-1">
                  <Img src="images/img_thumbs_up.svg" alt="Thumbs Up Image" className="h-[10px]" />
                  <Heading size="headingxs" as="h3" className="uppercase !text-black-900">
                    exporter
                  </Heading>
                </div>
                <Img src="images/img_minwidth.png" alt="Min Width Image" className="h-px object-cover" />
              </div>
            </div>
            <div className="mt-[46px] self-stretch rounded-[14px] bg-white-a700 p-[22px] shadow-sm sm:p-4">
              <div className="mt-1 flex flex-col items-start gap-6">
                <Heading size="headinglg" as="h4">
                  États des diplômes
                </Heading>
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  className="self-stretch md:block md:overflow-x-auto md:whitespace-nowrap"
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
            </div>
            <Text size="textxs" as="p" className="mt-[100px] !text-gray-500">
              <span className="text-gray-500">@ 2024, Made with ❤️ by&nbsp;</span>
              <span className="font-bold text-teal-500">F</span>
              <span className="font-bold text-teal-500">IRNDE BI&nbsp;</span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
