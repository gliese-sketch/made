import { UserRoundPlusIcon } from "lucide-react";

function NewUser({ name }) {
  return (
    <div>
      {UserRoundPlusIcon} {name} just joined
    </div>
  );
}

export default NewUser;
