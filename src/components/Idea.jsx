import Title from "./common/Title";

import { IoCreate } from "react-icons/io5";

function Idea() {
  return (
    <div className="px-6 sm:px-8 xl:px-20 w-full pt-15 lg:pt-25">
      <Title
        eyebrow={"WHY WE MADE THIS"}
        eyebrowIcon={<IoCreate />}
        heading={"The fridge is full. But, the ideas? Not so much."}
        description={
          " We built Recipe Planner to make that everyday “what should I cook?” question a little easier."
        }
      />
    </div>
  );
}

export default Idea;
