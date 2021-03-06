<?php

namespace App\Http\Controllers;

use App\Project;
use App\Task;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function postProject(Request $request)
    {
        $project = new Project();
        $project->name = $request->input('name');
        $project->user_id = $request->input('user_id');
        $project->save();
        return response()->json([$project], 201);
    }

    public function getProject($user_id)
    {

        $projects = DB::table('projects')->where('user_id', $user_id)->get();
        return response()->json(['projects' => $projects], 200);

    }

    public function putProject(Request $request, $id)
    {
        $project = Project::find($id);
        if (!$project) return response()->json(['message' => 'document not found']);

        $project->name = $request->input('name');
        $project->save();
        return response()->json($project, 200);
    }

    public function deleteProject($id)
    {
        $project = Project::find($id);
        $project->delete();
        $tasks = Task::where('project_id', '=', $id);
        $tasks->delete();
        return response()->json(['message' => 'Project Deleted'], 200);
    }
}
