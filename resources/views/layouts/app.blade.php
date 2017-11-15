<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="author" content="{{ config('settings.author') }}">
    <meta name="description" content="{{ config('settings.description') }}">
    <meta name="keywords" content="{{ config('settings.keywords') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('settings.site_name') }}</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @auth
        <meta name="api-token" content="{{ auth()->user()->api_token }}">
    @endauth

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('assets/css/app.css') }}" media="all">
</head>
<body class="bg-light">
    <div id="app">
        @include('shared/navbar')

        <div class="container {{ (Request::is('/') || Request::is('posts/*') || Request::is('login') || Request::is('register')) ? '' : 'bg-white' }}">
            @include('shared/alerts')

            <div class="row">
                <div class="col-md-12">
                    @yield('content')
                </div>
            </div>
        </div>

        {{--@include('shared/footer')--}}
    </div>

    <!-- Scripts -->
    @routes
    <script src="{{ mix('assets/js/manifest.js') }}"></script>
    <script src="{{ mix('assets/js/vendor.js') }}"></script>
    <script src="{{ mix('assets/js/app.js') }}"></script>
    @stack('inline-scripts')
</body>
</html>
