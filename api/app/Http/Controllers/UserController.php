<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use JWTAuth;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller {

    public function signup(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        $user = new User([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password'))
        ]);

        $user->save();
        return response()->json([
            'user_id' => $user->id,
            'message' => 'Successfully created user'
        ], 201);
    }

    public function signin(Request $request) {

        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        $credentials = $request->only('email', 'password');
        try {
            if(!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'error' => 'Invalid login or password',
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'could not create token'
            ], 500);
        }
        return response()->json([
            'message' => 'You are loggen in now!',
            'user_id' => Auth::id(),
            'token' => $token
        ],200);
    }

}
