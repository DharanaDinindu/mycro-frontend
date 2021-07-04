<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="RambasePOCClient.Default" %>

<!DOCTYPE html>


<!doctype html>
<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular-route.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.js"></script>
    <script src="/html5/js/app.js"></script>
    <script src="/html5/js/angular/services/deplookup.js"></script>
    <script src="/html5/js/angular/services/applookup.js"></script>
    <link rel="stylesheet" href="/html5/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/html5/css/app.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body ng-controller="mainController">
    <div ng-include="'/html5/components/header.html'"></div>

    <div class="row">
        <div class="col-lg-1">
            <div class="icon-bar">
                <a class="active" href="#">
                    <i class="fa fa-dashboard"></i>
                    <div class="text">Dashboard</div>
                </a>
                <a href="#!/logistics">
                    <i class="fa fa-ship"></i>
                    <div class="text">Logistics</div>
                </a>
                <a href="#!/sales">
                    <i class="fa fa-shopping-cart"></i>
                    <div class="text">Sales</div>
                </a>
                <a href="#!/stock">
                    <i class="fa fa-archive"></i>
                    <div class="text">Stock</div>
                </a>
            </div>
        </div>
        <div class="col-lg-11">
            <br/>
            <div ng-view></div>
        </div>
    </div>


    <footer class="text-muted">
        <br/>
        <div class="container">
            <p class="float-right">
                <a href="#">Website</a>
            </p>
            <p>&copy; Rambase POC</p>
        </div>
    </footer>
</body>


</html>