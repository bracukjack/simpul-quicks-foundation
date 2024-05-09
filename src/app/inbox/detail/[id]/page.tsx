"use client";

import { useParams, useRouter } from "next/navigation";
import { chatRooms } from "../../data";
import { ArrowLeftIcon, MoreIcon } from "@/component/CustomIconComponents";
import Link from "next/link";
import { formatDate, formatDayDate, formatTime } from "@/utils/DateFormat";
import TextInput from "@/component/TypeBarComponent";
import AppButton from "@/component/ButtonComponent";
import { useState } from "react";

const Detail = () => {
  const router = useRouter();
  const { id } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const data = chatRooms.find((room) => room.id === Number(id));
  const [dropdownVisibleIndex, setDropdownVisibleIndex] = useState(-1);

  const handleOptionClick = (option: string) => {
    console.log("Option clicked:", option);
    setDropdownVisibleIndex(-1);
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMessageObj = {
      id_message: (data?.messages?.length ?? 0) + 1,
      id_participant:
        data?.participants.find((participant) => participant.user)
          ?.id_participant ?? 0,
      message: newMessage,
      date: new Date().toISOString(),
    };

    if (data) {
      data.messages.push(newMessageObj);
    }

    setNewMessage("");
  };

  return (
    <div className="text-black">
      <div className="flex h-full items-center gap-x-10 border-b px-8 py-3">
        <Link href="/inbox">
          <ArrowLeftIcon className=" h-5 w-5 fill-black" />
        </Link>

        <div className="flex flex-col items-start justify-start">
          <p className="text-PriBlue text-lg font-semibold">
            {data?.name_room}
          </p>
          <p className="text-PriGray text-xs">
            {data?.participants.length} Participants
          </p>
        </div>
      </div>

      <div className=" px-8 py-6">
        <div className="flex h-96 flex-col gap-y-5 overflow-y-scroll lg:h-112 ">
          {data?.messages.map((msg, index) => {
            const participant = data.participants.find(
              (p) => p.id_participant === msg.id_participant,
            );
            const isUser = participant?.user || false;
            const isMyMessage = participant?.user === true;
            let participantColor;
            let messageBgColor;
            let messageTextColor;
            if (participantColor === "ChtPurple") {
              messageBgColor = "bg-ChtPurple-100";
              messageTextColor = "text-ChtPurple-500";
            } else if (participantColor === "ChtGreen") {
              messageBgColor = "bg-ChtGreen-100";
              messageTextColor = "text-ChtGreen-500";
            } else {
              messageBgColor = "bg-ChtOrange-100";
              messageTextColor = "text-ChtOrange-500";
            }

            const isFirstMessage =
              index === 0 ||
              msg.date.split(" ")[0] !==
                data.messages[index - 1].date.split(" ")[0];
            const displayDate = isFirstMessage ? msg.date.split(" ")[0] : "";

            return (
              <div key={msg.id_message}>
                {isFirstMessage && (
                  <div className="flex items-center justify-center gap-x-1 py-2 text-center text-xs text-gray-500">
                    <div className="w-full border-b border-gray-500"></div>
                    <p className="w-full"> {formatDayDate(displayDate)}</p>
                    <div className="w-full border-b border-gray-500"></div>
                  </div>
                )}

                <div
                  className={`flex w-full flex-col items-${
                    isMyMessage || isUser ? "end" : "start"
                  }`}
                >
                  <div className="mb-1 flex items-center">
                    <div>
                      <p className={`font-semibold ${messageTextColor}`}>
                        {!isMyMessage && !isUser
                          ? participant?.name_participant
                          : isMyMessage && isUser
                          ? "You"
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start gap-x-3 ${
                      isMyMessage || isUser ? "" : "flex-row-reverse"
                    }`}
                  >
                    <div className="relative">
                      <MoreIcon
                        className="fill-PriGray h-5 w-5 cursor-pointer"
                        onClick={() =>
                          setDropdownVisibleIndex(
                            dropdownVisibleIndex === msg.id_message
                              ? -1
                              : msg.id_message,
                          )
                        }
                      />
                      {dropdownVisibleIndex === msg.id_message && (
                        <div className="absolute right-0 top-0 mt-8 w-fit rounded-md border border-gray-300 bg-white shadow-md">
                          {/* Dropdown options */}
                          <div
                            className="text-PriBlue cursor-pointer px-5 py-2 hover:bg-gray-100"
                            onClick={() => handleOptionClick("Edit")}
                          >
                            Edit
                          </div>
                          <div
                            className="text-IndRed cursor-pointer px-5 py-2 hover:bg-gray-100"
                            onClick={() => handleOptionClick("Delete")}
                          >
                            Delete
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`${messageBgColor} flex w-fit flex-col justify-start gap-y-2 rounded-md p-4`}
                    >
                      <p className="text-gray-800">{msg.message}</p>
                      <p className="text-xs text-gray-500">
                        {formatTime(msg.date)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex w-full items-center gap-x-5">
          <TextInput
            placeholder="Type a new message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <AppButton
            label="Send"
            rounded="rounded-md"
            color="primary"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
