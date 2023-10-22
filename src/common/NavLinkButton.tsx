import { NavLink } from "react-router-dom";

const Button: React.FC<{
    btName: string;
    btType: "bt-error" | "bt-success" | "bt-warning";
    btPath:string;
  }> = (props) => {
    const { btName,btPath, btType } = props;
    const bgColor =
      btType === "bt-error"
        ? "bg-red-500"
        : btType === "bt-success"
        ? "bg-green-500"
        : "bg-yellow-500";
  
        const btClass = `${bgColor} hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded`
    return (
      <NavLink
      to={btPath}
        className={btClass}
      >
        {btName}
      </NavLink>
    );
  };
  
  export default Button;
  