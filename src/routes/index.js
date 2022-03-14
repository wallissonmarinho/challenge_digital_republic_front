import React, { Suspense } from "react";
import { Router } from "@reach/router";
import Main from "../views/Main";
import Inicio from "../views/Inicio";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Suspense fallback={<div>carregando...</div>}>
    <Router>
      <Main path="/">
      </Main>
    </Router>
  </Suspense>
);
