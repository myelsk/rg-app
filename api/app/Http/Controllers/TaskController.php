<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller {

    public function postTask(Request $request, $project_id) {
        $task = new Task();
        $task->name = $request->input('name');
        $task->isDone = $request->input('isDone');
        $task->project_id = $project_id;
        $task->deadline = $request->input('deadline');
        $task->priority = $request->input('priority');
        $task->save();
        return response()->json([$task], 201);
    }

    public function getTask($id) {
        $tasks = DB::table('tasks')->where('project_id', $id)->get();
        return response()->json(['tasks' => $tasks], 200);

    }

    public function increasePriority(Request $request, $project_id, $priority) {
//        $task = DB::table('tasks')->where('project_id', $project_id)->where('priority', $priority)->first()->update(['priority' => $priority + 1]);
        $task = Task::where([
            'project_id' => $project_id,
            'priority' => $priority
        ])->first();
        $task->priority = $request->input('priority');
        $task->save();
//        $task = Task::where('project_id', '=', $project_id)->get();
//        $task = DB::table('tasks')->where('project_id', $project_id)->where('priority', $priority)->get();
//        $task->priority = $request->input('priority') + 1;
//        $task->save();
    }

    public function decreasePriority(Request $request, $project_id, $priority) {
//        $task = Task::where('project_id', '=', $project_id)->get();
//        $task = DB::table('tasks')->where('project_id', $project_id)->where('priority', $priority)->first()->update(['priority' => $priority - 1]);
        $task = Task::where([
            'project_id' => $project_id,
            'priority' => $priority
        ])->first();
        $task->priority = $request->input('priority');
        $task->save();
//        $task->priority = $request->input('priority') - 1;
//        $task->save();
    }


    public function putTask(Request $request, $id) {
        $task = Task::find($id);
        if(!$task) return response()->json(['message' => 'document not found']);

        $task->name = $request->input('name');
        $task->isDone = $request->input('isDone');
        $task->project_id = $request->input('project_id');
        $task->priority = $request->input('priority');
        $task->deadline = $request->input('deadline');
        $task->save();
        return response()->json(['task' => $task], 200);
    }

    public function deleteTask($id, $priority) {
        //        $tasks = $builder->where('priority', '>', $priority);
//        $tasks = DB::table('tasks')->where('priority', '>', $priority)->get();

        $tasks = Task::where('priority', '>', $priority)->get();
        foreach($tasks as $task) {
            $task->priority--;
            $task->save();
        }
        $task = Task::find($id);
        $task->delete();
        return response()->json([$tasks]);
//        return response()->json(['message' => 'Task Deleted'], 200);
    }
}