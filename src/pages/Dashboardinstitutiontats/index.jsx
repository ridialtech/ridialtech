import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";
import Header from "../../components/Header";
import DiplomaStatusSection from "./DiplomaStatusSection";
import React from "react";

export default function DashboardinstitutiontatsPage() {
  return (
    <>
      <Helmet>
        <title>Institution Dashboard - Overview of Submission States</title>
        <meta
          name="description"
          content="Access the Institution Dashboard to view the current states of diploma submissions, manage publications, and export data. Stay updated with the latest submission statuses and manage your educational institution's information efficiently."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[46px] bg-gray-50">
        <div>
          <div className="flex flex-col items-center">
            <div className="self-stretch bg-teal-600">
              <div className="flex h-[300px] items-start justify-center bg-[url(/public/images/img_group_1.png)] bg-cover bg-no-repeat py-3.5 lg:h-auto md:h-auto">
                <div className="container-xs mb-[222px] flex justify-center lg:px-5 md:px-5">
                  <Header />
                </div>
              </div>
            </div>
            <div className="container-xs relative mt-[-56px] lg:px-5 md:px-5">
              <div className="rounded-[14px] border-[1.5px] border-solid border-white-a700 bg-gradient p-2.5 shadow-xs">
                <div className="mt-1 flex items-start md:flex-col">
                  <div className="flex w-[48%] items-start gap-[17px] self-center px-3.5 md:w-full sm:flex-col">
                    <div className="relative h-[84px] w-[12%] self-center sm:w-full">
                      <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-1 h-max flex-1 rounded-[12px] bg-white-a700 lg:mr-0 md:mr-0">
                        <Img
                          src="images/img_credits_to_unsplash_com.png"
                          alt="Credits Image"
                          className="h-[80px] w-full rounded-[12px] object-cover lg:h-auto md:h-auto"
                        />
                      </div>
                      <div className="absolute bottom-[-1.50px] right-[1.40px] m-auto flex rounded-lg bg-white-a700 p-2 shadow-md">
                        <Img src="images/img_edit.svg" alt="Edit Icon" className="h-[8px]" />
                      </div>
                    </div>
                    <Heading size="headinglg" as="h1" className="mt-[26px] sm:mt-0">
                      MINISTÈRE DE L’ENSEIGNEMENT SUPÉRIEUR
                    </Heading>
                  </div>
                  <div className="mt-[22px] flex flex-1 md:flex-col md:self-stretch">
                    <div className="flex-1 p-1 md:self-stretch">
                      <div>
                        <div className="flex flex-col items-end justify-center gap-1">
                          <div className="flex items-center justify-end self-stretch">
                            <Img src="images/img_inbox.svg" alt="Inbox Image" className="h-[8px] w-[8px]" />
                            <Heading size="headingxs" as="h2" className="uppercase">
                              INFORMATIONS GÉNÉRALES
                            </Heading>
                          </div>
                          <Img
                            src="images/img_minwidth.png"
                            alt="Min Width Image"
                            className="mr-16 h-px object-cover md:mr-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-5 flex w-[20%] flex-col items-center justify-center gap-1 rounded-[12px] bg-white-a700 p-1 md:ml-0 md:w-full">
                      <div className="flex items-center justify-center gap-1 self-stretch">
                        <Img src="images/img_settings.svg" alt="Settings Icon" className="h-[10px] w-[10px]" />
                        <Heading size="headingxs" as="h3" className="!text-teal-600">
                          ÉTATS DES SOUMISSIONS
                        </Heading>
                      </div>
                      <Img src="images/img_minwidth.png" alt="Min Width Icon" className="h-px object-cover" />
                    </div>
                    <div className="flex w-[26%] justify-center p-1 md:w-full">
                      <div className="w-full">
                        <div className="flex flex-col items-end justify-center gap-1">
                          <div className="flex items-center justify-center self-stretch">
                            <Img src="images/img_signal.svg" alt="Signal Icon" className="h-[8px]" />
                            <Heading size="headingxs" as="h4" className="uppercase">
                              Publier diplôme / attestation
                            </Heading>
                          </div>
                          <Img
                            src="images/img_minwidth.png"
                            alt="Min Width Signal"
                            className="mr-[78px] h-px object-cover md:mr-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* diploma status section */}
        <DiplomaStatusSection />
      </div>
    </>
  );
}
