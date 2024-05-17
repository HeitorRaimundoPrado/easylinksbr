import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Oval
        height={50}
        width={50}
        color="#3777FF"
        visible={true}
        secondaryColor="#3777FF"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  )
}
