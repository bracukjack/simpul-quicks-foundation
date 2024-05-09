import * as fs from "fs";

interface Participant {
  id_participant: number;
  name_participant: string;
  user?: boolean;
}

interface Message {
  id_message: number;
  id_participant: number;
  message: string;
  date: string;
}

interface ChatRoom {
  id: number;
  name_room: string; // Tambah properti name_room
  participants: Participant[];
  messages: Message[];
}

export interface ChatRoomData {
  chatRooms: ChatRoom[];
}

export const chatRooms: ChatRoom[] = [
  {
    id: 1,
    name_room: "Room A",
    participants: [
      { id_participant: 100, name_participant: "Widi", user: true }, // Anda adalah pengguna
      { id_participant: 101, name_participant: "Alice", user: false },
      { id_participant: 102, name_participant: "Bob", user: false },
      { id_participant: 103, name_participant: "Carol", user: false },
    ],
    messages: [
      {
        id_message: 1,
        id_participant: 100,
        message: "Hi everyone!",
        date: "2024-05-08 10:00:00",
      },
      {
        id_message: 2,
        id_participant: 102,
        message: "Hey Widi, how are you?",
        date: "2024-05-09 10:05:00",
      },
      {
        id_message: 3,
        id_participant: 103,
        message: "Hi guys!",
        date: "2024-05-09 10:10:00",
      },
      {
        id_message: 4,
        id_participant: 100,
        message: "I'm doing great, thanks for asking!",
        date: "2024-05-09 10:15:00",
      },
      {
        id_message: 5,
        id_participant: 102,
        message: "I'm good too!",
        date: "2024-05-09 10:20:00",
      },
      {
        id_message: 6,
        id_participant: 103,
        message: "That's good to hear!",
        date: "2024-05-09 10:25:00",
      },
      {
        id_message: 7,
        id_participant: 101,
        message: "Anyone have plans for the weekend?",
        date: "2024-05-09 10:30:00",
      },
      {
        id_message: 8,
        id_participant: 102,
        message: "I'm going hiking!",
        date: "2024-05-09 10:35:00",
      },
      {
        id_message: 9,
        id_participant: 103,
        message: "I'll probably just relax at home.",
        date: "2024-05-09 10:40:00",
      },
      {
        id_message: 10,
        id_participant: 101,
        message: "Sounds nice!",
        date: "2024-05-09 10:45:00",
      },
      {
        id_message: 11,
        id_participant: 102,
        message: "Yeah, it should be fun!",
        date: "2024-05-09 10:50:00",
      },
      {
        id_message: 12,
        id_participant: 103,
        message: "Have a great time!",
        date: "2024-05-09 10:55:00",
      },
      {
        id_message: 13,
        id_participant: 101,
        message: "Thanks!",
        date: "2024-05-09 11:00:00",
      },
      {
        id_message: 14,
        id_participant: 102,
        message: "You too!",
        date: "2024-05-09 11:05:00",
      },
      {
        id_message: 15,
        id_participant: 103,
        message: "Enjoy your hike!",
        date: "2024-05-09 11:10:00",
      },
      {
        id_message: 16,
        id_participant: 101,
        message: "Will do!",
        date: "2024-05-09 11:15:00",
      },
      {
        id_message: 17,
        id_participant: 102,
        message: "I'm excited!",
        date: "2024-05-09 11:20:00",
      },
      {
        id_message: 18,
        id_participant: 103,
        message: "It's a beautiful day for it.",
        date: "2024-05-09 11:25:00",
      },
      {
        id_message: 19,
        id_participant: 101,
        message: "Absolutely!",
        date: "2024-05-09 11:30:00",
      },
      {
        id_message: 20,
        id_participant: 102,
        message: "Let's make the most of it!",
        date: "2024-05-09 11:35:00",
      },
    ],
  },

  {
    id: 2,
    name_room: "Room B", // Nama ruang obrolan
    participants: [
      { id_participant: 100, name_participant: "Widi", user: true },
      { id_participant: 104, name_participant: "Dave", user: false },
      { id_participant: 105, name_participant: "Eve", user: false },
      { id_participant: 106, name_participant: "Frank", user: false },
    ],
    messages: [
      {
        id_message: 1,
        id_participant: 100,
        message: "Hello everyone!",
        date: "2024-05-09 11:00:00",
      },
      {
        id_message: 2,
        id_participant: 105,
        message: "Hi Dave!",
        date: "2024-05-09 11:05:00",
      },
      {
        id_message: 3,
        id_participant: 106,
        message: "Good morning all!",
        date: "2024-05-09 11:10:00",
      },
    ],
  },
  {
    id: 3,
    name_room: "Room C", // Nama ruang obrolan
    participants: [
      { id_participant: 100, name_participant: "Widi", user: true },
      { id_participant: 107, name_participant: "Grace" },
      { id_participant: 108, name_participant: "Harry" },
      { id_participant: 109, name_participant: "Ivy" },
    ],
    messages: [
      {
        id_message: 1,
        id_participant: 107,
        message: "Hey guys!",
        date: "2024-05-09 12:00:00",
      },
      {
        id_message: 2,
        id_participant: 108,
        message: "What's up?",
        date: "2024-05-09 12:05:00",
      },
      {
        id_message: 3,
        id_participant: 109,
        message: "Not much, just chilling",
        date: "2024-05-09 12:10:00",
      },
    ],
  },
  {
    id: 4,
    name_room: "Room D", // Nama ruang obrolan
    participants: [
      { id_participant: 100, name_participant: "Widi", user: true },
      { id_participant: 110, name_participant: "Jack" },
      { id_participant: 111, name_participant: "Karen" },
      { id_participant: 112, name_participant: "Lily" },
    ],
    messages: [
      {
        id_message: 1,
        id_participant: 110,
        message: "How is everyone?",
        date: "2024-05-09 13:00:00",
      },
      {
        id_message: 2,
        id_participant: 111,
        message: "I'm good, thanks for asking!",
        date: "2024-05-09 13:05:00",
      },
      {
        id_message: 3,
        id_participant: 112,
        message: "Doing great too!",
        date: "2024-05-09 13:10:00",
      },
    ],
  },

  {
    id: 5,
    name_room: "Room Test 5", // Nama ruang obrolan
    participants: [
      { id_participant: 100, name_participant: "Widi", user: true },
      { id_participant: 110, name_participant: "Jack" },
      { id_participant: 111, name_participant: "Karen" },
      { id_participant: 112, name_participant: "Lily" },
    ],
    messages: [
      {
        id_message: 1,
        id_participant: 110,
        message: "How is everyone?",
        date: "2024-05-09 13:00:00",
      },
      {
        id_message: 2,
        id_participant: 111,
        message: "I'm good, thanks for asking!",
        date: "2024-05-09 13:05:00",
      },
      {
        id_message: 3,
        id_participant: 112,
        message: "Doing great too!",
        date: "2024-05-09 13:10:00",
      },
    ],
  },

  {
    id: 6,
    name_room: "Room Test 6", // Nama ruang obrolan
    participants: [
      { id_participant: 100, name_participant: "Widi", user: true },
      { id_participant: 110, name_participant: "Jack" },
      { id_participant: 111, name_participant: "Karen" },
      { id_participant: 112, name_participant: "Lily" },
    ],
    messages: [
      {
        id_message: 1,
        id_participant: 110,
        message: "How is everyone?",
        date: "2024-05-09 13:00:00",
      },
      {
        id_message: 2,
        id_participant: 111,
        message: "I'm good, thanks for asking!",
        date: "2024-05-09 13:05:00",
      },
      {
        id_message: 3,
        id_participant: 112,
        message: "Doing great too!",
        date: "2024-05-09 13:10:00",
      },
    ],
  },

  {
    id: 7,
    name_room: "Room Test 7", // Nama ruang obrolan
    participants: [
      { id_participant: 100, name_participant: "Widi", user: true },
      { id_participant: 110, name_participant: "Jack" },
      { id_participant: 111, name_participant: "Karen" },
      { id_participant: 112, name_participant: "Lily" },
    ],
    messages: [
      {
        id_message: 1,
        id_participant: 110,
        message: "How is everyone?",
        date: "2024-05-09 13:00:00",
      },
      {
        id_message: 2,
        id_participant: 111,
        message: "I'm good, thanks for asking!",
        date: "2024-05-09 13:05:00",
      },
      {
        id_message: 3,
        id_participant: 112,
        message: "Doing great too!",
        date: "2024-05-09 13:10:00",
      },
    ],
  },

  {
    id: 8,
    name_room: "Room Test 8", // Nama ruang obrolan
    participants: [
      { id_participant: 100, name_participant: "Widi", user: true },
      { id_participant: 110, name_participant: "Jack" },
      { id_participant: 111, name_participant: "Karen" },
      { id_participant: 112, name_participant: "Lily" },
    ],
    messages: [
      {
        id_message: 1,
        id_participant: 110,
        message: "How is everyone?",
        date: "2024-05-09 13:00:00",
      },
      {
        id_message: 2,
        id_participant: 111,
        message: "I'm good, thanks for asking!",
        date: "2024-05-09 13:05:00",
      },
      {
        id_message: 3,
        id_participant: 112,
        message: "Doing great too!",
        date: "2024-05-09 13:10:00",
      },
    ],
  },
];
