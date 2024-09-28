import React from "react";
import { strings } from "@/constants/strings";
import Firstoption from "@/components/root/InfoCards/infoCards/Firstoption";
import { Optionsinfo } from "@/constants/arrays";

export default function page() {
  return <Firstoption title={strings.options.heading} cards={Optionsinfo} />;
}
