import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-3">
        <Workflow
          description="It is a test"
          id="efew343dqd"
          name="Automation Workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
