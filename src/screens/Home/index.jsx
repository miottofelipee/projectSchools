import { View, Text, Image } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={'FUT200'}/>
      <Image style={styles.img} source={require('../../.././assets/images/fut.png')}/>
      <View>
        <Text style={styles.desc}>
        O Sistema de Cadastro de Escolas de Futebol é uma plataforma moderna e eficiente projetada para simplificar o processo de registro e 
        gerenciamento de escolas de futebol em todo o país. Com uma interface amigável e intuitiva, o sistema oferece 
        uma variedade de recursos e funcionalidades para atender às necessidades específicas dessas instituições.
        </Text>
      </View>
    </View>
  )
}