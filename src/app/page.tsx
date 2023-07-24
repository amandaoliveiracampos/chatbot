"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-200 items-center justify-center">
      <Card className="w-[440px] bg-slate-50  h-[700px] grid grid-rows  ">
        <CardHeader>
          <CardTitle> Chat Ai</CardTitle>
          <CardDescription>
            Using vercel SDK to create a chat bot.
          </CardDescription>
          <CardContent className="space-y-4">
            <div className="flex gap-3 text-slate-600 text-sm">
              <Avatar>
                <AvatarFallback>DF</AvatarFallback>
                <AvatarImage
                  className="min-w-xs mt-3 rounded-full"
                  src="https://github.com/amandaoliveiracampos.png"
                ></AvatarImage>
              </Avatar>
              <p className="mt-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo natus sequi beatae tempore, nesciunt cum, quaerat quod
                ipsa ratione nisi voluptatibus harum! Iure numquam odit
                deleniti. Facere veniam quisquam harum.
              </p>
            </div>
            <div className="flex gap-3 text-slate-600 text-sm">
              {" "}
              <Avatar>
                <AvatarFallback>DF</AvatarFallback>
                <AvatarImage
                  className=" w-[400px] mt-3 rounded-full"
                  src="https://github.com/rocketseat.png"
                ></AvatarImage>
              </Avatar>
              <p className="mt-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                quidem eos corporis voluptas ex asperiores esse possimus
                cupiditate dolorem nesciunt ratione vitae nam enim repudiandae
                cum aut non error consequuntur.
              </p>
            </div>
          </CardContent>
          <CardFooter className="space-x-2 pt-32">
            <Input placeholder="How can I help You?"></Input>
            <Button
              className="bg-black hover:bg-black  text-white rounded-xl "
              type="submit"
            >
              Send
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}
