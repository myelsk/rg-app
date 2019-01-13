<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {

    public function postTask(Request $request) {
        $task = new Task();
        $task->name = $request->input('name');
        $task->isDone = $request->input('isDone');
        $task->project_id = $request->input('project_id');
        $task->deadline = $request->input('deadline');
        $task->save();
        return response()->json(['task' => $task], 201);
    }

    public function getTask() {

        $tasks = Task::all();
        return response()->json(['tasks' => $tasks], 200);

    }

    public function putTask(Request $request, $id) {
        $task = Task::find($id);
        if(!$task) return response()->json(['message' => 'document not found']);

        $task->name = $request->input('name');
        $task->isDone = $request->input('isDone');
        $task->project_id = $request->input('project_id');
        $task->deadline = $request->input('deadline');
        $task->save();
        return response()->json(['task' => $task], 200);
    }

    public function deleteTask($id) {
        $task = Task::find($id);
        $task->delete();
        return response()->json(['message' => 'Task Deleted'], 200);
    }
}