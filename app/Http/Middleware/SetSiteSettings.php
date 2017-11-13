<?php

namespace App\Http\Middleware;

use Closure;
use Config;
use Cache;
use App\Settings;

class SetSiteSettings
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $settings = Cache::remember('settings', 24*60, function() {
            return array_pluck(Settings::all()->toArray(), 'value', 'key');
        });
        Config::set(['settings' => $settings]);
        return $next($request);
    }
}
