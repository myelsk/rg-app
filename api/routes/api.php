<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/project', [
    'uses' => 'ProjectController@postProject'
]);

Route::get('/projects', [
    'uses' => 'ProjectController@getProject'
]);

Route::put('/project/{id}', [
    'uses' => 'ProjectController@putProject'
]);

Route::delete('/project/{id}', [
    'uses' => 'ProjectController@deleteProject'
]);