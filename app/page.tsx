"use client";

import { TaskList } from "@/components/task-list";
import { TaskForm } from "@/components/task-form";
import { TaskFilters } from "@/components/task-filters";
import { TaskProvider } from "@/context/task-context";
import { Sidebar } from "@/components/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ClipboardList } from "lucide-react";

export default function Home() {
  return (
    <TaskProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <div className="border-b">
            <div className="flex h-16 items-center px-4 gap-4">
              <ClipboardList className="h-6 w-6" />
              <h1 className="text-xl font-semibold">Task Management</h1>
            </div>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="mx-auto max-w-6xl space-y-6">
              <TaskForm />
              <Separator />
              <TaskFilters />
              <TaskList />
            </div>
          </ScrollArea>
        </main>
      </div>
    </TaskProvider>
  );
}