"use client";

import { useTask } from "@/context/task-context";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Trash2 } from "lucide-react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TaskList() {
  const { state, dispatch } = useTask();

  const filteredTasks = state.tasks.filter((task) => {
    if (task.deleted) return false;
    if (state.filter === "completed") return task.completed;
    if (state.filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Switch
                  checked={task.completed}
                  onCheckedChange={() =>
                    dispatch({ type: "TOGGLE_TASK", payload: task.id })
                  }
                />
              </TableCell>
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{format(new Date(task.dueDate), "PPP")}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: task.id })
                  }
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}