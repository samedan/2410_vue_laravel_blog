<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // POST /api/register
    public function register(Request $request) {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|string|unique:users,email',
            'password' => 'required'
        ]);
        $user = User::create([
            'name' =>$data['name'],
            'email' =>$data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ], 201  );
    }   

    // POST /api/login
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email|string',
            'password' => 'required'
        ]);
        
        if(!Auth::attempt($credentials)) {
            return response([
                'error' => 'Wrong login credentials',
            ]);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token,
        ]);

    }

}
