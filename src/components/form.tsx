import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "./ui/input";

export default function Form() {
  return (
    <div className="flex w-screen h-4/6 mt-80 md:mt-40 justify-center pb-32">
      <div className="flex flex-col w-[30rem] items-center">
        <h1 className="text-[23pt]">Book your trip to the
          <span className="text-[23pt] bg-clip-text text-transparent bg-gradient-to-b from-[#FBFBFB] to-[#FFFFFF00]"> Universe</span>
        </h1>
        <p className="text-[16pt] mt-5 ml-10">Write your email here and subscribe to our newsletter</p>
        <form className="mt-12 w-full">
          <Input className="bg-[#2D2D2D] h-12 pl-7 text-white" type="email" placeholder="email@domain.com" />
          <div className="flex mt-5 ml-7">
            <Checkbox className="border-2 border-[#434343]" />
            <label
              className="text-sm ml-2 text-[white] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree the terms and conditions
            </label>
          </div>
          <div className="flex mt-5 ml-7 mb-14">
            <Checkbox className="border-2 border-[#434343]" />
            <label
              className="text-sm ml-2 text-[white] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to receive updates and emails
            </label>
          </div>
          <div className="flex w-full justify-center">
            <button className="bg-[#282828] p-5 w-44 text-white border border=[#B3B3B3]">Start Now!</button>
          </div>
        </form>
      </div>
    </div>
  )
}
