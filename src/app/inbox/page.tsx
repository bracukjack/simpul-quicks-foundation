"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "@/component/SearchBarComponent";
import { chatRooms } from "./data";
import ChatRoom from "@/component/ChatRoomComponent";
import { formatDate, formatDayDate } from "@/utils/DateFormat";
import Loading from "@/component/LoadingComponent";

const data = chatRooms;

const Inbox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    const filteredRooms = data.filter((room) =>
      room.name_room.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredData(filteredRooms);
  }, [searchTerm]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="px-8 py-2 text-black">
      <SearchBar
        value={searchTerm}
        onChange={handleChange}
        onSearch={handleSearch}
        placeholder="Search..."
      />

      <div className="min-h-96 h-128 overflow-y-scroll">
        {isLoading && <Loading />}

        {!isLoading &&
          filteredData.map((room, index) => (
            <ChatRoom
              key={index}
              chatMessage={room.messages[0].message}
              chatTime={formatDate(room.messages[0].date)}
              chatUser={room.participants[0].name_participant}
              chatName={room.name_room}
              roomId={room.id.toString()}
            />
          ))}
      </div>
    </div>
  );
};

export default Inbox;
