import { CloseSVG } from "../Input/close.jsx";
import { Img, Heading, Input } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex sm:flex-col justify-between items-center w-full gap-5`}>
      <Img src="images/img_header_logo.svg" alt="Header Logo" className="h-[50px] w-[50px] object-contain" />
      <div className="flex w-[28%] items-center justify-center sm:w-full sm:flex-col">
        <Input
          name="Search Field"
          placeholder={`Recherche...`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          prefix={<Img src="images/img_search.svg" alt="Search" className="h-[38px] w-[36px]" />}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={38} width={36} fillColor="#2d3748ff" />
            ) : null
          }
          className="flex h-[40px] flex-grow items-center justify-center gap-4 rounded-[14px] border-[0.5px] border-solid border-gray-300 bg-white-a700 pr-3 text-[12px] text-gray-500"
        />
        <div className="ml-[18px] flex items-center gap-1 sm:ml-0">
          <Img src="images/img_ionicon_p_person_default.svg" alt="Profile Icon" className="h-[12px] w-[12px]" />
          <Heading size="headings" as="p" className="!text-white-a700">
            Sign out
          </Heading>
        </div>
        <Img
          src="images/img_ionicon_s_settings_sharp.svg"
          alt="Settings Icon"
          className="ml-2.5 h-[12px] w-[12px] sm:ml-0 sm:w-full"
        />
        <Img
          src="images/img_ionicon_n_notif.svg"
          alt="Notifications Icon"
          className="ml-4 h-[12px] w-[12px] sm:ml-0 sm:w-full"
        />
      </div>
    </header>
  );
}
