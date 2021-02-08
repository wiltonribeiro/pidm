import Home from './Home';
import IMC from './IMCApp';
import Sobre from './Sobre'
import Perfil from './Perfil'
import Cadastro from './Cadastro';
import Resultado from './Resultado';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const stack = createStackNavigator(
    {
        Home,
        Cadastro,
        IMC,
        Sobre,
        Perfil,
        Resultado
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fafafa',
            },
            headerTintColor: '#919191',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
)

const Rotas = createAppContainer(createStackNavigator(
    {
        Main: stack,
        ResultadoModal: Resultado
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
));

export default Rotas;