<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="author" content="{{ config('settings.author') }}">
    <meta name="description" content="{{ config('settings.description') }}">
    <meta name="keywords" content="{{ config('settings.keywords') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('settings.site_name') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Athiti:400,600" rel="stylesheet" type="text/css">
    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Athiti', sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
<main id="app">
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="title m-b-md">
                สวัสดี
            </div>
            <div class="links">
                <a href="{{ route('blog') }}">Blog</a>
                <a href="https://www.linkedin.com/in/boynoiz">About me</a>
                <a href="https://github.com/boynoiz">GitHub</a>
            </div>
        </div>
    </div>
</main>
<script src="{{ asset('assets/js/manifest.js') }}"></script>
<script src="{{ asset('assets/js/vendor.js') }}"></script>
<script src="{{ asset('assets/js/app.js') }}"></script>
</body>
</html>
