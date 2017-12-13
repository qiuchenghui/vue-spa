<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    {{--<script src="http://at.alicdn.com/t/font_504026_66et9iu5xoxyldi.js"></script>--}}
    <title>Laravel Vue SPA</title>
</head>
<body>
<div id="app">
    <app></app>
</div>

{{--<script src="{{ mix('js/app.js') }}"></script>--}}
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendor.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
