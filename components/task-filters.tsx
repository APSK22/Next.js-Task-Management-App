"use client";

import { useTask } from "@/context/task-context";
import { Button } from "@/components/ui/button";

export function TaskFilters() {
  const { state, dispatch } = useTask();

  return (
    <div className="flex gap-2">
      <Button
        variant={state.filter === "all" ? "default" : "outline"}
        onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}
      >
        All Tasks
      </Button>
      <Button
        variant={state.filter === "completed" ? "default" : "outline"}
        onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
      >
        Completed
      </Button>
      <Button
        variant={state.filter === "incomplete" ? "default" : "outline"}
        onClick={() => dispatch({ type: "SET_FILTER", payload: "incomplete" })}
      >
        Incomplete
      </Button>
    </div>
  );
}