<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {

    public function postTask(Request $request) {
        $task = new Task();
        $task->name = $request->input('name');
        $task->description = $request->input('description');
        $task->isDone = $request->input('isDone');
        $task->project_id = $request->input('project_id');
        $task->priority = $request->input('priority');
        $task->deadline = $request->input('deadline');
        $task->save();
        return response()->json(['task' => $task], 201);
    }

    public function getProject() {

        $quotes = Task::all();
        return response()->json(['quotes' => $quotes], 200);

    }

    public function putProject(Request $request, $id) {
        $quote = Task::find($id);
        if(!$quote) return response()->json(['message' => 'document not found']);

        $quote->content = $request->input('content');
        $quote->save();
        return response()->json(['quote' => $quote], 200);
    }

    public function deleteProject($id) {
        $quote = Task::find($id);
        $quote->delete();
        return response()->json(['message' => 'Quote Deleted'], 200);
    }
}