import { useRouter } from "next/navigation";
import AppButton from "./ButtonComponent";
import Button from "./ButtonComponent";
import { UserIcon } from "./CustomIconComponents";
import Link from "next/link";

interface ChatRoomProps {
  chatMessage: string;
  chatTime: string;
  chatUser: string;
  chatName: string;
  roomId: string;
}
const ChatRoom = ({
  chatMessage,
  chatTime,
  chatUser,
  chatName,
  roomId,
}: ChatRoomProps) => {
  const navigate = useRouter(); // Menggunakan useNavigate untuk navigasi

  return (
    <div className="mb-3 mt-2 flex items-start justify-start gap-x-5 border-b pb-7">
      <Link href={`/inbox/detail/${roomId}`}>
        <div className="flex">
          <AppButton
            rounded="rounded-full"
            startIcon={<UserIcon ClassName="text-black" />}
            color="white"
          />
          <AppButton
            rounded="rounded-full"
            className="-ml-7"
            startIcon={<UserIcon ClassName="text-black" />}
            color="primary"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-y-0">
        <div className="mb-1 grid w-full grid-cols-3 items-start gap-x-10">
          <Link href={`/inbox/detail/${roomId}`} className="col-span-2">
            <p className="text-PriBlue text-lg font-semibold">{chatName}</p>
          </Link>

          <p className="text-PriSilver col-span-1 text-xs lg:text-base">
            {chatTime}
          </p>
        </div>

        <p className="text-PriGray text-sm font-medium">{chatUser} :</p>
        <p className="text-PriSilver text-sm">{chatMessage}</p>
      </div>
    </div>
  );
};

export default ChatRoom;
