<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Token;
use App\Role;
use App\Settings;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Roles
        Role::firstOrCreate(['name' => Role::ROLE_EDITOR]);
        $role_admin = Role::firstOrCreate(['name' => Role::ROLE_ADMIN]);

        // Users
        if (! User::where('email', 'boynoiz@gmail.com')->exists()) {
            $user = User::create([
                'name' => 'boynoiz',
                'email' => 'boynoiz@gmail.com',
                'password' => 'admin'
            ]);

            $user->roles()->attach($role_admin->id);
        }

        // API tokens
        User::where('api_token', null)->get()->each->update([
            'api_token' => Token::generate()
        ]);

        $settings = [
            'maintenance' => '0',
            'site_name' => 'bOynOiz.com',
            'description' => 'Web developer, Gamer, Music, Anime and Life',
            'author' => 'Pathompong Pechkongtong',
            'keywords' => 'blog, internet, it, web developer, gamer',
        ];

        foreach ($settings as $key => $value) {
            Settings::firstOrCreate(['key' => $key, 'value' => $value]);
        }
    }
}
