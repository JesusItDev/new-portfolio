import { silkScreen } from "../app/layout";
import { MdClose, MdMinimize, MdOutlineSquare } from "react-icons/md";
import CodeLineRetriever from "@/components/CodeLineRetriever";

const Terminal = () => {
  return (
    <div>
      <div className="h-[25px] bg-[#666666] mx-auto my-0 rounded-t-[5px] box-border w-3/4 flex items-end">
        <div
          className={`h-[23px] bg-[#202124] rounded-t-[5px] w-[150px] ml-1 ${silkScreen.variable}`}
        >
          <p className="font-terminal! text-[10px] ml-1">Command Prompt</p>
        </div>
        <div className="flex flex-row ml-auto mr-1 gap-1 mb-1">
          <div>
            <MdMinimize />
          </div>
          <div>
            <MdOutlineSquare />
          </div>
          <div>
            <MdClose />
          </div>
        </div>
      </div>
      <div
        className={`container mx-auto flex bg-[#202124] h-auto w-3/4 ${silkScreen.variable} mb-10`}
      >
        <div className="font-terminal ml-2 mt-.05 text-[8px]">
          <CodeLineRetriever />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
