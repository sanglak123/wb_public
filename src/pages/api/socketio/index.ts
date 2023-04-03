import { Server as ServerIO } from "socket.io";
import { Request, Response } from "express";

export default async (req: any, res: any) => {
  if (!res.socket?.server?.io) {
    console.log("New Socket.io server...");
    // adapt Next's net Server to http Server
    const httpServer = res?.socket?.server;
    const io: any = new ServerIO(httpServer, {
      path: "/api/socketio",
    });
    // append SocketIO server to Next.js socket server response

    res?.socket?.server?.io = io;

    io.on("connection", (socket: any) => {
      console.log(socket.id);

      socket.on("Success_Refills", (data: any) => {
        io.emit("Receive_Refills", {
          from: data.from,
          to: data.to,
        });
      });

      socket.on("_events", (data: any) => {
        io.emit("re_events", data);
      });

      socket.on("socket_off", (id: number) => {
        socket.disconnect();
        console.log(`Socket id:${id} off.`);
      });

      socket.on("disconnect", () => {
        console.log(socket.id, "OFF"); // undefined
      });
    });
  }
  res.end();
};
