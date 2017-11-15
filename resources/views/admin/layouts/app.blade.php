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
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('assets/css/app.css') }}" media="all">
</head>
<body class="admin-body bg-light">
    <div id="app">
        @include('shared/navbar')

        <div class="container-fluid {{ Request::is('admin/dashboard') ? '' : 'bg-white' }}">
            <div class="row">
                @include('admin/shared/sidebar')

                <main class="col-lg-10 ml-md-auto">
                    @include('shared/alerts')

                    @yield('content')
                </main>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    @routes
    <script src="{{ mix('assets/js/manifest.js') }}"></script>
    <script src="{{ mix('assets/js/vendor.js') }}"></script>
    <script src="{{ mix('assets/js/app.js') }}"></script>
    @stack('inline-scripts')
</body>
</html>
