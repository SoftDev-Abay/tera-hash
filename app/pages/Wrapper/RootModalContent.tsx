import React from "react";
import Link from "next/link";
import "./style.scss";
import Button from "@/app/components/Button/Button";

import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const RootModalContent = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return <div className="root-modal-content"></div>;
};

export default RootModalContent;
