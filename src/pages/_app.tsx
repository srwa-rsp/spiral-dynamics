import { MainLayout } from "./layouts/MainLayout";
import type { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import React, { ReactNode } from "react";
import "@/styles/globals.css";


const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout =
    Component.getLayout ||
    function (page: ReactNode) {
      return (
        <>
          <MainLayout>{page}</MainLayout>
        </>
      );
    };
  return getLayout(<Component {...pageProps} />);
};

export default App;
