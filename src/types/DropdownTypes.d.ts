import type { ReactNode } from "react";

type OPTIONS = {
  name: string;
  category: {
    Software: string;
    Graphical: string;
  };
  sections: {
    Design: string;
    Logic: string;
    Framework: string;
    DB: string;
  };
};

type Props = {
  options: OPTIONS;
  box?: string;
  fontawesomeIcon?: string;
  list?: string;
  subList?: string;
  icons?: ReactNode[];
};
