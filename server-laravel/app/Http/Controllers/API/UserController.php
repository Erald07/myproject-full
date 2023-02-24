<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    public function registerUser(Request $request)
    {
        if($request->isMethod('POST')){

            $request->validate([
                'email' => 'required|:rfc,dns|unique:users,email',
                'password' => ['required', Password::min(8)->letters()->numbers()->symbols()->mixedCase()],
                'nome' => 'required',
                'cognome' => 'required',
            ]);

            $data = $request->input();

            $user = new User;
            $user->email = $data['email'];
            $user->password = Hash::make($data['password']);
            $user->nome = $data['nome'];
            $user->cognome = $data['cognome'];
            $user->birthday = $data['birthday'];
            $user->sesso = $data['sesso'];

            $user->save();

            $token = $user->createToken($user->email . '_Token')->plainTextToken;

            return response()->json([
                'status' => 200,
                'message' => "Registration was Successful!",
                "username" => $data['nome'],
                'token' => $token,
            ]);

        }
    }
    public function loginUser(Request $request)
    {   
        if($request->isMethod('POST')){
            $data = $request->input();

            $userDetails = User::where('email', $data['email'])->first();

            if( !$userDetails || !password_verify($data['password'], $userDetails->password)){
                return response()->json([
                    'status' => 400,
                    'message' => "Credenziali non valide.!"
                ]);
            }
            else{
                $token = $userDetails->createToken($userDetails->email . '_Token')->plainTextToken;

                return response()->json([
                    'status' => 200,
                    "username" => $userDetails->nome,
                    'token' => $token,
                    'message' => "Login Successfully!"
                ]);
            }
        }
    }
    public function logout()
    {
        Auth::user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        return response()->json([
            'status' => 200,
            'message' => "Logged out Successfully!"
        ]);
    }
}
