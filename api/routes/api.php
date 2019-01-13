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
    'uses' => 'ProjectController@postProject',
    'middleware' => 'auth.jwt'
]);

Route::get('/projects', [
    'uses' => 'ProjectController@getProject',
    'middleware' => 'auth.jwt'
]);

Route::put('/project/{id}', [
    'uses' => 'ProjectController@putProject',
    'middleware' => 'auth.jwt'
]);

Route::delete('/project/{id}', [
    'uses' => 'ProjectController@deleteProject',
    'middleware' => 'auth.jwt'
]);

Route::get('/tasks', [
    'uses' => 'TaskController@getTask',
    'middleware' => 'auth.jwt'
]);

Route::post('/task', [
    'uses' => 'TaskController@postTask',
    'middleware' => 'auth.jwt'
]);

Route::put('/task/{id}', [
    'uses' => 'TaskController@putTask',
    'middleware' => 'auth.jwt'
]);

Route::delete('/task/{id}', [
    'uses' => 'TaskController@deleteTask',
    'middleware' => 'auth.jwt'
]);

Route::post('/user', [
    'uses' => 'UserController@signup'
]);

Route::post('/user/signin', [
    'uses' => 'UserController@signin'
]);