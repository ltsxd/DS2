(function(app) {

    app.controller('SignController', function( $scope, SignService, $sessionStorage, $location ) {

        //Inicia o objeto usuario
        $scope.usuario = {
            username: '',
            password: '',
            nome: '',
            email: ''
        }

        //Faz a autenticação
        $scope.signin = function() {

            SignService.entrar( $scope.usuario )
                .then(result => {
                    //Grava o usuário na sessão
                    $sessionStorage.logado = result.data;
                    $location.path('/feed');
                })  
                .catch(error => {
                    if (error.status === 403) {
                        $scope.failUser = error.data.failtype == 'auth-fail-username';
                        $scope.failPass = error.data.failtype == 'auth-fail-password';
                        $scope.msgError = error.data.msg;
                    }else if (error.status < 0) {
                        $scope.fatalError = 'Servidor inacessivel'; 

                    } else {
                        $scope.fatalError = error.data.msg;
                    }
                    
                });

        }

        //Cria um novo usuário
        $scope.signup = function() {

            SignService.existe($scope.usuario.username)
                .then(result => {
                    //Se der certo a requisição, significa que o recurso existe
                    $scope.userFail = true;

                })
                .catch(error => {
                    //Se o status for 404, significa que o usuário não existe, então, pode continuar                    
                    if (error.status === 404) {
                        SignService.cadastrar($scope.usuario)
                            .then(result => {
                                $location.path('/sign');
                            })
                            .catch(error => {
                                $scope.fatalError = erro.data.msg;
                            });
                    } else {
                        $scope.fatalError = erro.data.msg;
                    }
                });

        }
    });

})( appDS2 );